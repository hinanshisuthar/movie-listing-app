import axios from "axios";
const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=8f88fbb1fbc5a87e908b044a9008dfe4";

export const imgURL = "https://image.tmdb.org/t/p/w500/";

export const getAllMovies = (search) => {
  if (search === "") {
    return axios.get(url);
  }
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=8f88fbb1fbc5a87e908b044a9008dfe4&query=${search}&year=${Number(
      search
    )}&language=${search}`
  );
};
