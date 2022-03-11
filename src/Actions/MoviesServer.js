import axios from "axios";
import { GET_MOVIES } from "./types";
import { API_KEY } from "../api"


const getLink = (req) => {
  return `https://api.themoviedb.org/3/movie/${req}?api_key=${API_KEY}`;
}


export const getMovies = () => async dispatch => {

  try {

    console.log("Getting movies")
    const res = await axios.get(getLink("top_rated"));

    dispatch({
      type: GET_MOVIES,
      payload: res.data.results
    });
  } catch (err) {
    console.log(err.message)
  }
};