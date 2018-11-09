import React, { Component } from 'react';
import './styles/layout.css';
import List from './components/List/List';
import Player from './components/Player/Player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <Player />
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
