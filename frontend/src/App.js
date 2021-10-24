import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Login } from './components/Login';
import { TrackList } from './components/TrackList';
import { getTokenFromUrl } from './spotify';
import { useStateContext } from './context/StateContext';
import { SideBar } from './components/SideBar';
import { Home } from './components/Home';
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
    window.location.hash = '';
    const hashToken = hash.access_token;

    console.log(spotify);
    if (hashToken) {
      dispatch({ type: 'SET_TOKEN', token: hashToken });
      spotify.setAccessToken(hashToken);
      spotify.getMe().then((user) => {
        dispatch({ type: 'SET_USER', user: user });
        setLoading(false);
      });
    }
  }, [dispatch]);

  const conditionalRender = () => {
    if (loading) {
      return <Login />;
    } else {
      return <Home spotify={spotify} />;
    }
  };

  return conditionalRender();
}

export default App;
