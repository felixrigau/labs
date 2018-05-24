import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForescastExtended extends Component {
    render() {
        const {city} = this.props;
        return (
            <div>
                <h1>Pronóstico Semanal</h1>
                <h2>{city ? `Pronostico para ${city}` : ' No se ha seleccionado una ciudad' }</h2>
            </div>
        );
    }
}

ForescastExtended.propTypes = {
    city: PropTypes.string,
}

export default ForescastExtended;