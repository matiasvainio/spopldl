import React from 'react';
import { loginUrl } from '../utils/spotify';

export const Login = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-around text-center bg-background text-sidebarText font-mono">
      <h2 className="font-bold text-3xl">Login page</h2>
      <a className="text-sidebarText hover:text-hover" href={loginUrl}>
        Login with spotify
      </a>
    </div>
  );
};
