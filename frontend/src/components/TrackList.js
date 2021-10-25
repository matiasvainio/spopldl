import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateContext';
import { TrackItem } from './TrackItem';

export const TrackList = ({ spotify }) => {
  const [state] = useStateContext();
  const [loading, setLooading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [showTracks, setShowTracks] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    if (state.playlists.items) {
      setLooading(false);
      console.log(state);
    }
  }, [state]);

  const handlePlaylistClick = (_id) => {
    // If selected playlist is already shown hide it.
    if (_id === id && showTracks) {
      setShowTracks(false);
    } else {
      setId(_id);
      spotify.getPlaylist(_id).then((x) => {
        setTracks(x.tracks.items);
        setShowTracks(true);
      });
    }
  };

  const renderTracks = (_id) => {
    if (_id === id) {
      return tracks.map((x) => (
        // <li style={{ color: 'black' }}>{x.track.name}</li>
        <TrackItem info={x} />
      ));
    } else {
      return '';
    }
  };

  const renderPlaylists = () => {
    if (!loading) {
      return state.playlists.items.map((x) => {
        return (
          <ul
            className="text-white text-2xl font-bold"
            onClick={() => handlePlaylistClick(x.id)}
          >
            {x.name}
            {showTracks ? renderTracks(x.id) : ''}
          </ul>
        );
      });
    } else {
      return 'Loading...';
    }
  };
  return (
    <div className="ml-16 bg-gray-800">
      <h2 className="font-bold text-9xl">Playlists</h2>
      {renderPlaylists()}
    </div>
  );
};
