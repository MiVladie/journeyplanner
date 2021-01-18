import React, { useState, useEffect, useRef } from 'react';

import classes from './Dropdown.module.scss';

const Dropdown = ({ value, onChange, options }) => {
	const [expand, setExpand] = useState(false);

	const node = useRef();

	const registerOnClickListener = () => {
		document.addEventListener('mousedown', (event) => {
			if (
				node.current &&
				!node.current.contains(event.target)
			)
				setExpand(false);
		});

		return () => {
			document.removeEventListener('mousedown', (event) => {
				if (!node.current.contains(event.target))
					setExpand(false);
			});
		};
	};

	useEffect(() => {
		registerOnClickListener();
	}, []);

	const selected = options.find((option) => option.value === value);

	const parameters = (
		<ul className={classes.List}>
			{options.map((option) => (
				<li
					className={classes.Item}
					onClick={() => onChange(option.value)}
					key={option.value}>
					<p className={classes.Description}>
						{option.name}
					</p>
				</li>
			))}
		</ul>
	);

	return (
		<div
			className={classes.Dropdown}
			style={expand ? { borderRadius: '0 0 2px 2px' } : null}
			onClick={() => setExpand(!expand)}
			ref={node}>
			<p className={classes.Value}>{selected.name}</p>
			<div className={classes.Expand}>
				<div
					className={[
						classes.Icon,
						expand ? classes.Active : '',
					].join(' ')}
				/>
			</div>

			{expand && parameters}
		</div>
	);
};

export default Dropdown;
