import React from 'react';

import background from '../../assets/images/background.jpg';
import video from '../../assets/videos/video.mp4';

import './reset.css';
import classes from './Layout.module.css';

const layout = ({ children }) => (
    <div className = { classes.Layout }>
        <div className = { classes.Video }>
            <video poster = { background } loop muted autoPlay>
                <source src = { video } type = 'video/mp4-REMOVE' />
            </video>
        </div>

        <div className = { classes.Wrapper }>
            { children }
        </div>
    </div>
);

export default layout;
