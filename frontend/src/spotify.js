export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000';
const clientId = process.env.REACT_APP_CLIENT_ID;

const scopes = ['user-read-private', 'user-read-email'];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((init, item) => {
      let parts = item.split('=');
      init[parts[0]] = decodeURIComponent(parts[1]);
      return init;
    }, {});
};

console.log(getTokenFromUrl());

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
