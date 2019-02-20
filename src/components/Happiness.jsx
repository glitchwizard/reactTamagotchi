import React from 'react';
import PropTypes from 'prop-types';

function Happiness(props){
  return(
    <div>
      <h1> Happiness :{props.newHappiness} </h1>
    </div>
  )
}

Happiness.propTypes = {
  newHappiness: PropTypes.string.isrequired
}

export default Happiness;
