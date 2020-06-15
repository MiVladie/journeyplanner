import React from 'react';

import classes from './Header.module.css';

const Header = ({ data }) => {
    const getDate = (date) => {
        let chosenDate = new Date(date);

        let dayOfWeek = chosenDate.toLocaleString('default', { weekday: 'long' });
        let month = chosenDate.toLocaleString('default', { month: 'short' });
        let time = chosenDate.toLocaleString('default', { timeStyle: 'short' });
        
        let day = chosenDate.getDate() + '';
        
        switch (day.charAt(day.length - 1)) {
            case 1: day += 'st'; break;
            case 2: day += 'nd'; break;
            case 3: day += 'rd'; break;
            default: day += 'th'; break;
        }

        return [dayOfWeek, day, month, time].join(' ');
    };

    const content = data ? <ul>
            <li><p>From: <span>{ data.from.name }</span></p></li>
            <li><p>To: <span>{ data.to.name }</span></p></li>
            <li><p>{ data.timeIs }: <span>{ getDate(data.date) }</span></p></li>
        </ul> : null;

    return (
        <div className = { classes.Header }>
            <div className = { classes.Wrapper }>
                { content || <h1>Plan your journey</h1> }
            </div>
        </div>
    );
};

export default Header;
