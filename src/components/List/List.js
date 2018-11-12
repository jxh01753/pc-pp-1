import React, { Component } from 'react';
import Episode from './Episode';

class List extends Component {
  displayLoading = () => {
    return (
      <div>
        <p>It's loading mate.</p>
      </div>
    );
  };

  displayEpisodes = (episodes) => {
    return (
      <div>
        <p>It's supposedly loaded.</p>
        <ul>
          {episodes.map((episode) => (
            <Episode
              details={episode}
              key={episode.episode_id}
              selectActiveEpisode={this.props.selectActiveEpisode}
            />
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return !this.props.data.length > 0
      ? this.displayLoading()
      : this.displayEpisodes(this.props.data);
  }
}

export default List;
