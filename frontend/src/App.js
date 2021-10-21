import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Login } from './components/Login';
import { getTokenFromUrl } from './spotify';
import { useStateContext } from './context/StateContext';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [_token, setToken] = useState();
  const [{ user, playlists }, dispatch] = useStateContext();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const hashToken = hash.access_token;

    if (hashToken) {
      setToken(hashToken);
      dispatch({ type: 'SET_TOKEN', token: hashToken });
      spotify.setAccessToken(hashToken);
      spotify.getMe().then((user) => {
        dispatch({ type: 'SET_USER', user: user });
      });
      spotify
        .getPlaylist('2GJR11VlkxRpLjtxs4ymCP?si=bb73313d06324bac')
        .then((playlists) => {
          dispatch({ type: 'SET_PLAYLISTS', playlists: playlists });
        });
    }
  }, [_token, dispatch]);

  console.log(user);
  console.log(playlists);

  return <div className="app">{_token ? <h2>Logged in</h2> : <Login />}</div>;
}

export default App;
