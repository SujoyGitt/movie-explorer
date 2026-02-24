export const movieReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload, err: "" };
    case "SET_ERROR":
      return { ...state, err: action.payload, loading: false };
    case "SET_MOVIES":
      return { ...state, movieList: action.payload, err: "", loading: false };
    case "SEARCH_LIST":
      return { ...state, movieList: action.payload, err: "", loading: false };

    default:
      return state;
  }
};
