import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location'
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers';

const location = "Madrid, es";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;

const data1 = {
    temperature: 33,
    weatherState: SUN,
    humidity: 70,
    wind: 10
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'La Habana',
            data: data1
        };
    }

    getData = weatherData => {
        const { humidity, temp } = weatherData.main;
        const { speed } = weatherData.wind;
        const weatherState = this.getWeatherState(this.weather);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: speed
        };

        return data;
    }

    getTemp = kelvin => {
        return convert(kelvin).from('K').to('C').toFixed(1);
    }

    getWeatherState = weather => {
        return SUN;
    }

    handleUpdateClick = () => {
        fetch(api_weather)
        .then(data => {
            return data.json();
        })
        .then(weatherData => {
            const data = this.getData(weatherData);
            this.setState({ data });
        });
    }

    render = () => {
        const { city, data } = this.state;
        return (
            <div>
                <Location city={city}/>
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick} >Actualizar</button>
            </div>
        );
    };
}

export default WeatherLocation; 
