import React from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';

 const renderForecastItemDays = (forecastData) => (
     forecastData.map( forecast => (<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>))
 )
 
 const renderProgress = () => {
     return (<h3>En prorgeso...</h3>)
 }

const ForescastExtended = ({city,forecastData}) => (
    <div>
        <h1>Pronóstico Semanal</h1>
        <h2>{`Pronostico para ${city}`}</h2>
        {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
    </div>
);

ForescastExtended.propTypes = {
    city: PropTypes.string,
    forecastData: PropTypes.array.isRequired,
}

export default ForescastExtended;