import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PokeNameChip from '../Common/PokeNameChip';
import PokeMarkChip from '../Common/PokeMarkChip';
import {
  PokemonDetailType,
  fetchPokemonsDetail,
} from '../Service/PokemonService';
import { useEffect, useState } from 'react';
import { PokeImageSkeleton } from '../Common/PokeImageSkeleton';

interface PokeCardProps {
  name: string;
}

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
  // TODO: | null 은 무슨 의미 일까..?
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPokemonsDetail(props.name);
      setPokemon(detail);
    })();
  }, [props.name]);

  // NOTE: pokemon 정보의 초기값이 null 이기때문에, 정보를 제대로 가져오기 전까지를 방지하기 위해서,, null일때 화면에 어떻게 표시해줄지 처리
  if (!pokemon) {
  return (
    <Item color={'#fff'}>
      <Header>
        <PokeNameChip name={'포켓몬'} color={'#ffca09'} id={0} />
      </Header>
      <Body>
        <PokeImageSkeleton />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
  }

  return (
    <Item onClick={handleClick} color={pokemon.color}>
      <Header>
        <PokeNameChip
          name={pokemon.koreanName}
          color={pokemon.color}
          id={pokemon.id}
        />
      </Header>
      <Body>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li<{ color: string }>`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  padding: 6px;
  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${(props) => props.color};
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

export default PokeCard;
