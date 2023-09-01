import { getPokemonsFromAPI } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./PokemonSlice";

export const getPokemons = ( page = 0 ) => {
  return async (dispatch) => {
    dispatch(startLoadingPokemon());
    const results = await getPokemonsFromAPI(page);
    dispatch(setPokemons({pokemons: results, page: page + 1 }));
  }
}