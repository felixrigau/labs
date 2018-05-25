import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';
import getAPIEndPoint from './../api/config';
import transformForecast from './../services/transformForecast';

class ForescastExtended extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forecastData: null
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }

    componentDidMount() {
        const {city} = this.props;
        this.updateCity(city)
    }

    updateCity = city => {
        const api_forecast = getAPIEndPoint('forecast', city);
        fetch(api_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        ).catch((err) => {
            
        });
    }
    
    renderForecastItemDays = forecastData => (
        forecastData.map( forecast => (<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>))
    )
    
    renderProgress = () => {
        return (<h3>En prorgeso...</h3>)
    }
    
    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h1>Pronóstico Semanal</h1>
                <h2>{`Pronostico para ${city}`}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForescastExtended.propTypes = {
    city: PropTypes.string,
}

export default ForescastExtended;