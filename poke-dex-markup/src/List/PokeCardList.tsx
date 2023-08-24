import { useState, useEffect } from 'react';
import {
  PokemonListResponseType,
  fetchPokemons,
} from '../Service/PokemonService';
import PokeCard from './PokeCard';
import styled from '@emotion/styled';

const PokeCardList = () => {
  // NOTE: 가져온 정보의 상태를 저장하기 위해서, useState 사용
  const [pokemons, setPokemons] = useState<PokemonListResponseType>({
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
      {pokemons.results.map((pokemon, index) => (
        <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0 0 32px 0;
  padding: 0;
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default PokeCardList;
