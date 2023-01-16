import { useEffect } from "react";
import {
  fetchMovies,
} from "../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";

export const MovieList = () => {
  const { allMovies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div>
      <div>
        <h3>Movies</h3>
        {!allMovies.loading && allMovies.length ? (
          <ul>
            {allMovies.map((movie) => (
              <li key={movie.title}>
                {movie.title} and {movie.release_date}
                <span
                  className="fav-icon"
                >
                  <AiOutlineHeart />
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div>No movies to show</div>
        )}
      </div>
    </div>
  );
};
