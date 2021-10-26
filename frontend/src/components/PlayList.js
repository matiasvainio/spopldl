import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateContext';
import { TrackItem } from './TrackItem';

export const PlayList = ({ spotify }) => {
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

  const handlePlaylistClick = (playlistItem) => {
    const { id, name } = playlistItem;
    spotify.getPlaylist(id).then((x) => {
      dispatch({ type: 'SET_TRACKS', tracks: x.tracks.items });
      dispatch({ type: 'SET_CURR_PLAYLIST', currPlaylist: name });
    });
  };

  const renderTracks = (_id) => {
    if (_id === id) {
      return tracks.map((x) => <TrackItem info={x} />);
    } else {
      return '';
    }
  };

  const renderPlaylists = () => {
    if (!loading) {
      return state.playlists.items.map((x) => {
        return (
          <ul
            className="max-w-xl hover:text-hover cursor-pointer"
            onClick={() => {
              handlePlaylistClick(x);
            }}
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
    <div className="flex flex-col items-center text-center">
      {renderPlaylists()}
    </div>
  );
};
