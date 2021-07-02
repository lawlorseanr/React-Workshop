import React from 'react';

var ListItem = (props) => {
  return (
    <div id={props.drink.idDrink}>
      <h4>{props.drink.strDrink}</h4>
      <div className="imgDiv">
        <img src={props.drink.strDrinkThumb} onClick={drink => {props.onClick(props.drink)}}/>
      </div>
    </div>
  );
}

export default ListItem;