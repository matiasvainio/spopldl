import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Login } from './components/Login';
import { getTokenFromUrl } from './utils/spotify';
import { useStateContext } from './context/StateContext';
import { SideBar } from './components/SideBar';
import { Home } from './components/Home';
import { setToken, getToken } from './utils/utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [state, dispatch] = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hash = getTokenFromUrl();
    // window.location.hash = '';
    const hashToken = hash.access_token;

    const setCurrentUser = async (token) => {
      spotify.setAccessToken(token);
      const user = await spotify.getMe();
      const playlists = await spotify.getUserPlaylists();

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
