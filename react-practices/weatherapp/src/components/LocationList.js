import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

class LocationList extends Component {

    constructor(cities, onSelectedLocation) {
        super();
        
        this.state = {
            cities,
            onSelectedLocation
        }
    }

    handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        this.props.onSelectedLocation(city);
    }

    arrToComponents = cities => (
        cities.map( city => (
                                <WeatherLocation 
                                    key={ city } 
                                    city={ city }
                                    onWeatherLocationClick={() => this.handleWeatherLocationClick(city)}>
                                </WeatherLocation>))
    );
    
    render() {
        const {cities} = this.state.cities;
        return (
            <div>
                { this.arrToComponents( cities ) }
            </div>
        );
    }
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
}

export default LocationList;