import { useEffect } from "react";
import {
  addToFavorite,
  fetchMovies,
  removeFromFavorite,
  updateSearch,
} from "../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const MovieList = () => {
  const { allMovies, search, favorites } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    timer = setTimeout(() => dispatch(fetchMovies(search)), 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h3>Movies</h3>
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(updateSearch(e.target.value))}
        />
        {!allMovies.loading && allMovies.length ? (
          <ul>
            {allMovies.map((movie) => (
              <li key={movie.title}>
                {movie.title} and {movie.release_date}
                {favorites.find((fav) => fav.id === movie.id) ? (
                  <span className="fav-icon" onClick={() => dispatch(removeFromFavorite(movie.id))}>
                    <AiFillHeart />
                  </span>
                ) : (
                  <span className="fav-icon" onClick={() => dispatch(addToFavorite(movie))}>
                    <AiOutlineHeart />
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div>No allMovies</div>
        )}
      </div>
      <div>
        <h3>Favorites</h3>
        <ul>
          {favorites.map((fav) => (
            <li key={fav.title}>
              {fav.title}
              <span className="fav-icon" onClick={() => dispatch(removeFromFavorite(fav.id))}>
                <AiFillHeart />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
