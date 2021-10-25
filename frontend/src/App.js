import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Login } from './components/Login';
import { getTokenFromUrl } from './utils/spotify';
import { useStateContext } from './context/StateContext';
import { Home } from './components/Home';
import { setToken } from './utils/utils';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [state, dispatch] = useStateContext();

  // const getRecords = async (playlists) => {
  //   const arr = [];
  //   if (playlists.items) {
  //     for (let i = 0; i < playlists.items.length; i++) {
  //       const record = await spotify.getPlaylist(playlists.items[i].id, {
  //         limit: 20,
  //       });
  //       arr.push(record.tracks.items);
  //     }
  //   }
  //   console.log(arr);
  //   return arr;
  // };

  useEffect(() => {
    const hash = getTokenFromUrl();
    // window.location.hash = '';
    const hashToken = hash.access_token;

    const setCurrentUser = async (token) => {
      spotify.setAccessToken(token);
      const user = await spotify.getMe();
      const playlists = await spotify.getUserPlaylists({ limit: 50 });
      // const records = await getRecords(playlists);

      setToken(token);
      dispatch({ type: 'SET_USER', user: user });
      dispatch({ type: 'SET_TOKEN', token: token });
      dispatch({ type: 'SET_PLAYLISTS', playlists: playlists });
      // dispatch({ type: 'SET_RECORDS', records: records });
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
