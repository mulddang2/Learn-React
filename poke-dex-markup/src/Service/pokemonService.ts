import axios from 'axios';

const remote = axios.create();

export interface PokemonListResponseType {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export const fetchPokemons = async (nextUrl?:string) => {
  const requesttUrl = nextUrl ? nextUrl : 'https://pokeapi.co/api/v2/pokemon';

  const response = await remote.get<PokemonListResponseType>(requesttUrl);

  return response.data;
};

interface PokemonDetailResponseType {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };

      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

interface PokemonSpeciesResponseType {
  color: {
    name: string
  },
  names: {
    name: string,
    language: {
      name: string,
    }
  }[]
}

export interface PokemonDetailType {
  id: number;
  weight: number;
  height: number;
  name: string;
  koreanName: string,
  color: string,
  types: string[];
  images: {
    frontDefault: string;
    dreamWorldFront: string;
    officialArtWork: string;
  };
  baseStats: {
    name: string;
    value: number;
  }[];
}

export const fetchPokemonsDetail = async (
  name: string
): Promise<PokemonDetailType> => {
  const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const pokemonSpecieslUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

  const response = await remote.get<PokemonDetailResponseType>(
    pokemonDetailUrl
  );
    // NOTE: 포켓몬의 한글이름 불러오는 API, 제네릭으로 타입정의
  const speciesResponse = await remote.get<PokemonSpeciesResponseType>(pokemonSpecieslUrl) 
  const species = speciesResponse.data;
  const detail = response.data;


  const koreanName = species.names.find(item => {
    return item.language.name === 'ko'
  })?.name ?? detail.name

  return {
    id: detail.id,
    name: detail.name,
    koreanName: koreanName,
    color: species.color.name,
    height: detail.height / 10, // 미터 단위
    weight: detail.weight / 10, // 킬로그램 단위
    types: detail.types.map((item) => item.type.name),
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtWork: detail.sprites.other['official-artwork'].front_default,
    },
    baseStats: detail.stats.map((item) => {
      return {
        name: item.stat.name,
        value: item.base_stat,
      };
    }),
  };
};
