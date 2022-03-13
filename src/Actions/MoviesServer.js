import axios from "axios";
import {
  GET_MOVIES,
  GET_SEARCH_MOVIES,
  GET_MOVIE,
  GET_RECOM,
  ADD_FAV,
  DEL_FAV
} from "./types";
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


export const getMovie = (id) => async dispatch => {

  try {

    console.log("GET MOVIE DETAILS" + id)
    console.log("link: " + `${API_LINK}movie/${id}?api_key=${API_KEY}&language=en-US`)
    const res = await axios.get(`${API_LINK}movie/${id}?api_key=${API_KEY}&language=en-US`);

    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });

    return res.data;

  } catch (err) {

  }
}


export const getRecom = (id) => async dispatch => {

  try {
    console.log("GET Recom" + id)
    console.log("link: " + `${API_LINK}movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`)
    const res = await axios.get(`${API_LINK}movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`);

    dispatch({
      type: GET_RECOM,
      payload: res.data.results
    });

    return res.data.results;

  } catch (err) {

  }
}


export const addFav = (fmovie) => async (dispatch, getState) => {

  dispatch({
    type: ADD_FAV,
    payload: fmovie
  });
  // console.log("fmovies", fmovie)
  // localStorage.setItem(
  //   "fmovies",
  //   JSON.stringify(getState.fmovies)
  // )
}

export const removeFav = (id) => (dispatch, getState) => {
  dispatch({
    type: DEL_FAV,
    payload: id
  })

  // localStorage.setItem(
  //   "fmovies",
  //   JSON.stringify(getState.fmovies)
  // )
}