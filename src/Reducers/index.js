import { combineReducers } from "redux";
import getMoviesReducer from "./getMoviesReducer";



export default combineReducers({
  movies: getMoviesReducer
});