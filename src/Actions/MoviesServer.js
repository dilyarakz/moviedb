import axios from "axios";
import { GET_MOVIES, GET_SEARCH_MOVIES } from "./types";
import { API_KEY } from "../api"





const API_LINK = "https://api.themoviedb.org/3/";

export const getMovies = () => async dispatch => {

  try {

    console.log("Getting movies")
    const res = await axios.get(`${API_LINK}movie/top_rated?api_key=${API_KEY}`);

    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    });

    return res.data.results;

  } catch (err) {
    console.log(err.message)
  }
};

export const searchMovies = (query) => async dispatch => {

  try {
    //Add logic if query has white space
    console.log("Searching Movies")
    const res = await axios.get(`${API_LINK}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`);

    dispatch({
      type: GET_SEARCH_MOVIES,
      payload: res.data.results
    });

    return res.data.results;

  } catch (err) {

  }

}