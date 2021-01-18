import React from 'react';

import classes from './Brand.module.scss';

const brand = ({ topText, bottomText }) => (
	<div className={classes.Brand}>
		<h1>{topText}</h1>
		<h2>{bottomText}</h2>
	</div>
);

export default brand;
