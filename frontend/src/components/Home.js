import React, { useEffect, useState } from 'react';
import { SideBar } from './SideBar';
import { useStateContext } from '../context/StateContext';

export const Home = ({ spotify }) => {
  const [state, dispatch] = useStateContext();
  const [loading, setLooading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [showTracks, setShowTracks] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    if (state.playlists.items) {
      setLooading(false);
    }
  }, [state]);

  const getTracksForPlaylist = (id) => {
    if (showTracks) setShowTracks(false);
    setId(id);
    spotify.getPlaylist(id).then((x) => {
      setTracks(x.tracks.items);
      setShowTracks(!showTracks);
    });
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
            onClick={() => getTracksForPlaylist(x.id)}
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
