import React, { Component } from 'react';
import moment from 'moment'
import { Container, Grid } from 'semantic-ui-react'
import Header from './Header'
import CountDown from './CountDown'
import StartStop from './StartStop'
import SetTime from './SetTime'

class TimerContainer extends Component {

  state = {
    timer: moment.duration(25, 'minutes'),
    preSetTime: moment.duration(25, 'minutes')
  }

  setPreSetTime = (v) => {
    this.setState({
      
    })
  }

  render() {
    return (
      <Grid centered columns={1}>
        <Grid.Column width={6} className='center'>
          <Container textAlign='center'>
            <Header />
          </Container>
          <Container textAlign='center'>
            <CountDown timer={this.state.timer}/>
            <StartStop />
          </Container>
          <SetTime newtimer={this.state.preSetTime}/>
        </Grid.Column>
      </Grid>
    );
  }
}
export default TimerContainer
