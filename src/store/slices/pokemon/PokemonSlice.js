import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nextPage: 0,
  pokemons:[],
  isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemon: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.nextPage = action.payload.page;
      state.pokemons = action.payload.pokemons;
    }
  },
})

export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;