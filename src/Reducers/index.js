import { combineReducers } from "redux";
import getMoviesReducer from "./getMoviesReducer";
import getSearchedMoviesReducer from "./getSearchedMoviesReducer";
import getMovieReducer from "./getMovieReducer";
import getRecomMoviiesReducer from "./getRecomMoviesReducer"
import favouriteReducer from "./favMoviereducer";




export default combineReducers({
  movies: getMoviesReducer,
  search_movie: getSearchedMoviesReducer,
  movie: getMovieReducer,
  recommov: getRecomMoviiesReducer,
  fmovies: favouriteReducer
});