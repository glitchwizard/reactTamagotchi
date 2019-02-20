import React from 'react';
import PropTypes from 'prop-types';

function Life(props){
  return(
    <div>
      <h1> Life :{props.newLife} </h1>
    </div>
  )
}

Life.propTypes = {
  newLife: PropTypes.string.isrequired
}

export default Life;
