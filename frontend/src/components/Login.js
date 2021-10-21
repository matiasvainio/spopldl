import React from 'react';
import { loginUrl } from '../spotify';

export const Login = () => {
  return (
    <div>
      <h2>Login page</h2>
      <a href={loginUrl}>Login with spotify</a>
    </div>
  );
};
