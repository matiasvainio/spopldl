import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context/StateContext';

export const Home = ({ spotify }) => {
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
    if (_id === id) {
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
        <li style={{ color: 'black' }}>{x.track.name}</li>
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
            style={{ color: 'pink' }}
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
    <div>
      <h2>Home</h2>
      <ul>{renderPlaylists()}</ul>
    </div>
  );
};
