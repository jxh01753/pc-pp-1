import React, { Component } from 'react';
import moment from 'moment';
import Axios from 'axios';
import Episode from './Episode';

const URL =
  'https://cors.io/?https://api.spreaker.com/v2/shows/2088171/episodes?limit=100';

class List extends Component {
  state = {
    data: {},
    hasError: false
  };

  componentDidMount = async () => {
    let { data } = await Axios.get(URL);

    let formattedData = data.response.items.map((episode) => {
      episode.formatted_date = moment(episode.published_at).format(
        'Do MMMM YYYY'
      );
      episode.formatted_duration = moment
        .duration(episode.duration, 'milliseconds')
        .asMinutes()
        .toFixed(0);
      return { ...episode };
    });

    this.setState({
      data: formattedData
    });
  };

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
    return !this.state.data.length > 0
      ? this.displayLoading()
      : this.displayEpisodes(this.state.data);
  }
}

export default List;
