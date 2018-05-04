import React, { Component } from 'react';
var Sound = require('react-sound').default;

export default class Sound extends React.Component {
  render() {
    return (
      <Sound
        url="https://archive.org/details/universe"
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}
