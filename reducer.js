export const initialState = {
  // this is an initial empty data layer.
  user: null,
  playlists: [],
  playing: false,
  item: null,

  //token: add your own account token provided by spotify,
};

const reducer = (state, action) => {
  console.log(action);
  //Action has -> type , [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, //keeping previous state.
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state, //keeping previous state.
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state, //keeping previous state.
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state, //keeping previous state.
        discover_weekly: action.discover_weekly,
      };
    default:
      return state; //
  }
};
export default reducer;
