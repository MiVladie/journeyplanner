import React from 'react';

import Indicators from './Indicators';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const MapLoader = ({ from, to }) => {    
    const bounds = new window.google.maps.LatLngBounds();

    bounds.extend(from);
    bounds.extend(to);

    const CustomMap = withGoogleMap(props => (
        <GoogleMap ref = { (map) => { if(map) { map.fitBounds(bounds); map.panToBounds(bounds) } } }>
            <Indicators />
        </GoogleMap>
    ));

    let element = <div style = {{ height: '100%', width: '100%' }} />;

    return <CustomMap
                containerElement = { element }
                mapElement = { element } />
}

export default withScriptjs(MapLoader);
