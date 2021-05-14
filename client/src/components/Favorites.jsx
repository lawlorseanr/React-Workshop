//TODO

// if favorites exist

// <div>
//   <h3>Favorites</h3>
//   <div class = "favoritesList">
//     <div>
//       <h4>Favorite drink 1 name</h4>
//       <div class = "imgDiv">
//         <img src = {favorite drink 1 src}/>
//       </div>
//     </div>
//     <div>
//       <h4>Favorite drink 2 name</h4>
//       <div class = "imgDiv">
//         <img src = {favorite drink 2 src}/>
//       </div>
//     </div>
//   </div>
// </div>

import React from 'react';

var Favorites = (props) => {
  if (props.favorites.length === 0) {
    return (
      <div>No Favorites</div>
    )
  } else {
    return (
      <div>
        <h3>Favorites</h3>
        <div className = 'favoritesList'>
          {props.favorites.map((drink, index) => (
            <div className = 'favorite' key = {index} onClick = {() => {
              props.removeFavorite(drink)
            }}>
              <h4>{drink.strDrink}</h4>
              <div className = "imgDiv">
                <img src = {drink.strDrinkThumb}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Favorites;