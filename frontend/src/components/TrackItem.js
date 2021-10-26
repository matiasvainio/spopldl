import React from 'react';

export const TrackItem = (props) => {
  const { info } = props;

  const getArtists = (artists) => {
    if (artists)
      return artists.map((x) => (
        <span className="text-gray-400 ml-4">{x.name}</span>
      ));
    else return '';
  };

  return (
    <li className="bg-gray-900 white font-normal pt-4">
      <span>{info.track.name}</span>
      <br></br>
      {getArtists(info.track.artists)}
    </li>
  );
};
