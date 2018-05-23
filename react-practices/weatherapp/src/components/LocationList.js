import React, { Component } from 'react';
import WeatherLocation from './WeatherLocation';

class LocationList extends Component {
    render() {
        return (
            <div>
                <WeatherLocation city={'La Habana'}></WeatherLocation>
                <WeatherLocation city={'Lyon'}></WeatherLocation>
                <WeatherLocation city={'Madrid'}></WeatherLocation>
            </div>
        );
    }
}

export default LocationList;