import { useEffect } from "react";
import {
  addToFavorite,
  fetchMovies,
  removeFromFavorite,
} from "../../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./movieList.css";

const imgURL = "https://image.tmdb.org/t/p/w500/";

export const MovieList = () => {
  const { allMovies, search, favorites } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    timer = setTimeout(() => dispatch(fetchMovies(search)), 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className="list-box">
      <h2>Movies</h2>
      {!allMovies.loading && allMovies.length ? (
        <ul className="movies-list">
          {allMovies.map((movie) => (
            <li class="card">
              <div>
                <img
                  src={imgURL + movie.poster_path}
                  alt="movie-background-img"
                  className="img"
                />
              </div>
              <div class="headline">
                <h3 class="h3">{movie.title}</h3>
                <h5 class="h5">{movie.release_year}</h5>
              </div>
              {favorites.find((fav) => fav.id === movie.id) ? (
                <span
                  className="fav-icon"
                  onClick={() => dispatch(removeFromFavorite(movie.id))}
                >
                  <AiFillHeart size={24} />
                </span>
              ) : (
                <span
                  className="fav-icon"
                  onClick={() => dispatch(addToFavorite(movie))}
                >
                  <AiOutlineHeart size={24} />
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div>No movies</div>
      )}
    </div>
  );
};
