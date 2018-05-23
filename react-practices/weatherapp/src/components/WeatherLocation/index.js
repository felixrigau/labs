import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/blue';
import Location from './Location'
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";

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
        const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}`;
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
        const { city, data } = this.state;
        return (
            <div>
                <Location city={city}/>
                {data? <WeatherData data={data} /> : <CircularProgress style={{ color: purple[300] }}/>}
            </div>
        );
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation; 
