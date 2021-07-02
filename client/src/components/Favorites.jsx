import React from 'react';
import FavoriteDrink from './FavoriteDrink.jsx';

var Favorites = (props) => {
  return (
    <div>
      <h3>Favorites</h3>
      <div className="favoritesList">
        {props.favorites.map( fave => {
          return <FavoriteDrink key={fave.idDrink} fave={fave} onClick={props.onClick}/>
        })}
      </div>
    </div>
  );
}

export default Favorites;