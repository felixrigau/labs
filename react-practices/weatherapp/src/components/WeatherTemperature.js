import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case "cloud":
            return "cloud"
        case "cloudy":
            return "cloudy"
        case "sub":
            return "day-sunny"
        case "rain":
            return "rain"
        case "snow":
            return "snow"
        case "windy":
            return "windy"
        default:
            return "day-sunny"
    }
}

const getWeatherIcon = weatherState => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x" />);
}

const WeatherTemperature = ({temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}

export default WeatherTemperature;