import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ForecastExtended from './../components/ForescastExtended'
import {getForecastDataFromCities, getCity} from './../reducers';

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return (
            !city ?
            <h3>Seleccione una ciudad...</h3> :
            <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
        )
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

const mapStateToProps = state => {
    return {city: getCity(state), forecastData: getForecastDataFromCities(state)}
}


export default connect(mapStateToProps, null)(ForecastExtendedContainer)
