import React, { Component } from 'react';
import './App.css';
// import { Container, Grid } from 'semantic-ui-react'
import TimerContainer from './components/TimerContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerContainer />
      </div>
    );
  }
}

export default App;
