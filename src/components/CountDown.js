import React from 'react';

const CountDown = (props) => {
  return (
    <h1>
      {
        `${props.addZero(props.timer.get('hours'))}:${props.addZero(props.timer.get('minutes'))}:${props.addZero(props.timer.get('seconds'))}`
      }
    </h1>
  );
}

export default CountDown
