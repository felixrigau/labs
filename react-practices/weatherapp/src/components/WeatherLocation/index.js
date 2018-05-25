import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/blue';
import Location from './Location'
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import getAPIEndPoint from './../../api/config';

class WeatherLocation extends Component {

    constructor({city}) {
        super();
        this.state = {
            city,
            data: null
        };
    }

    componentWillMount() {
        const {city} = this.state;
        const api_weather = getAPIEndPoint('weather' ,city);
        fetch(api_weather)
        .then(data => {
            return data.json();
        })
        .then(weatherData => {
            const data = transformWeather(weatherData);
            this.setState({ data });
        });
    }

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data? <WeatherData data={data} /> : <CircularProgress style={{ color: purple[300] }}/>}
            </div>
        );
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation; 
