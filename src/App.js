import React, { Component } from 'react';
import Axios from 'axios';
import './styles/layout.css';
import List from './components/List/List';
import Player from './components/Player/Player';
import PlayerInfo from './components/Player/PlayerInfo';
import * as util from './utils';

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
    let formattedData = util.formatListData(data);
    this.setState({
      data: formattedData
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
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
    );
  }

  selectActiveEpisode = async (selectedEpisode) => {
    let formattedAudio = util.formatMP3URL(selectedEpisode);
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
}

export default App;
