export const initState = {
  user: null,
  token: null,
  playlists: [],
  currPlaylist: null,
  tracks: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_CURR_PLAYLIST':
      return {
        ...state,
        currPlaylist: action.currPlaylist,
      };
    case 'SET_TRACKS':
      return {
        ...state,
        tracks: action.tracks,
      };
    default:
      return state;
  }
};
