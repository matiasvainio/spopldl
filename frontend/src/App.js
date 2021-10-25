import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Login } from './components/Login';
import { getTokenFromUrl } from './utils/spotify';
import { useStateContext } from './context/StateContext';
import { Home } from './components/Home';
import { setToken } from './utils/utils';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getRecords } from './utils/utils';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [, dispatch] = useStateContext();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // window.location.hash = '';
    const hashToken = hash.access_token;

    const records = getRecords();

    const setCurrentUser = async (token) => {
      spotify.setAccessToken(token);
      const user = await spotify.getMe();
      const playlists = await spotify.getUserPlaylists({ limit: 50 });

      setToken(token);
      dispatch({ type: 'SET_USER', user: user });
      dispatch({ type: 'SET_TOKEN', token: token });
      dispatch({ type: 'SET_PLAYLISTS', playlists: playlists });
    };

    setCurrentUser(hashToken);
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home spotify={spotify} />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
