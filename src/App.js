import React, { Component } from 'react';
import './styles/layout.css';
import List from './components/List/List';
import Player from './components/Player/Player';

class App extends Component {
  state = {
    activeEpisode: {},
    episodeName: ''
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <Player
              activeEpisode={this.state.activeEpisode}
              episodeName={this.state.episodeName}
            />
            <List selectActiveEpisode={this.selectActiveEpisode} />
          </div>
        </div>
      </div>
    );
  }

  selectActiveEpisode = (selectedEpisode) => {
    let formattedAudio = this.formatMP3URL(selectedEpisode);
    this.setState({
      activeEpisode: selectedEpisode,
      episodeName: formattedAudio
    });
  };

  componentDidUpdate = () => {
    if (this.state.activeEpisode.title) {
    }
  };

  formatMP3URL = (episode) => {
    if (!this.state.episodeID) {
      let title = episode.title
        .split(' ')
        .map((words) => words.replace(/[^A-Za-z0-9]/gm, ''))
        .join('_')
        .toLowerCase();
      return title;
    }
  };
}

export default App;
