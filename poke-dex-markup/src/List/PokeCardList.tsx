import { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import styled from '@emotion/styled';
import {
  PokemonListResponseType,
  fetchPokemons,
} from '../Service/pokemonService';

const PokeCardList = () => {
  // NOTE: 두번째 매개변수에 아무것도 안넣으면, 마운트 됐을 때를 말함
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
    <>
      <List>
        {pokemons.results.map((pokemon, idx) => (
          <PokeCard color={''} id={pokemons.count} key={`${pokemon.name}_${idx}`} name={pokemon.name} />
        ))}
      </List>
    </>
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
