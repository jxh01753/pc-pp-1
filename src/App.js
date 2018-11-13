import React, { Component } from 'react';
import Axios from 'axios';
import moment from 'moment';
import './styles/layout.css';
import List from './components/List/List';
import Player from './components/Player/Player';
import PlayerInfo from './components/Player/PlayerInfo';

const URL =
  'https://cors.io/?https://api.spreaker.com/v2/shows/2088171/episodes?limit=100';

class App extends Component {
  state = {
    activeEpisode: {},
    episodeName: '',
    description: '',
    data: {}
  };

  /* Better to make async call here and load the data so the player can load. Extract to helper function asap */

  componentWillMount = async () => {
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

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <div className="player-info">
              <PlayerInfo
                activeEpisode={this.state.activeEpisode}
                description={this.state.description}
              />
            </div>
            <div className="player-container">
              <Player
                activeEpisode={this.state.activeEpisode.episode_id}
                episodeName={this.state.episodeName}
              />
            </div>
            <List
              data={this.state.data}
              selectActiveEpisode={this.selectActiveEpisode}
            />
          </div>
        </div>
      </div>
    );
  }

  selectActiveEpisode = async (selectedEpisode) => {
    let formattedAudio = this.formatMP3URL(selectedEpisode);
    let description = await Axios.get(
      `https://cors.io/?https://api.spreaker.com/v2/episodes/${
        selectedEpisode.episode_id
      }`
    );
    this.setState({
      activeEpisode: selectedEpisode,
      episodeName: formattedAudio,
      description: description.data.response.episode.description
    });
  };

  formatMP3URL = (episode) => {
    let title = episode.title
      .split(' ')
      .map((words) => words.replace(/[^A-Za-z0-9]/gm, ''))
      .join('_')
      .toLowerCase();
    return title;
  };
}

export default App;
