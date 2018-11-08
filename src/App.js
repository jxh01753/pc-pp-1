import React, { Component } from 'react';
import './styles/layout.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
