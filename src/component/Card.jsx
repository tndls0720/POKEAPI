import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border-bottom: 5px solid black;
  border-right: 5px solid black;

  img {
    width: 120px;
  }
`;

// eslint-disable-next-line react/display-name, react/prop-types
export const Card = memo(({ pokemon }) => {
  console.log("card", pokemon.id);
  const [isImageLoading, setImageLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
      {isImageLoading ? (
        <div className="w-[120px] h-[102px] leading-[120px] text-center">
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => setImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
      />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
