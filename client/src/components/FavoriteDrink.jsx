import React from 'react';

var FavoriteDrink = (props) => {
  return (
    <div>
    <h4>{props.fave.strDrink}</h4>
    <div className="imgDiv">
      <img src={props.fave.strDrinkThumb} onClick={drink => {props.onClick(props.fave)}}/>
    </div>
  </div>
  );
}

export default FavoriteDrink;