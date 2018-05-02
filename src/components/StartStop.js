import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import * as timerStates from '../timerStates'

class StartStop extends Component {

  displayButton = () => {
    if(this.props.timerState === timerStates.NOT_SET) {
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
          >
            Pause ||
          </Button>

          <Button
            onClick={this.props.stopTimer}
            color='red'
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
