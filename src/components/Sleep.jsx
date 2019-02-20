import React from 'react';
import PropTypes from 'prop-types';

function Sleep(props){
  return(
    <div>
      <h1> Sleep :{props.newSleep} </h1>
      <button onClick = {props.onMakeSleep}>Sleep !!</button>
    </div>
  )
}

Sleep.propTypes = {
  newSleep: PropTypes.string.isrequired,
  onMakeSleep: PropTypes.func
}

export default Sleep;
