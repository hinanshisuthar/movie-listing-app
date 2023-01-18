import { BiMoviePlay } from "react-icons/bi";
import "./navbar.css";
import { useEffect } from "react";
import { fetchMovies, updateSearch } from "../../features/movieSlice";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const { search } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    timer = setTimeout(() => dispatch(fetchMovies(search)), 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [search]);

  return (
    <nav className="nav">
      <h1 className="heading">
        <BiMoviePlay className="icon" size={30} />
        Movie Listing App
      </h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Search movies...(Eg. Avatar)"
          value={search}
          onChange={(e) => dispatch(updateSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};
