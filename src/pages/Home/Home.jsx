import { Navbar } from "../../components/navbar/Navbar";
import { MovieList } from "../../components/movie listing/MovieList";
import './home.css'
import { Favorites } from "../../components/favorites/Favorites";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <MovieList />
        <Favorites />
      </div>
    </>
  );
};
