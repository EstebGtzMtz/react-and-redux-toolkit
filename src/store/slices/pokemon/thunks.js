import { getPokemonsFromAPI } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./PokemonSlice";

export const getPokemons = ( page = 0 ) => {
  return async ( dispatch, getState) => {
    dispatch(startLoadingPokemon());

    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`)
    // const {results} = await resp.json();
    const results = await getPokemonsFromAPI(page);
    console.log(results)
    // TODO: Get all pokemons
    dispatch(setPokemons({pokemons: results, page: page + 1 }));
  }
}