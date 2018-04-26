/*global angular*/

angular.module('app')
  .controller('PokemonController', [pokemonController]);

function pokemonController() {
  
  const self = this;
  
  self.lista = [
      {
        name: 'pikachu'
      }, 
      {
        name: 'nulbasur'
      }, 
      {
        name: 'Gastly'
      }
    ];
}
  