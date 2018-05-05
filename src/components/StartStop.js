import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import * as timerStates from '../timerStates'

class StartStop extends Component {

  displayButton = () => {
    if(this.props.timerState === timerStates.NOT_SET || this.props.timerState === timerStates.COMPLETE) {
      return (
        <Button
          onClick={this.props.startTimer} color='green'
        >
          Start >>
        </Button>
      );
    } else if(this.props.timerState === timerStates.RUNNING) {
      return (
        <div>
          <Button
            color='orange'
            onClick={this.props.pauseTimer}
          >
            Pause ||
          </Button>
        </div>
      );
    } else if(this.props.timerState === timerStates.PAUSED) {
      return (
        <div>
          <Button
            onClick={this.props.startTimer} color='green'
          >
            RESUME
          </Button>

          <Button
            color='red'
            onClick={this.props.stopTimer}
          >
            Reset
          </Button>
        </div>
      );
    }
  }

  render() {
    return (
    <div>
      {this.displayButton()}
    </div>
        );
  }
}
export default StartStop
