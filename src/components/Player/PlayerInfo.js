import React from 'react';

const PlayerInfo = (props) => {
  return props.activeEpisode.title ? (
    <div>
      <img
        className="pod-picture"
        src={props.activeEpisode.image_url}
        alt={'Active Podcast Logo'}
      />
      <h2>Current Episode: {props.activeEpisode.title}</h2>
      <p>Description: {props.description}</p>
    </div>
  ) : (
    <React.Fragment />
  );
};

export default PlayerInfo;
