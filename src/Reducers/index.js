import { combineReducers } from "redux";
import getMoviesReducer from "./getMoviesReducer";
import getSearchedMoviesReducer from "./getSearchedMoviesReducer";




export default combineReducers({
  movies: getMoviesReducer,
  search_movie: getSearchedMoviesReducer
});