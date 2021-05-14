//TODO

{/* <div class = "listItem" id = {id}>
  <h4>Drink Name</h4>
  <div class = "imgDiv">
    <img src = {img source}/>
  </div>
</div> */}

import React from 'react';

var ListItem = (props) => {
  return(
    <div className = "listItem" id = {props.item.idDrink} onClick = {() => {props.addToFavorites(props.item)}}>
      <h4>{props.item.strDrink}</h4>
      <div className = "imgDiv">
        <img src = {props.item.strDrinkThumb}/>
      </div>
    </div>
  )
}

export default ListItem;