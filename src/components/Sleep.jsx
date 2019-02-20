import React from 'react';
import PropTypes from 'prop-types';

function Sleep(props){
  return(
    <div>
      <h1> Sleep :{props.newSleep} </h1>
      
    </div>
  )
}

Sleep.propTypes = {
  newSleep: PropTypes.string.isrequired
}

export default Sleep;
