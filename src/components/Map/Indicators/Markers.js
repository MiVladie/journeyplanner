import React from 'react';

import { Marker } from 'react-google-maps';

import BUS_ICON from '../../../assets/icons/Map/bus-stop-icon.png';
import TUBE_ICON from '../../../assets/icons/Map/underground-icon.png';
import OVERGROUND_ICON from '../../../assets/icons/Map/overground-icon.png';
import NATIONALRAIL_ICON from '../../../assets/icons/Map/national-rail-icon.png';
import TFLRAIL_ICON from '../../../assets/icons/Map/tflrail-icon.png';

import START_ICON from '../../../assets/icons/Map/start-icon.png';
import END_ICON from '../../../assets/icons/Map/end-icon.png';

const Markers = ({ path }) => {
    const startPosition = path[0].path[0];
    const endPosition = path[path.length - 1].path[path[path.length - 1].path.length - 1];

    const markerSize = 40;

    return (
        <React.Fragment>
            <Marker
                icon = {{ url: START_ICON, scaledSize: new window.google.maps.Size(markerSize, markerSize) }}
                position = { startPosition } />

            { path.map((type, index) => {
                let icon;

                switch(type.mode) {
                    case 'bus': icon = BUS_ICON; break;
                    case 'tube': icon = TUBE_ICON; break;
                    case 'overground': icon = OVERGROUND_ICON; break;
                    case 'national-rail': icon = NATIONALRAIL_ICON; break;
                    case 'tflrail': icon = TFLRAIL_ICON; break;
                    default: return null;
                };

                return (
                    <React.Fragment key = { index } >
                        <Marker
                            icon = { icon && { url: icon, scaledSize: new window.google.maps.Size(markerSize, markerSize) } }
                            position = { type.path[0] } />

                        <Marker
                            icon = { icon && { url: icon, scaledSize: new window.google.maps.Size(markerSize, markerSize) } }
                            position = { type.path[type.path.length - 1] } />
                    </React.Fragment>
                );
            }) }

            <Marker
                icon = {{ url: END_ICON, scaledSize: new window.google.maps.Size(markerSize, markerSize) }}
                position = { endPosition } />
        </React.Fragment>
    );
};

export default Markers;
