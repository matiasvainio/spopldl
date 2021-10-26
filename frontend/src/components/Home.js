import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { SideBar } from './SideBar';
import { TrackList } from './TrackList';

export const Home = ({ spotify }) => {
  return (
    <div className="flex w-screen h-auto text-white font-mono bg-background">
      <SideBar spotify={spotify} />
      <TrackList />
    </div>
  );
};
