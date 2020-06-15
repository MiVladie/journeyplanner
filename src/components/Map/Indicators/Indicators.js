import React from 'react';

import Routes from './Routes';
import Markers from './Markers';

import { useStore } from '../../../hooks-store/store';

const Indicators = () => {
    const store = useStore()[0];

    const activeJourneyPath = store.activeJourneyPath;

    return (
        <React.Fragment>
            <Markers path = { activeJourneyPath } />
            <Routes path = { activeJourneyPath } />
        </React.Fragment>
    );
};

export default Indicators;
