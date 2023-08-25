import axios from 'axios';

const remote = axios.create();

export interface PokemonListResponseType {
  count: number;
  next: string;
  // NOTE: results 는 배열로 오니까, 뒤에 빈 배열 표시 해줘야함
  results: {
    name: string;
    url: string;
  }[];
}

// NOTE: 포켓몬 리스트에 대한 정보 호출을 위해서 복사해옴
// https://pokeapi.co/api/v2/pokemon

// NOTE: 포켓몬의 리스트를 가져오겠다.
export const fetchPokemons = async () => {
  const defaultUrl = 'https://pokeapi.co/api/v2/pokemon';

  // NOTE: 응답값을 response로 받는다.
  // NOTE: get 뒤에 제네릭으로 해당 타입을 넘겨주면, response에 해당 타입으로 데이터가 넘어오게 됨
  const response = await remote.get<PokemonListResponseType>(defaultUrl);

  return response.data;
};

interface PokemonDetailResponseType {
  // NOTE: 사용할 부분만 적어준다.
  id: number;
  weight: number;
  height: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  // 사용할 이미지에 대한 부분
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
      name: string
    }
  }[]
}


// PokemonDetailResponseType 위에 있는 데이터가 깊어서, 풀어서 정의해주도록 함.
export interface PokemonDetailType {
  id: number;
  weight: number;
  height: number;
  name: string;
  koreanName: string;
  color: string;
  types: string[];
  images: {
    frontDefault: string;
    dreamWorldFront: string;
    officialArtWorkFront: string;
  };
  baseStats: {
    name: string;
    value: number;
  }[];
}

// NOTE: 풀어쓴 PokemonDetailType를 Promise 형태로 반환함.
export const fetchPokemonsDetail = async (
  name: string
): Promise<PokemonDetailType> => {
  const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
  const response = await remote.get<PokemonDetailResponseType>(
    pokemonDetailUrl
  );
  const speciesResponse = await remote.get<PokemonSpeciesResponseType>(pokemonSpeciesUrl);
  console.log(speciesResponse.data);
  const detail = response.data;
  const species = speciesResponse.data

  // NOTE: 한글이름으로 변경
  const koreanName = species.names.find(item => item.language.name === 'ko')?.name ?? detail.name

  return {
    id: detail.id,
    name: detail.name,
    color: species.color.name,
    koreanName: koreanName,
    height: detail.height / 10, // 미터 단위
    weight: detail.weight / 10, // 킬로그램 단위

    types: detail.types.map((item) => item.type.name), // NOTE: name만 필요하니까, map으로 뽑음
    images: {
      frontDefault: detail.sprites.front_default,
      dreamWorldFront: detail.sprites.other.dream_world.front_default,
      officialArtWorkFront:
        detail.sprites.other['official-artwork'].front_default,
    },
    baseStats: detail.stats.map((item) => {
      return {
        name: item.stat.name,
        value: item.base_stat,
      };
    }),
  };
};
