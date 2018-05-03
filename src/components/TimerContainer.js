import React, { Component } from 'react';
import moment from 'moment'
import { Container, Grid } from 'semantic-ui-react'
import Header from './Header'
import CountDown from './CountDown'
import StartStop from './StartStop'
import SetTime from './SetTime'
import * as timerStates from '../timerStates'

class TimerContainer extends Component {

  state = {
    timer: moment.duration(25, 'minutes'),
    preSetTime: moment.duration(25, 'minutes'),
    timerState: timerStates.NOT_SET,
    currentTimer: null,
    on: false
  }

  addZero = (time) => {
    if(time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }

  newPreSetTime = (newTimer) => {
    this.setState({
      timer: newTimer,
      preSetTime: newTimer
    })
  }

  startTimer = () => {
    this.setState({
      timerState: timerStates.RUNNING,
      currentTimer: setInterval(this.reduceTimer, 1000),
      on: true
    })
  }

  reduceTimer = () => {
    let newTime = moment.duration(this.state.timer)
    newTime.subtract(1, 'seconds')
    this.setState({
      timer: newTime
    })
  }

  stopTimer = () => {
    if(this.state.currentTimer) {
      clearInterval(this.state.currentTimer)
    }
    this.setState({
      currentTimer: null,
      timer: moment.duration(this.state.preSetTime),
      timerState: timerStates.NOT_SET,
      on: false
    })
  }

  pauseTimer = () => {
    if(this.state.currentTimer) {
      clearInterval(this.state.currentTimer)
    }
    this.setState({
      currentTimer: null,
      timer: moment.duration(this.state.timer),
      timerState: timerStates.PAUSED,
      on: false
    })
  }

  render() {
    console.log(this.state)
    return (
      <Grid centered columns={1}>
        <Grid.Column width={6} className='center'>
          <Container textAlign='center'>
            <Header />
          </Container>
          <Container textAlign='center'>
            <CountDown
              timer={this.state.timer}
              addZero={this.addZero}
            />
            <StartStop
              timerState={this.state.timerState}
              startTimer={this.startTimer}
              stopTimer={this.stopTimer}
              pauseTimer={this.pauseTimer}
            />
          </Container>
          {
            (this.state.timerState !== timerStates.RUNNING) &&
            (<SetTime
              newtimer={this.state.preSetTime}
              reset={this.newPreSetTime}
             />)
          }
        </Grid.Column>
      </Grid>
    );
  }
}
export default TimerContainer
