import React from 'react';

import MapLoader from './Indicators/mapLoader';

import { GOOGLE_MAPS_API_KEY } from '../../config/constants';

import classes from './Map.module.scss';

const Map = ({ from, to }) => {
	let googleMapURL =
		'https://maps.googleapis.com/maps/api/js?key=' +
		GOOGLE_MAPS_API_KEY;
	let element = <div style={{ height: `100%`, width: '100%' }} />;

	return (
		<div className={classes.Map}>
			<MapLoader
				from={from}
				to={to}
				googleMapURL={googleMapURL}
				loadingElement={element}
			/>
		</div>
	);
};

export default Map;
