import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LocationList from '../components/LocationList'
import { setCity } from '../actions/index'

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList cities = { this.props.cities }
                        onSelectedLocation={this.handleSelectionLocation}/>
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => ({
setCity: value => dispatch(setCity(value))
});

const mapStateToProps = (state, ownProps) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
