import {Link} from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";

const POKEMON_IMAGE_TYPE = {
  OFFICIAL_ARTWORK: 'officialArtworkFront',
  DREAM_WORLD: 'dreamWorldFront',
  FRONT_DEFAULT: 'frontDefault'
} as const

const PageHeader = () => {
  return (
    <Header>
      <Title>
        <Link to='/'>Pokémon</Link>
      </Title>
      <Select value={POKEMON_IMAGE_TYPE.DREAM_WORLD} onChange={(e) => {

      }}>
        <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK}>Official</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
      </Select>
    </Header>
  )
}

const Header = styled.nav`
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #C0C0C0;

  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #fc0;
  text-shadow: -1px 0 #3164af, 0 2px #3164af, 1px 0 #3164af, 0 -1px #3164af
`

const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
`

export default PageHeader
