export type UniquePokemon = {
    id: number
    name: string
    sprites: {
      front_default: string
    }
    types: PokemonType[]
};

export type PokemonType = {
  slot: number;
  type: {
    [key: string]: string;
  }
}