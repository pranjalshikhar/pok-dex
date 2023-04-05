import { getPokemonData } from "./../reducers/getPokemonsData";
import { getInitialPokemonData } from "./../reducers/getInitialPokemonData";
import { createSlice } from "@reduxjs/toolkit";
import { PokemontypeInitialState } from "../../utils/types";

const initialState: PokemontypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload;
    });
  },
});

export const {} = PokemonSlice.actions;
