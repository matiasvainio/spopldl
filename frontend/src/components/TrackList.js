import React from 'react';
import { useStateContext } from '../context/StateContext';

export const TrackList = () => {
  const [state] = useStateContext();

  const getTrackNames = () => {
    if (state.tracks) {
      console.log(state.tracks);
      return state.tracks.map((x) => (
        <tr>
          <td>{x.track.name}</td>
          <td>{getArtistNames(x.track)}</td>
          <td>{getAlbumName(x.track)}</td>
        </tr>
      ));
    }
  };

  const getArtistNames = (track) => {
    return track.artists.map((x) => <p>{x.name}</p>);
  };

  const getAlbumName = (track) => {
    return track.album.name;
  };

  const returnTable = () => {
    return (
      <table className="w-full">
        <tr className="text-left">
          <th>Name</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Links</th>
        </tr>
        {getTrackNames()}
      </table>
    );
  };

  return (
    <div className="text-sidebarText ml-16 mt-14 w-screen">
      <h2 className="text-3xl mb-8">{state.currPlaylist}</h2>
      {state.currPlaylist ? returnTable() : <p>Such empty...</p>}
    </div>
  );
};
