import React from 'react';
import List from './List.jsx';
import Favorites from './Favorites.jsx';
import data from '../../../public/data/dummy.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.drinks = data['drinks'];
    this.state.favorites = [];
  }

  handleFavoriteItemClick(drink) {
    var favorites = this.state.favorites;
    var setState = false;
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].idDrink === drink.idDrink) {
        favorites.splice(i, 1);
        setState = true;
        break;
      }
    }
    if (setState) {
      this.setState({
        favorites: favorites
      })
    }

  }

  handleListItemClick(drink) {
    var favorites = this.state.favorites;
    var setState = true;
    if (favorites.length > 0) {
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].idDrink === drink.idDrink) {
          setState = false;
          break;
        }
      }
    }

    if (setState) {
      favorites.push(drink);
      this.setState({
        favorites: favorites
      })
    }

  }

  render() {
      return (
        <div>
          <div className={this.state.favorites.length > 0 ? 'showFavorites' : 'noFavorites'}>
            <Favorites
              favorites={this.state.favorites}
              onClick={drink => {this.handleFavoriteItemClick(drink)}}
            />
          </div>
          <div>
            <List
              drinks={this.state.drinks}
              onClick={drink => {this.handleListItemClick(drink)}}
            />
          </div>
        </div>
      );
  }
}

export default App;