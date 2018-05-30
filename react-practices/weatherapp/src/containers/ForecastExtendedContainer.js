import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ForecastExtended from './../components/ForescastExtended'

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

const mapStateToProps = ({city, cities}) => {
    return {city, forecastData: cities[city] && cities[city].forecastData}
}


export default connect(mapStateToProps, null)(ForecastExtendedContainer)
