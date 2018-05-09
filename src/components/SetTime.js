import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
// import moment from 'moment'
// import * as timerStates from '../timerStates'
// let player;

class SetTime extends Component {

  state = {
    hours: null,
    minutes: null,
    seconds: null
  }

  handleChange = (e, { value }) => {

    let newTimer = this.props.newtimer

    this.setState({ [e.target.name]: e.target.value })

    if(e.target.name) newTimer.subtract(newTimer.get(e.target.name), e.target.name).add(parseInt(e.target.value, 10), e.target.name)

    this.props.reset(newTimer)
  }

  noNum = (val) => {
    if(val === 0) {
      return ''
    } else {
      return val
    }
  }

  inputs = () => {
    let time = ['hours', 'minutes', 'seconds']

      return(
        time.map( i => <Form.Input key={i} fluid
          onChange={this.handleChange}
          label={i}
          placeholder={i}          name={i}
          defaultValue={this.noNum(this.props.newtimer.get('hours'))}
                       />)
      )
  }


  render() {

    // const { value } = this.state
    console.log(this.state)
    console.log(this.props.newtimer.get('minutes'))
    // console.log(this.inputs())

    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            {this.inputs()}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SetTime
