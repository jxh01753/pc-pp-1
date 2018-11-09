import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  render() {
    return (
      <ReactPlayer
        url="https://api.spreaker.com/download/episode/16060712/candy_corn_sucks.mp3"
        config={{
          file: {
            forceAudio: true
          }
        }}
        playing="true"
        controls="true"
      />
    );
  }
}

export default Player;
