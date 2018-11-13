import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../styles/player.css';

class Player extends Component {
  state = {
    episodeNo: '',
    episodeName: ''
  };

  render() {
    return !this.props.activeEpisode ? (
      this.loadingScreen()
    ) : (
      <div className="react-player-section">
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
          controls
          width="100%"
          height="100%"
        />
      </div>
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
