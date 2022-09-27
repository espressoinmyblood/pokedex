import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonCollection from './components/PokemonCollection';
import { UniquePokemon } from './interface';

interface AllPokemons {
  name: string
  url: string
}

const App: React.FC = () => {

  const [pokemons, setPokemons] = useState<UniquePokemon[]>([])

  const [urlToFetch, setUrlToFetch] = useState("https://pokeapi.co/api/v2/pokemon?limit=16&offset=00");

  const getPokemonCards = async () => {
    const listOfPokemons = await axios.get(urlToFetch);

    setUrlToFetch(listOfPokemons.data.next);

    const allResults = await Promise.all(listOfPokemons.data.results.map( async (pokemon: AllPokemons) => {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(values => values.json()).then(result => result)
    }))
    setPokemons(prevState => [...prevState, ...allResults ])
  }
  useEffect(() => {
    getPokemonCards()
  }, [])

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="PokemonCardContainer">
        <PokemonCollection pokemons={pokemons} />
        <button className="Button" onClick={getPokemonCards}>Load More</button>
      </div>
    </div>
  );
}

export default App;
