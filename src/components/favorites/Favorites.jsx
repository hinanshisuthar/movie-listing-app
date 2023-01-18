import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { FavCard } from "./FavCard";
import "./favorites.css";

export const Favorites = () => {
  const { favorites } = useSelector((state) => state.movie);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="fav-box">
      <h3 className="popup" onClick={() => setMenuOpened(!menuOpened)}>
        <div className="indicator">
          <AiOutlineHeart size={30} className="icon" />
          <span>{favorites.length}</span>
        </div>
        {menuOpened && "Favorites"}
      </h3>
      {menuOpened && (
        <ul className="fav-list">
          {favorites.map((fav) => (
            <FavCard fav={fav} />
          ))}
        </ul>
      )}
    </div>
  );
};
