import axios from "axios";
const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=8f88fbb1fbc5a87e908b044a9008dfe4";

export const getAllMovies = () => {
  return axios.get(url);
};
