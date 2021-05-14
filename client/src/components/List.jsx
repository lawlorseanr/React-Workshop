//TODO

{/* <div class = "list">
  <div>List Item</div>
</div> */}

import React from 'react';
import ListItem from './ListItem.jsx';

var List = (props) => {
  return(
    <div className = 'list'>
      {props.drinks.map((drink, index) => (
        <ListItem item = {drink} key = {index} addToFavorites = {props.addToFavorites}/>
      ))}
    </div>
  )
}

export default List;