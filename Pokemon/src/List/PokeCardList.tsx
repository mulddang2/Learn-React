import styled from '@emotion/styled';
import PokeCard from './PokeCard';
import { useEffect, useState } from 'react';
import {
  PokemonListReponseType,
  fetchPokemons,
} from '../Service/pokemonService';

const PokeCardList = () => {
  // NOTE: 네트워크 요청, 비동기 통신에서는 useEffect 내부에서 호출해줘야함.
  // NOTE: 받아온 데이터를 상태로 저장해야함 (useState)
  const [pokemons, setPokemons] = useState<PokemonListReponseType>({
    count: 0,
    next: '',
    results: [],
  });
  useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    })();
  }, []);

  return (
    <List>
      {pokemons.results.map((pokemon, index) => {
        return (
          <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
        );
      })}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default PokeCardList;
