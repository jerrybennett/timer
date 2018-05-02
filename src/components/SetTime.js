import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import moment from 'moment'

class SetTime extends Component {

  state = {
    hours: null,
    minutes: null,
    seconds: null
  }

  handleChange = (e, { value }) => {
    let newTimer = this.props.newtimer
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { value } = this.state
    console.log(this.state)
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid
            onChange={this.handleChange}
            label='Hours'
            placeholder='Hours'
            name='hours'
            defaultValue={this.props.newtimer.get('hours')}
          />
          <Form.Input fluid
            onChange={this.handleChange}
            label='Minutes'
            placeholder='Minutes'
            name='minutes'
            defaultValue={this.props.newtimer.get('minutes')}
          />
          <Form.Input fluid
            onChange={this.handleChange}
            label='Seconds'
            placeholder='Seconds'
            name='seconds'
            defaultValue={this.props.newtimer.get('seconds')}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default SetTime
