import React, { Component } from 'react';
let Sound = require('react-sound').default;

export default class Alert extends Component {

  render() {
    return (
      <Sound
        url="https://ia800809.us.archive.org/26/items/ElephantSounds/elephant1.mp3"
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}
