import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForescastExtended from './components/ForescastExtended';
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
  
  handleSelectionLocation = city => {
    console.log("handleSelectionLocation", city);
  }
  
  render() {
    return (
      <div className="App application-content">
        <div className="location-list-wrapper">
          <LocationList cities = { cities }
                        onSelectedLocation={this.handleSelectionLocation}/>
        </div>
        <div className="details-wrapper">
          <ForescastExtended></ForescastExtended>
        </div>
      </div>
    );
  }
}

export default App;
