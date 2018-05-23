import React, { Component } from 'react';
import LocationList from './components/LocationList';
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
      <div className="App">
        <LocationList cities = { cities }
                      onSelectedLocation={this.handleSelectionLocation}/>
      </div>
    );
  }
}

export default App;
