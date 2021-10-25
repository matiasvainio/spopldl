import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { SideBar } from './SideBar';
import { TrackList } from './TrackList';

export const Home = ({ spotify }) => {
  return (
    <div>
      <SideBar />
      <TrackList spotify={spotify} />
    </div>
  );
};
