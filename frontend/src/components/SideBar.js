import React, { useState } from 'react';
import { PlayList } from './PlayList';

export const SideBar = ({ spotify }) => {
  const [showPlaylists, setShowPlaylists] = useState(false);

  const handleShowPlaylists = () => {
    setShowPlaylists(!showPlaylists);
  };

  return (
    <div className="flex flex-col items-center min-h-screen h-auto w-96 t-0 bg-sidebar text-sidebarText pt-16">
      <h2 className="text-3xl cursor-pointer hover:text-hover">Home</h2>
      <h2
        className="text-3xl cursor-pointer hover:text-hover pt-4"
        onClick={() => handleShowPlaylists()}
      >
        Playlists
      </h2>
      {showPlaylists ? <PlayList spotify={spotify} /> : ''}
      <h2 className="text-3xl cursor-pointer hover:text-hover pt-4">
        Some link
      </h2>
      <h2 className="text-3xl cursor-pointer hover:text-hover pt-4">
        Another link
      </h2>
    </div>
  );
};
