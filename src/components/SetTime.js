import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import moment from 'moment'
import * as timerStates from '../timerStates'
let player;

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
    if(val == 0) {
      return ''
    } else {
      return val
    }
  }

  render() {
    const { value } = this.state
    console.log(this.state)
    console.log(this.props.newtimer.get('minutes'))
    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid
              onChange={this.handleChange}
              label='Hours'
              placeholder='Hours'
              name='hours'
              defaultValue={this.noNum(this.props.newtimer.get('hours'))}
            />
            <Form.Input fluid
              onChange={this.handleChange}
              label='Minutes'
              placeholder='Minutes'
              name='minutes'
              defaultValue={this.noNum(this.props.newtimer.get('minutes'))}
            />
            <Form.Input fluid
              onChange={this.handleChange}
              label='Seconds'
              placeholder='Seconds'
              name='seconds'
              defaultValue={this.noNum(this.props.newtimer.get('seconds'))}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SetTime
