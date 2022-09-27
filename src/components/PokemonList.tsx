import React from 'react';
import { UniquePokemon } from '../interface';
import '../App.css';

interface PokemonListProps {
    pokemon: UniquePokemon;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
    const { name, id } = pokemon;
    const image = pokemon.sprites.front_default;
    const pokemonType = pokemon.types[0].type.name;
  return (
    <div className="PokemonCard">
      <h3 className="PokemonName">{name}</h3>
      <p className="PokemonId"># {id}</p>
      <img className="PokemonIcon" src={image} alt={name} />
      <p className="PokemonType">Type: {pokemonType} </p>
    </div>
  )
}

export default PokemonList
