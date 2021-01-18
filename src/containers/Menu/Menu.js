import React from 'react';

import Header from '../../components/Header/Header';
import Main from '../Main/Main';

import classes from './Menu.module.scss';

const Menu = ({ meta, journeys }) => (
	<div className={classes.Menu}>
		<Header data={meta} />

		<Main data={journeys} />
	</div>
);

export default Menu;
