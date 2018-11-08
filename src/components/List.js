import React, { Component } from 'react';
import Axios from 'axios';

const URL = 'https://api.spreaker.com/v2/shows/2088171/episodes';

class List extends Component {
  state = {
    data: {},
    activeSelection: {},
    hasError: false
  };

  componentDidMount = async () => {
    let { data } = await Axios.get(URL);
    this.setState({
      data: data.response.items
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
        <p>It's supposedly loaded.{console.log(this.state.data)}</p>
      </div>
    );
  };

  render() {
    return !this.state.data
      ? this.displayLoading()
      : this.displayEpisodes(this.state.data);
  }
}

export default List;
