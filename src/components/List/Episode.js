import React from 'react';

const Episode = (props) => {
  return (
    <div className="listItem">
      <p>
        {props.details.title} - {props.details.formatted_date} - Duration:{' '}
        {props.details.formatted_duration} minutes.
      </p>
    </div>
  );
};

export default Episode;
