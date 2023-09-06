import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PokeNameChip from '../Common/PokeNameChip';
import PokeMarkChip from '../Common/PokeMarkChip';
import {
  PokemonDetailType,
  fetchPokemonsDetail,
} from '../Service/pokemonService';
import { useEffect, useState } from 'react';
import { PokeImageSkeleton } from '../Common/PokeImageSkeleton';

interface PokeCardProps {
  color: string;
  id: number;
  name: string;
}

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
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

  if (!pokemon) {
    return (
      <Container color={'#fff'} onClick={handleClick}>
        <Header>
          <PokeNameChip name={'포켓몬'} numberColor={'#ffca09'} id={0} />
        </Header>
        <Body>
          <PokeImageSkeleton />
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Container>
    );
  }

  return (
    <Container color={pokemon.color} onClick={handleClick}>
      <Header>
        <PokeNameChip
          name={pokemon.koreanName}
          numberColor={pokemon.color}
          id={pokemon.id}
        />
      </Header>
      <Body>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  );
};

const Container = styled.li<{ color: string }>`
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
