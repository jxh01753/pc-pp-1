import React from 'react';

const Episode = (props) => {
  return (
    <div className="listItem">
      <p onClick={() => props.selectActiveEpisode(props.details)}>
        {props.details.title} - {props.details.formatted_date} - Duration:{' '}
        {props.details.formatted_duration} minutes.
      </p>
    </div>
  );
};

export default Episode;
