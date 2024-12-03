import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  console.log(pokemonId);
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div
      className="bg-white flex flex-col justify-center items-center border px-[60px] py-[30px] rounded-[10px]
    border-b-[8px] border-r-[5px] border-black"
    >
      <div className="text-[28px] mb-[10px]">
        {pokemon?.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon?.description}
      </div>
      <FlipCard front={pokemon?.front} back={pokemon?.back} />
    </div>
  );
}
