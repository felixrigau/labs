import React, { component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import { SNOW } from './../../constants/weathers';

const data = {
    temperature: 20,
    weatherState: SNOW,
    humidity: 40,
    wind: 10
};

const WeatherLocation = () => (
    <div>
        <Location city={'Buenos Aires!'}/>
        <WeatherData data={ data } />
    </div>
);

export default WeatherLocation; 
