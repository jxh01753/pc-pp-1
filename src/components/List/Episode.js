import React from 'react';

const Episode = (props) => {
  return (
    <div className="listItem">
      <p>{props.details.title}</p>
    </div>
  );
};

export default Episode;
