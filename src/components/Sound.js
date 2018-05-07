import React, { Component } from 'react';
import soundfile from '../assets/elephant.mp3'
let Sound = require('react-sound').default;

export default class Alert extends Component {

  render() {
    return (
      <Sound
        url={soundfile}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}
