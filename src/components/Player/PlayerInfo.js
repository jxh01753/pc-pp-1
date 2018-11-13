import React from 'react';

const PlayerInfo = (props) => {
  return props.activeEpisode.title ? (
    <div className="podcast-info">
      <img
        className="pod-picture"
        src={props.activeEpisode.image_url}
        alt={'Active Podcast Logo'}
      />
      <h2 className="episode-title">
        Current Episode: {props.activeEpisode.title}
      </h2>
      <p className="description-title">Description: {props.description}</p>
    </div>
  ) : (
    <React.Fragment />
  );
};

export default PlayerInfo;
