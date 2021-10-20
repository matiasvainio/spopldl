import axios from 'axios';

const url = 'https://accounts.spotify.com/api/token';

export const authorize = async (params) => {
  const response = await axios.get(url, {
    params,
    headers: { 'Access-Control-Allow-Origin': '*' },
  });
  return response.data;
};

export const reqAccessToken = async (params, auth) => {
  const response = await axios.post(url, {
    params,
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
};
