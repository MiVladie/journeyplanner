import React from 'react';

import classes from './Brand.module.css';

const brand = ({ topText, bottomText }) => (
    <div className = { classes.Brand }>
        <h1>{ topText }</h1>
        <h2>{ bottomText }</h2>
    </div>
);

export default brand;
