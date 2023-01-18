import { AiFillHeart } from "react-icons/ai";
import { removeFromFavorite } from "../../features/movieSlice";
import { useDispatch } from "react-redux";
import './favorites.css'

const imgURL = "https://image.tmdb.org/t/p/w500/";

export const FavCard = ({ fav }) => {
  const dispatch = useDispatch();

  return (
    <li class="fav-card">
      <div>
        <img
          src={imgURL + fav.poster_path}
          alt="fav-background-img"
          className="img"
        />
      </div>
      <div class="headline">
        <h3 class="h3">{fav.title}</h3>
        <h5 class="h5">{fav.release_year}</h5>
      </div>
      <span onClick={() => dispatch(removeFromFavorite(fav.id))}>
        <AiFillHeart className="icon fav-card-icon" size={28} />
      </span>
    </li>
  );
};
