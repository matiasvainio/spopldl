export const initState = {
  user: null,
  token: null,
  playlists: [],
  records: [],
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
    case 'SET_RECORDS':
      return {
        ...state,
        records: action.playlists,
      };
    default:
      return state;
  }
};
