import React from 'react';
import '../../styles/episodes.css';

const Episode = (props) => {
  return (
    <div className="listItem">
      <p
        className="btn episode-btn"
        onClick={() => props.selectActiveEpisode(props.details)}
      >
        {props.details.title} - {props.details.formatted_date} - Duration:{' '}
        {props.details.formatted_duration} minutes.
      </p>
    </div>
  );
};

export default Episode;
