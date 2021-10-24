import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { TrackItem } from './TrackItem';

export const TrackList = () => {
  const [state, dispatch] = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state.playlists.length !== 0) {
      console.log('rendered tracklist', state.playlists);
      setLoading(false);
    }
  }, [state.playlists]);

  const conditionalRender = () => {
    if (loading) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <ul>
          {state.playlists.tracks.items.map((x) => {
            return (
              <li key={x.track.id}>
                <TrackItem track={x.track} />
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="flex flex-col items-center ml-16">
      <h2>Tracklist</h2>
      {conditionalRender()}
    </div>
  );
};
