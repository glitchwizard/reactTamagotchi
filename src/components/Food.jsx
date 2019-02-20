import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  return(
    <div>
      <h1> Food :{props.newFood} </h1>
      <button onClick = {props.onMakeEat}>Eat !!</button>
    </div>
  )
}

Food.propTypes = {
  newFood: PropTypes.string.isrequired,
  onMakeEat: PropTypes.func
}

export default Food;
