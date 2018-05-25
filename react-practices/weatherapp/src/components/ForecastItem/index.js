import React, { Component } from 'react';
import WeatherData from './../WeatherLocation/WeatherData';
import PropTypes from 'prop-types';

class ForecastItem extends Component {
    render() {

        const {weekDay, hour, data} = this.props;

        return (
            <div className="forecast-extended">
                <h3>{`${weekDay} - ${hour}h`}</h3>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;