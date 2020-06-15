import React from 'react';

import { Polyline } from 'react-google-maps';

const Routes = ({ path }) => {
    return path.map((type, index) => {
        let options = {
            strokeWeight: '4',
            strokeOpacity: '1'
        };
            
        switch(type.mode) {
            case 'walking':
                options.strokeOpacity = 0;
                options.strokeColor = '#000A66';
                options.icons = [{
                    icon: {
                        path: 'M 0,0 0,0',
                        strokeOpacity: 0.95,
                        strokeWeight: 6,
                        scale: 4
                    },
                    offset: '0',
                    repeat: '10px'
                }];
                break;

            case 'cycle':
                options.strokeColor = '#444444';
                break;

            case 'bus':
                options.strokeColor = '#FF3C3C';
                break;

            case 'tube':
                options.strokeColor = '#3C6AFF';
                break;

            case 'overground':
                options.strokeColor = '#EE7D11';
                break;

            case 'national-rail':
                options.strokeColor = '#9700B2';
                break;

            case 'tflrail':
                options.strokeColor = '#8E8E8E';
                break;

            case 'straight':
                options.strokeColor = '#444444';
                break;

            default:
                return null;
        };

        return (
            <Polyline
                path = { type.path }
                defaultOptions = { options }
                key = { type.path.toString() + type.mode + index } />
        );
    });
};

export default Routes;
