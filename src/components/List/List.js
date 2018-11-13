import React from 'react';
import Episode from './Episode';

const List = (props) => {
  const displayLoading = () => {
    return (
      <div>
        <p className="loading-message">Retrieving podcast list.</p>
      </div>
    );
  };

  const displayEpisodes = (episodes) => {
    return (
      <div>
        <h2 className="list-title">Episodes</h2>
        <ul>
          {episodes.map((episode) => (
            <Episode
              details={episode}
              key={episode.episode_id}
              selectActiveEpisode={props.selectActiveEpisode}
            />
          ))}
        </ul>
      </div>
    );
  };

  return !props.data.length > 0
    ? displayLoading()
    : displayEpisodes(props.data);
};

export default List;
