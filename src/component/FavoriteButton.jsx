import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

// eslint-disable-next-line react/prop-types
export default function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.Favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
      className={isFavorite ? "text-[red]" : ""}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}
