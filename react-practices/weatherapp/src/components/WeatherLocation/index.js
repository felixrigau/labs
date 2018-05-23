import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import { SUN, CLOUDY } from './../../constants/weathers';

const data1 = {
    temperature: 33,
    weatherState: SUN,
    humidity: 70,
    wind: 10
};

const data2 = {
    temperature: 20,
    weatherState: CLOUDY,
    humidity: 40,
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

    handleUpdateClick = () => {
        this.setState({
            city: 'Madrid',
            data: data2
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
