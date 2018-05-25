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

  constructor(props) {
    super(props);
    
    this.state = {
      city: null
    }
  }
  
  
  handleSelectionLocation = city => {
    this.setState({city});
  }
  
  render() {
    const {city} = this.state;
    return (
      <div className="App application-content">
        <div className="location-list-wrapper">
          <LocationList cities = { cities }
                        onSelectedLocation={this.handleSelectionLocation}/>
        </div>
        <div className="details-wrapper">
          { city ? <ForescastExtended city={this.state.city}></ForescastExtended> : <h3>No se ha seleccionado una ciudad</h3>}
        </div>
      </div>
    );
  }
}

export default App;
