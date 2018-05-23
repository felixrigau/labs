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
  render() {
    return (
      <div className="App">
        <LocationList cities = { cities }/>
      </div>
    );
  }
}

export default App;
