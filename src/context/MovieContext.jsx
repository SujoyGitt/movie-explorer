import { createContext, useReducer, useEffect } from "react";
import { movieReducer } from "./MovieReducer";
import axios from "axios";
const initialState = {
  movieList: [],
  loading: true,
  err: "",
};
export const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const fetchMovies = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=27633acc&s=avengers",
      );

      dispatch({
        type: "SET_MOVIES",
        payload: response.data.Search || [],
      });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err });
    }

    dispatch({ type: "SET_LOADING", payload: false });
  };

  const searchMovieList = async (query) => {
    try {
      const newUser = await axios.get(
        `https://www.omdbapi.com/?apikey=27633acc&s=${query}`,
      );
      dispatch({ type: "SEARCH_LIST", payload: newUser.data.Search });
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        state,
        dispatch,
        searchMovieList,
        fetchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
