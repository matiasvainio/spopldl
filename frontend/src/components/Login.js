import React from 'react';
import { loginUrl } from '../utils/spotify';

export const Login = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-around text-center">
      <h2 className="font-bold text-3xl">Login page</h2>
      <a
        className="bg-green-600 hover:bg-green-700 text-white h-16 w-48 p-4 rounded-xl"
        href={loginUrl}
      >
        Login with spotify
      </a>
    </div>
  );
};
