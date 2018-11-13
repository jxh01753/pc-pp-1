import moment from 'moment';
/* This file is for helper functions */

// The mp3s on the spreaker API are all lowercase alphanumeric characters seperated by underscores.
export const formatMP3URL = (episode) => {
  let title = episode.title
    .split(' ')
    .map((words) => words.replace(/[^A-Za-z0-9]/gm, ''))
    .join('_')
    .toLowerCase();
  return title;
};

// Converts milliseconds to minutes for user info.
export const formatListData = (array) => {
  return array.response.items.map((episode) => {
    episode.formatted_date = moment(episode.published_at).format(
      'Do MMMM YYYY'
    );
    episode.formatted_duration = moment
      .duration(episode.duration, 'milliseconds')
      .asMinutes()
      .toFixed(0);
    return { ...episode };
  });
};
