import React, { Component } from 'react';
import moment from 'moment'
import { Container, Grid } from 'semantic-ui-react'
import Header from './Header'
import CountDown from './CountDown'
import StartStop from './StartStop'
import SetTime from './SetTime'
import * as timerStates from '../timerStates'
import soundfile from '../assets/elephant.mp3'

class TimerContainer extends Component {

  state = {
    time: new Date().getTime(),
    timer: moment.duration(0),
    preSetTime: moment.duration(0),
    timerState: timerStates.NOT_SET,
    currentTimer: null,
    on: false
  }

  alert = (i) => {
    let audio = new Audio(soundfile)
    if(i === timerStates.COMPLETE)

     return (
       <audio ref="audio_tag" src={soundfile} autoPlay/>
           )
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
      preSetTime: newTimer,
      timerState: timerStates.NOT_SET
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
    if(this.state.timer.get('hours') === 0 && this.state.timer.get('minutes') === 0 && this.state.timer.get('seconds') === 0
    ) {
      this.completeTimer();
      return;
    }
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

  completeTimer = () => {
    if(this.state.currentTimer) {
      clearInterval(this.state.currentTimer)
    }
    this.setState({
      currentTimer: null,
      timer: this.state.preSetTime,
      timerState: timerStates.COMPLETE,
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
              alert={this.alert}
              timerState={this.state.timerState}
             />)
          }
        </Grid.Column>
        {this.alert(this.state.timerState)}
      </Grid>
    );
  }
}
export default TimerContainer
