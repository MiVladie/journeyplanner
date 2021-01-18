import React from 'react';

import Brand from '../../components/Brand/Brand';
import Map from '../../components/Map/Map';

import classes from './Resultative.module.scss';

const Resultative = ({ meta }) => (
	<div className={classes.Resultative}>
		{meta ? (
			<Map
				from={meta.from.coordinates}
				to={meta.to.coordinates}
			/>
		) : (
			<Brand
				topText='Journey Planner'
				bottomText='For London'
			/>
		)}
	</div>
);

export default React.memo(Resultative);
