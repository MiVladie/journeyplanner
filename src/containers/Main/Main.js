import React, { useState } from 'react';
import axios from 'axios';

import Form from '../../components/Form/Form';
import Journeys from '../Journeys/Journeys';

import { useStore } from '../../hooks-store/store';
import { TFL_APP_ID, TFL_APP_KEY } from '../../config/constants';

import classes from './Main.module.scss';

const Main = ({ data }) => {
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	const dispatch = useStore()[1];

	const submitHandler = async (values) => {
		setLoading(true);
		setError(null);

		let from = values.location.coordinates || values.location.name;
		let to =
			values.destination.coordinates ||
			values.destination.name;
		let mode = '';
		let date = values.date.replace(/-/g, '');
		let time = values.time.replace(':', '');
		let timeIs = values.timeIs;

		const url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?mode=${mode}&date=${date}&time=${time}&timeIs=${timeIs}&app_id=${TFL_APP_ID}&app_key=${TFL_APP_KEY}`;

		try {
			const response = await axios.get(url);

			setLoading(false);

			dispatch('ADD_DATA', {
				journeys: response.data.journeys,
				meta: {
					timeIs: values.timeIs,
					date:
						response.data.searchCriteria
							.dateTime,
					from: {
						name: values.location.name,
						coordinates: {
							lat: parseFloat(
								response.data.journeyVector.from.split(
									':'
								)[1]
							),
							lng: parseFloat(
								response.data.journeyVector.from.split(
									':'
								)[0]
							),
						},
					},
					to: {
						name: values.destination.name,
						coordinates: {
							lat: parseFloat(
								response.data.journeyVector.to.split(
									':'
								)[1]
							),
							lng: parseFloat(
								response.data.journeyVector.to.split(
									':'
								)[0]
							),
						},
					},
				},
			});

			dispatch('SET_JOURNEY_PATH', [
				{
					mode: 'straight',
					path: [
						{
							lat: parseFloat(
								response.data.journeyVector.from.split(
									':'
								)[1]
							),
							lng: parseFloat(
								response.data.journeyVector.from.split(
									':'
								)[0]
							),
						},
						{
							lat: parseFloat(
								response.data.journeyVector.to.split(
									':'
								)[1]
							),
							lng: parseFloat(
								response.data.journeyVector.to.split(
									':'
								)[0]
							),
						},
					],
				},
			]);
		} catch (error) {
			let message =
				error.response && error.response.status === 300
					? 'Travelling outside London?'
					: 'Please, try again.';

			setLoading(false);
			setError("Oops, that's an error! " + message);
		}
	};

	const replanHandler = () => {
		dispatch('ADD_DATA', { journeys: null, meta: null });
		dispatch('SET_JOURNEY_PATH', { activeJourneyPath: null });
	};

	const weekDays = () => {
		let dateRows = [{ name: 'today' }, { name: 'tomorrow' }];

		let today = new Date();
		let daysOfWeek = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		for (let i = 2; i < 7; i++) {
			let day = daysOfWeek[(today.getDay() + i) % 7];
			dateRows.push({ name: day, value: day });
		}

		for (let i = 0; i < 7; i++) {
			let result = new Date();
			result.setDate(result.getDate() + i);

			dateRows[i].value = result.toISOString().slice(0, 10);
		}

		return dateRows;
	};

	const form = (
		<Form
			data={[
				{
					label: 'Where are you?',
					fields: [
						{
							name: 'location',
							placeholder:
								'Enter your location',
							type: 'location',
							detectCurrentLocation: true,
							required: true,
						},
					],
				},
				{
					label: 'Where do you want to go?',
					fields: [
						{
							name: 'destination',
							placeholder:
								'Enter your destination',
							type: 'location',
							required: true,
						},
					],
				},
				{
					label: 'I am..',
					fields: [
						{
							name: 'timeIs',
							options: [
								{
									name:
										'departing',
									value:
										'departing',
								},
								{
									name:
										'arriving',
									value:
										'arriving',
								},
							],
							type: 'radio',
							required: true,
						},
					],
				},
				{
					label: 'When?',
					fields: [
						{
							name: 'date',
							options: weekDays(),
							type: 'dropdown',
						},
						{
							name: 'time',
							type: 'time',
							required: true,
						},
					],
				},
			]}
			inputs={{
				location: { name: null, coordinates: null },
				destination: { name: null, coordinates: null },
				timeIs: 'departing',
				date: new Date().toISOString().slice(0, 10),
				time: new Date().toISOString().slice(11, 16),
			}}
			button='Go!'
			onSubmit={submitHandler}
			error={error}
			loading={loading}
		/>
	);

	const journeys = <Journeys data={data} onReplan={replanHandler} />;

	return (
		<div
			className={classes.Main}
			style={loading ? { position: 'relative' } : null}>
			{data ? journeys : form}
		</div>
	);
};

export default Main;
