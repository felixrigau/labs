import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/blue';
import Location from './Location'
import WeatherData from './WeatherData';

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => {
    return (
        <div onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {data? <WeatherData data={data} /> : <CircularProgress style={{ color: purple[300] }}/>}
        </div>
    );
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired
    })
}

export default WeatherLocation; 
