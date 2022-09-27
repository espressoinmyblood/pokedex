import React from 'react';
import { UniquePokemon } from '../interface';
import PokemonList from './PokemonList';
import '../App.css';

interface PokemonCollectionProps {
    pokemons: UniquePokemon[];
}

const PokemonCollection: React.FC<PokemonCollectionProps> = ({ pokemons }) => {
    return (
        <>
            <div className="PokemonCardWrapper">
                {pokemons.map((pokemon) => {
                    return (
                    <PokemonList
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                    )
                })}
            </div>
        </>
  )
}

export default PokemonCollection
