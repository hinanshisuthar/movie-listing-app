import { AiFillHeart } from "react-icons/ai";
import { removeFromFavorite } from "../../features/movieSlice";
import { useDispatch } from "react-redux";
import './favorites.css'
import { imgURL } from "../../services/movieService";

export const FavCard = ({ fav }) => {
  const dispatch = useDispatch();

  return (
    <li className="fav-card">
      <div>
        <img
          src={imgURL + fav.poster_path}
          alt="fav-background-img"
          className="img"
        />
      </div>
      <div className="headline">
        <h3 className="h3">{fav.title}</h3>
        <h5 className="h5">{fav.release_year}</h5>
      </div>
      <span onClick={() => dispatch(removeFromFavorite(fav.id))}>
        <AiFillHeart className="icon fav-card-icon" size={28} />
      </span>
    </li>
  );
};
