import React, { useState } from 'react';

import wait from '../../assets/icons/wait-icon.png';
import walking from '../../assets/icons/walking-icon.png';
import cycle from '../../assets/icons/cycling-icon.png';
import bus from '../../assets/icons/bus-icon.png';
import tube from '../../assets/icons/tube-icon.png';
import national_rail from '../../assets/icons/national-railway-icon.png';
import tflrail from '../../assets/icons/tflrail-icon.png';

import { useStore } from '../../hooks-store/store';

import classes from './Journeys.module.scss';

const Journeys = ({ data, onReplan }) => {
	const [selectedJourney, setSelectedJourney] = useState();
	const [selectedStations, setSelectedStations] = useState([]);

	const [store, dispatch] = useStore();

	const selectJourneyHandler = (index) => {
		if (selectedJourney !== index) {
			setSelectedJourney(index);

			let path = data[index].legs.map((leg) => {
				return {
					mode: leg.mode.id,
					path: leg.path.lineString
						? JSON.parse(
								leg.path
									.lineString
						  ).map((coordinate) => {
								return {
									lat:
										coordinate[0],
									lng:
										coordinate[1],
								};
						  })
						: [
								{
									lat:
										leg
											.departurePoint
											.lat,
									lng:
										leg
											.departurePoint
											.lon,
								},
								{
									lat:
										leg
											.arrivalPoint
											.lat,
									lng:
										leg
											.arrivalPoint
											.lon,
								},
						  ],
				};
			});

			dispatch('SET_JOURNEY_PATH', path);
		} else {
			setSelectedJourney(null);
			dispatch('SET_JOURNEY_PATH', [
				{
					mode: 'straight',
					path: [
						store.meta.from.coordinates,
						store.meta.to.coordinates,
					],
				},
			]);
		}

		setSelectedStations([]);
	};

	const selectStationHandler = (index) => {
		if (selectedStations.includes(index))
			return setSelectedStations(
				selectedStations.filter((s) => s !== index)
			);

		return setSelectedStations([...selectedStations, index]);
	};

	let routes = data.map((journey, journeyId) => (
		<div
			className={[
				classes.Journey,
				selectedJourney === journeyId
					? classes.Selected
					: selectedJourney && classes.Hidden,
			].join(' ')}
			key={journeyId}>
			<div
				className={classes.Heading}
				onClick={() => selectJourneyHandler(journeyId)}>
				<div className={classes.Wrapper}>
					<ul className={classes.Main}>
						{journey.legs.map(
							(type, typeId) => {
								const MAX_ALLOWED =
									window
										.screen
										.width >=
									720
										? 5
										: 4;

								if (
									(type
										.mode
										.id ===
										'walking' &&
										(type.duration <
											12 ||
											(typeId ===
												0 &&
												journey.legs <
													4))) ||
									typeId >
										MAX_ALLOWED
								)
									return null;

								if (
									typeId ===
									MAX_ALLOWED
								) {
									return (
										<React.Fragment
											key={
												typeId
											}>
											<div
												className={
													classes.Break
												}
											/>
											<li
												className={
													classes.Type
												}>
												<p
													className={
														classes.Meta
													}>
													+
													{journey
														.legs
														.length -
														MAX_ALLOWED}
												</p>
											</li>
										</React.Fragment>
									);
								}

								let icon;

								switch (
									type
										.mode
										.id
								) {
									case 'walking':
										icon = walking;
										break;
									case 'cycle':
										icon = cycle;
										break;
									case 'bus':
										icon = bus;
										break;
									case 'tube':
										icon = tube;
										break;
									case 'overground':
										icon = tube;
										break;
									case 'national-rail':
										icon = national_rail;
										break;
									case 'tflrail':
										icon = tflrail;
										break;
									default:
										icon = tflrail;
										break;
								}

								return (
									<React.Fragment
										key={
											typeId
										}>
										<li
											className={
												classes.Type
											}>
											<img
												className={
													classes.Icon
												}
												src={
													icon
												}
												alt={
													type
														.mode
														.id
												}
											/>
											{type
												.mode
												.id ===
												'bus' && (
												<p
													className={
														classes.Meta
													}>
													{
														type.instruction.summary.split(
															' '
														)[0]
													}
												</p>
											)}
										</li>
										<div
											className={
												classes.Break
											}
										/>
									</React.Fragment>
								);
							}
						)}
					</ul>

					<ul className={classes.Metadata}>
						{journey.fare && (
							<li
								className={
									classes.Item
								}>
								<p
									className={
										classes.Value
									}>
									£
									{(
										journey
											.fare
											.totalCost /
										100
									).toFixed(
										2
									)}
								</p>
							</li>
						)}
						{journey.duration && (
							<li
								className={
									classes.Item
								}>
								<p
									className={
										classes.Value
									}>
									{
										journey.duration
									}
								</p>
								<p
									className={
										classes.Meta
									}>
									MIN
								</p>
							</li>
						)}
					</ul>
				</div>
			</div>

			<div className={classes.Instructions}>
				<ul className={classes.Wrapper}>
					<li className={classes.Instruction}>
						<div
							className={
								classes.Content
							}>
							<div
								className={
									classes.Main
								}>
								<img
									className={
										classes.Icon
									}
									src={
										wait
									}
									alt={
										'wait'
									}
								/>
								<p
									className={
										classes.Text
									}>
									Depart
									at{' '}
									{(
										'0' +
										new Date(
											journey.startDateTime
										).getHours()
									).slice(
										-2
									) +
										':' +
										(
											'0' +
											new Date(
												journey.startDateTime
											).getMinutes()
										).slice(
											-2
										)}
								</p>
							</div>
						</div>
					</li>

					{journey.legs.map((leg, legId) => {
						let instructions = [];

						switch (leg.mode.id) {
							case 'walking':
								instructions.push(
									{
										icon: walking,
										text:
											'Walk to ' +
											leg
												.arrivalPoint
												.commonName,
										widget:
											leg
												.arrivalPoint
												.stopLetter,
										duration:
											leg.duration,
									}
								);
								break;

							case 'cycle':
								instructions.push(
									{
										icon: cycle,
										text:
											'Cycle to ' +
											leg
												.arrivalPoint
												.commonName,
										duration:
											leg.duration,
									}
								);
								break;

							case 'bus':
								instructions.push(
									{
										icon: wait,
										text:
											'Wait for ',
										widget: leg.instruction.summary.split(
											' '
										)[0],
									}
								);
								instructions.push(
									{
										icon: bus,
										text:
											'Ride ' +
											(leg
												.path
												.stopPoints
												.length <=
											1
												? '1'
												: leg
														.path
														.stopPoints
														.length) +
											' stop' +
											(leg
												.path
												.stopPoints
												.length !==
											1
												? 's'
												: ''),
										stops:
											leg
												.path
												.stopPoints,
										duration:
											leg.duration,
									}
								);
								break;

							case 'tube':
								instructions.push(
									{
										icon: tube,
										text:
											leg
												.instruction
												.summary,
									}
								);
								instructions.push(
									{
										icon: tube,
										text:
											'Ride ' +
											leg
												.path
												.stopPoints
												.length +
											' stop' +
											(leg
												.path
												.stopPoints
												.length !==
											1
												? 's'
												: ''),
										stops:
											leg
												.path
												.stopPoints,
										duration:
											leg.duration,
									}
								);
								break;

							case 'overground':
								instructions.push(
									{
										icon: tube,
										text:
											leg
												.instruction
												.summary,
									}
								);
								instructions.push(
									{
										icon: tube,
										text:
											'Ride ' +
											leg
												.path
												.stopPoints
												.length +
											' stop' +
											(leg
												.path
												.stopPoints
												.length !==
											1
												? 's'
												: ''),
										stops:
											leg
												.path
												.stopPoints,
										duration:
											leg.duration,
									}
								);
								break;

							case 'national-rail':
								instructions.push(
									{
										icon: national_rail,
										text:
											leg
												.instruction
												.summary,
									}
								);
								instructions.push(
									{
										icon: national_rail,
										text:
											'Ride ' +
											leg
												.path
												.stopPoints
												.length +
											' stop' +
											(leg
												.path
												.stopPoints
												.length !==
											1
												? 's'
												: ''),
										stops:
											leg
												.path
												.stopPoints,
										duration:
											leg.duration,
									}
								);
								break;

							case 'tflrail':
								instructions.push(
									{
										icon: tflrail,
										text:
											leg
												.instruction
												.summary,
									}
								);
								instructions.push(
									{
										icon: tflrail,
										text:
											'Ride ' +
											leg
												.path
												.stopPoints
												.length +
											' stop' +
											(leg
												.path
												.stopPoints
												.length !==
											1
												? 's'
												: ''),
										stops:
											leg
												.path
												.stopPoints,
										duration:
											leg.duration,
									}
								);
								break;

							default:
								break;
						}

						return instructions.map(
							(
								instruction,
								instructionId
							) => (
								<li
									className={
										classes.Instruction
									}
									key={
										instructionId
									}>
									<div
										className={
											classes.Content
										}>
										<div
											className={
												classes.Main
											}
											key={
												instruction.text
											}>
											<img
												className={
													classes.Icon
												}
												src={
													instruction.icon
												}
												alt={
													leg
														.mode
														.name
												}
											/>
											<p
												className={
													classes.Text
												}>
												{
													instruction.text
												}
											</p>
											{instruction.widget && (
												<i
													className={
														classes.Widget
													}>
													{instruction.widget.includes(
														'->'
													)
														? ''
														: instruction.widget}
												</i>
											)}
										</div>

										{instruction.duration && (
											<div
												className={
													classes.Metadata
												}>
												<p
													className={
														classes.Value
													}>
													{
														instruction.duration
													}
												</p>
												<p
													className={
														classes.Meta
													}>
													MIN
												</p>
											</div>
										)}
									</div>

									{instruction.stops && (
										<div
											className={
												classes.Extra
											}>
											<div
												className={
													classes.Location
												}>
												<i
													className={
														classes.Widget
													}>
													{leg
														.departurePoint
														.stopLetter
														? leg.departurePoint.stopLetter.includes(
																'->'
														  )
															? ''
															: leg
																	.departurePoint
																	.stopLetter
														: 'M'}
												</i>
												<p
													className={
														classes.Text
													}>
													{
														leg
															.departurePoint
															.commonName
													}
												</p>
											</div>

											<div
												className={
													classes.Stops
												}>
												<div
													className={
														classes.Expand
													}
													onClick={() =>
														selectStationHandler(
															legId
														)
													}>
													{instruction
														.stops
														.length -
														1 >
														0 && (
														<i
															className={[
																classes.Icon,
																selectedStations.includes(
																	legId
																) &&
																	classes.Active,
															].join(
																' '
															)}
														/>
													)}
													{instruction
														.stops
														.length -
														1 >
														0 && (
														<p
															className={
																classes.Text
															}>
															{instruction
																.stops
																.length -
																1}{' '}
															stop
															{instruction
																.stops
																.length -
																1 !==
																1 &&
																's'}
														</p>
													)}
												</div>

												{selectedStations.includes(
													legId
												) && (
													<ul
														className={
															classes.Stations
														}>
														{instruction.stops.map(
															(
																station,
																stationId
															) =>
																instruction
																	.stops
																	.length -
																	1 !==
																	stationId && (
																	<li
																		className={
																			classes.Station
																		}
																		key={
																			stationId
																		}>
																		<i
																			className={
																				classes.Point
																			}
																		/>
																		<p
																			className={
																				classes.Text
																			}>
																			{
																				station.name
																			}
																		</p>
																	</li>
																)
														)}
													</ul>
												)}
											</div>

											<div
												className={
													classes.Location
												}>
												<i
													className={
														classes.Widget
													}>
													{leg
														.arrivalPoint
														.stopLetter
														? leg.arrivalPoint.stopLetter.includes(
																'->'
														  )
															? ''
															: leg
																	.arrivalPoint
																	.stopLetter
														: 'M'}
												</i>
												<p
													className={
														classes.Text
													}>
													{
														leg
															.arrivalPoint
															.commonName
													}
												</p>
											</div>
										</div>
									)}
								</li>
							)
						);
					})}

					<li className={classes.Instruction}>
						<div
							className={
								classes.Content
							}>
							<div
								className={
									classes.Main
								}>
								<img
									className={
										classes.Icon
									}
									src={
										wait
									}
									alt={
										'wait'
									}
								/>
								<p
									className={
										classes.Text
									}>
									Arrive
									at{' '}
									{(
										'0' +
										new Date(
											journey.arrivalDateTime
										).getHours()
									).slice(
										-2
									) +
										':' +
										(
											'0' +
											new Date(
												journey.arrivalDateTime
											).getMinutes()
										).slice(
											-2
										)}
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	));

	return (
		<div className={classes.Journeys}>
			<div className={classes.Routes}>{routes}</div>

			<button className={classes.Replan} onClick={onReplan}>
				Go elsewhere!
			</button>
		</div>
	);
};

export default Journeys;
