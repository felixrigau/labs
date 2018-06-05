import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

class LocationList extends Component {

    handleWeatherLocationClick = city => {
        this.props.onSelectedLocation(city);
    }

    arrToComponents = cities => (
        cities.map( city => (
                                <WeatherLocation 
                                    key={ city.key } 
                                    city={ city.name }
                                    onWeatherLocationClick={() => this.handleWeatherLocationClick(city.name)}
                                    data = {city.data}>
                                </WeatherLocation>))
    );
    
    render() {
        const cities = this.props.cities;
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