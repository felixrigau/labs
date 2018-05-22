import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Header from './Header'
import TextIntro from './TextIntro'

class App extends Component {
  
  state = {
    search: '',
    pokemonList: [],
    loading: true
  };
  
  componentDidMount = async () => {
    try {
      
      const pokemonList = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      this.setState({
        pokemonList: pokemonList.data.results,
        loading: false
      })
        
    } catch (error) {
      
      console.log('error', error)
      
    }
    
  }
  
  render() {
    return (
      <div className="App">
        <Header title='React Practices Pokemon'/> 
        
        <TextIntro/>
        
        <input type='text' 
               value={this.state.search}
               onChange={e => this.setState({ search: e.target.value})}
        />
        
        { this.state.loading ?
          <h2>Loading...</h2> :
          this.state.pokemonList
          .filter(({name}) => name.includes(this.state.search))
          .map( (e, i) => <li id={i}>{e.name}</li>)
        }
      </div>
    );
  }
}

export default App;
