import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  return(
    <div>
      <h1> Food :{props.newFood} </h1>
    </div>
  )
}

Food.propTypes = {
  newFood: PropTypes.string.isrequired
}

export default Food;
