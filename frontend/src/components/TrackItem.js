import React from 'react';

export const TrackItem = ({ track }) => {
  return (
    <div className="flex my-2">
      <span>{track.name}</span>
      {track.artists.map((x) => (
        <span style={{ marginLeft: '1em' }}>{x.name}</span>
      ))}
    </div>
  );
};
