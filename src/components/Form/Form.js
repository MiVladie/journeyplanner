import React, { useState } from 'react';

import Location from '../UI/Location/Location';
import Radio from '../UI/Radio/Radio';
import Dropdown from '../UI/Dropdown/Dropdown';
import Time from '../UI/Time/Time';
import Spinner from '../UI/Spinner/Spinner';

import classes from './Form.module.scss';

const Form = ({ data, button, onSubmit, inputs, error, loading }) => {
	const [values, setValues] = useState(inputs);

	const onSubmitHandler = (event) => {
		event.preventDefault();
		onSubmit(values);
	};

	const isSubmitEnabled = () => {
		for (let section of data) {
			for (let field of section.fields) {
				if (
					field.required &&
					(values == null ||
						values[field.name] == null ||
						values[field.name] === '' ||
						values[field.name].name ===
							'' ||
						values[field.name].name ===
							null)
				) {
					return false;
				}
			}
		}

		return true;
	};

	let sections = data.map((section) => (
		<div className={classes.Section} key={section.label}>
			<label className={classes.Label}>{section.label}</label>

			<div className={classes.Field}>
				{section.fields.map((field) => {
					let component;

					switch (field.type) {
						case 'location':
							component = (
								<Location
									placeholder={
										field.placeholder
									}
									value={
										values !=
											null &&
										values[
											field
												.name
										] !=
											null
											? values[
													field
														.name
											  ]
											: ''
									}
									onChange={(
										name,
										coordinates
									) =>
										setValues(
											{
												...values,
												[field.name]: {
													name: name,
													coordinates: coordinates,
												},
											}
										)
									}
									detectCurrentLocation={
										field.detectCurrentLocation
									}
									key={
										field.name
									}
								/>
							);
							break;

						case 'radio':
							component = (
								<Radio
									value={
										values !=
											null &&
										values[
											field
												.name
										] !=
											null
											? values[
													field
														.name
											  ]
											: ''
									}
									onChange={(
										value
									) =>
										setValues(
											{
												...values,
												[field.name]: value,
											}
										)
									}
									options={
										field.options
									}
									key={
										field.name
									}
								/>
							);
							break;

						case 'dropdown':
							component = (
								<Dropdown
									value={
										values !=
											null &&
										values[
											field
												.name
										] !=
											null
											? values[
													field
														.name
											  ]
											: ''
									}
									onChange={(
										value
									) =>
										setValues(
											{
												...values,
												[field.name]: value,
											}
										)
									}
									options={
										field.options
									}
									key={
										field.name
									}
								/>
							);
							break;

						case 'time':
							component = (
								<Time
									value={
										values !=
											null &&
										values[
											field
												.name
										] !=
											null
											? values[
													field
														.name
											  ]
											: ''
									}
									onChange={(
										value
									) =>
										setValues(
											{
												...values,
												[field.name]: value,
											}
										)
									}
									key={
										field.name
									}
								/>
							);
							break;

						default:
							break;
					}

					return component;
				})}
			</div>
		</div>
	));

	return (
		<form className={classes.Form}>
			{loading && (
				<div className={classes.Modal}>
					<Spinner />
				</div>
			)}
			{sections}

			<p className={classes.Error}>{error}</p>

			<button
				className={classes.Submit}
				onClick={onSubmitHandler}
				disabled={!isSubmitEnabled()}>
				{button}
			</button>
		</form>
	);
};

export default Form;
