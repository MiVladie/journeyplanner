import React from 'react';

import classes from './Radio.module.scss';

const radio = ({ value, onChange, options }) => {
	const parameters = options.map((option) => (
		<li
			className={[
				classes.Option,
				value === option.value ? classes.Active : '',
			].join(' ')}
			onClick={() => onChange(option.value)}
			key={option.value}>
			{option.name}
		</li>
	));

	return <ul className={classes.Radio}>{parameters}</ul>;
};

export default radio;
