import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectpokemonByRegExp } from "../RTK/selector";
import { Card } from "../component/Card";

useSearchParams;
export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param); // 정규직 생성, 검색어 리스트 가져오기

  const pokemon = useSelector(selectpokemonByRegExp(reg));
  console.log(pokemon);

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
