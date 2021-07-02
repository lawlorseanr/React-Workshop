import React from 'react';
import ListItem from './ListItem.jsx';

var List = (props) => {
  return (
    <div>
      {props.drinks.map(drink =>
        <ListItem
          key={drink.idDrink}
          drink={drink}
          onClick={props.onClick}
        />)}
    </div>
  );
}

export default List;