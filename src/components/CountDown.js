import React from 'react';
import moment from 'moment'

let addZero = (time) => {
  if(time < 10) {
    return `0${time}`
  } else {
    return time
  }
}

const CountDown = (props) => {
  
  return (
    <h1>
      {
        `${addZero(props.timer.get('hours'))}:${addZero(props.timer.get('minutes'))}:${addZero(props.timer.get('seconds'))}`
      }
    </h1>
  );
}

export default CountDown
