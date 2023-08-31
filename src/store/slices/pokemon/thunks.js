import { setPokemons, startLoadingPokemon } from "./PokemonSlice";

export const getPokemons = ( page = 0 ) => {
  return async ( dispatch, getState) => {
    dispatch(startLoadingPokemon());
    // TODO: Get all pokemons
    // dispatch(setPokemons());
  }
}