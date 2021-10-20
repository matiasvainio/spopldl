import SpotifyWebApi from 'spotify-web-api-js/src/spotify-web-api';
import { reqAccessToken } from './services/auth';
import './App.css';

function App() {
  const url = 'https://accounts.spotify.com/authorize';
  const scope = 'user-read-private user-read-email';
  const currentUrl = new URL(window.location);
  let token = '';

  const params = {
    response_type: 'code',
    client_id: process.env.REACT_APP_CLIENT_ID,
    scope: scope,
    redirect_uri: 'http://localhost:3000',
  };

  const getEncodedString = (clientId, clientSecret) => {
    const string = `${clientId}:${clientSecret}`;
    return string.toString('base64');
  };

  if (currentUrl.searchParams.get('code')) {
    token = currentUrl.searchParams.get('code');
    console.log(token);
    const response = reqAccessToken(
      {
        grant_type: 'authorization_code',
        code: token,
        redirect_uri: params.redirect_uri,
      },
      getEncodedString(
        process.env.REACT_APP_CLIENT_ID,
        process.env.REACT_APP_CLIENT_SECRET
      )
    );
  }

  const handleAuthLink = () => {
    if (token) {
      return <h2>{token}</h2>;
    }

    const authUrl = new URL(url);
    authUrl.searchParams.append('response_type', params.response_type);
    authUrl.searchParams.append('client_id', params.client_id);
    authUrl.searchParams.append('scope', params.scope);
    authUrl.searchParams.append('redirect_uri', params.redirect_uri);

    return <div className="App">{<a href={authUrl.toString()}>Link</a>}</div>;
  };

  return handleAuthLink();
}

export default App;
