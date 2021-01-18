import React from 'react';

import classes from './Time.module.scss';

const Time = ({ value, onChange }) => (
	<div className={classes.Time}>
		<input
			type='time'
			className={classes.Selector}
			value={value}
			onChange={(event) => onChange(event.target.value)}
		/>
	</div>
);

export default Time;
