import React from 'react';
import PropTypes from 'prop-types';

function Happiness(props){
  return(
    <div>
      <h1> Happiness :{props.newHappiness} </h1>
      <button onClick = {props.onMakeHappiness}>Add Happiness !!</button>
    </div>
  )
}

Happiness.propTypes = {
  newHappiness: PropTypes.string.isrequired,
  onMakeHappiness: PropTypes.func
}

export default Happiness;
