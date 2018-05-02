import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class StartStop extends Component {

  render() {
    return (
    <div>
      <Button color='green'>Start >></Button>
      <Button color='white'>Pause ||</Button>
      <Button color='red'>Reset </Button>
    </div>
        );
  }
}
export default StartStop
