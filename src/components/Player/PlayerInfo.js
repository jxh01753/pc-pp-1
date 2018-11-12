import React, { Component } from 'react';
import Axios from 'axios';

class PlayerInfo extends Component {
  render() {
    return (
      <div>
        <img
          className="pod-picture"
          src={this.props.activeEpisode.image_url}
          alt={'Active Podcast Logo'}
        />
        <h2>Current Episode: {this.props.activeEpisode.title}</h2>
        <p>Description: {this.props.description}</p>
      </div>
    );
  }
}

export default PlayerInfo;
