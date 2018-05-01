import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class SetTime extends Component {

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Hours' placeholder='Hours' />
          <Form.Input fluid label='Minutes' placeholder='Minutes' />
          <Form.Input fluid label='Seconds' placeholder='Seconds' />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default SetTime
