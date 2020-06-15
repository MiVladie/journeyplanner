import React from 'react';

import MapLoader from './Indicators/mapLoader';

import { googleMapsApiKey } from '../../assets/keys';

import classes from './Map.module.css';

const Map = ({ from, to }) => {
    let googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey;
    let element = <div style = {{ height: `100%`, width: '100%' }} />;

    return (
        <div className = { classes.Map }>
           <MapLoader 
                from = { from }
                to = { to }
                googleMapURL = { googleMapURL }
                loadingElement = { element } />
        </div>
    );
}
  
export default Map;
  