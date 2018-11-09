import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  render() {
    return !this.props.episodeName ? this.preloadStatus() : this.loadPlayer();
  }

  preloadStatus = () => {
    return (
      <div>
        <p>No Loaderinos</p>
      </div>
    );
  };

  loadPlayer = () => {
    return (
      <ReactPlayer
        url={`https://api.spreaker.com/download/episode/${
          this.props.episodeName
        }/${this.props.episodeName}.mp3`}
        config={{
          file: {
            forceAudio: true
          }
        }}
        playing={false}
        controls={true}
        width="100%"
        height="100%"
      />
    );
  };
}

export default Player;
