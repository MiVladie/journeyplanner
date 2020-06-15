import React from 'react';

import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

import classes from './Location.module.css';

const location = ({ placeholder, value, onChange, detectCurrentLocation }) => {
    const handleSelect = async (name) => {
        const results = await geocodeByAddress(name);

        const coordinates =
            results[0]
                .geometry
                .location
                .lat()
                .toString() 
            + ',' +
            results[0]
                .geometry
                .location
                .lng()
                .toString();
        
        onChange(name, coordinates);
    }

    const getCurrentLocationHandler = (event) => {
        event.preventDefault();

        if(value.name === 'Current Location' && value.coordinates != null) {
            return onChange(null, null);
        }

        navigator.geolocation.getCurrentPosition(position => {   
            const coordinates =
                position
                    .coords
                    .latitude
                    .toString()
                + ',' +                 
                position
                    .coords
                    .longitude
                    .toString();
    
            onChange('Current Location', coordinates);
        });
    }

    return (
        <PlacesAutocomplete 
            value = { value.name || '' } 
            onChange = { (val) => onChange(val, null) }
            onSelect = { handleSelect }
            searchOptions = {{ componentRestrictions: { country: 'uk' } }}>
            { ({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
                <div className = { classes.Field } style = { suggestions.length !== 0 || loading ? { borderRadius: '2px 2px 0 0' } : null }>
                    <input className = { classes.Input } { ...getInputProps({ placeholder: placeholder }) } style = { value.name === 'Current Location' && value.coordinates != null ? { cursor: 'pointer' } : null } onFocus = { () => value.name === 'Current Location' && value.coordinates != null && onChange(null, null) } />
                    { detectCurrentLocation && 
                        <button className = { classes.Detect } onClick = { getCurrentLocationHandler } tabIndex = '-1'>
                            <div className = { [classes.Icon, value.name === 'Current Location' && value.coordinates != null ? classes.Active : ''].join(' ') } />
                        </button> }
                    <div className = { classes.Suggestions }>
                        { loading ? 
                            <div className = { classes.Item }>
                                <p className = { classes.Description }>Loading..</p>
                            </div> : 
                            suggestions.map(suggestion => 
                                <div { ...getSuggestionItemProps(suggestion, { className: [classes.Item, suggestion.active ? classes.Active : ''].join(' ')}) }>
                                    <p className = { classes.Description }>{ suggestion.description }</p>
                                </div>) }
                    </div>
                </div>
            }
        </PlacesAutocomplete>
    );
}

export default location;
