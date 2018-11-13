import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  state = {
    episodeNo: '',
    episodeName: ''
  };

  render() {
    return !this.props.activeEpisode ? (
      this.loadingScreen()
    ) : (
      <ReactPlayer
        url={`https://api.spreaker.com/download/episode/${
          this.props.activeEpisode
        }/${this.props.episodeName}.mp3`}
        config={{
          file: {
            forceAudio: true
          }
        }}
        playing
        controls={true}
        width="100%"
        height="100%"
      />
    );
  }

  loadingScreen = () => {
    return (
      <div className="helper-text">
        <p>Select an episode below to load the player.</p>
      </div>
    );
  };

  componentDidMount = () => {
    if (!this.props.activeEpisode) {
    } else {
      this.setState({
        episodeNo: this.props.activeEpisode,
        episodeName: this.props.episodeName
      });
    }
  };
}

export default Player;
