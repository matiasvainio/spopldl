import React, { useEffect } from 'react';
import { SideBar } from './SideBar';
import { TrackList } from './TrackList';
import { useStateContext } from '../context/StateContext';

export const Home = (props) => {
  const spotify = props;
  const [state, dispatch] = useStateContext();

  useEffect(() => {
    spotify.getMe().then((user) => {
      console.log(user);
    });
  });

  console.log(state);
  return (
    <div>
      <SideBar />
      <article className="ml-16 w-screen h-screen">
        <h2>Home page</h2>
        <h3>Playlists:</h3>
        <TrackList />
      </article>
    </div>
  );
};
