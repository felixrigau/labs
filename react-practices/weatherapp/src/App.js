import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = [
  'La Habana',
  'Lyon',
  'Madrid',
  'Paris',
  'Málaga',
  'Moscu'
];

class App extends Component {
  
  render() {
    return (
      <div className="App application-content">
        <div className="location-list-wrapper">
          <LocationListContainer cities = { cities }/>
        </div>
        <div className="details-wrapper">
          <ForecastExtendedContainer></ForecastExtendedContainer>
        </div>
      </div>
    );
  }
}

export default App;
