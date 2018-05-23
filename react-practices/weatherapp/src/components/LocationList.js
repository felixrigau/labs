import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

class LocationList extends Component {

    constructor(cities) {
        super();
        
        this.state = {
            cities
        }
    }

    arrToComponents = cities => (
        cities.map( city => (<WeatherLocation city={ city }></WeatherLocation>))
    );
    
    render() {
        const {cities} = this.state.cities;
        debugger;
        return (
            <div>
                { this.arrToComponents( cities ) }
            </div>
        );
    }
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default LocationList;