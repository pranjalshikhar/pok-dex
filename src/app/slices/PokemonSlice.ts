import { getPokemonData } from "./../reducers/getPokemonsData";
import { getInitialPokemonData } from "./../reducers/getInitialPokemonData";
import { createSlice } from "@reduxjs/toolkit";
import {
  PokemontypeInitialState,
  generatedPokemonType,
} from "../../utils/types";
import { getUserPokemons } from "../reducers/getUserPokemons";

const initialState: PokemontypeInitialState = {
  allPokemon: undefined,
  randomPokemons: undefined,
  compareQueue: [],
  userPokemons: [],
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      if (index === -1) {
        if (state.compareQueue.length === 2) {
          state.compareQueue.pop();
        }
        state.compareQueue.unshift(action.payload);
      }
    },
    removeFromCompare: (state, action) => {
      const index = state.compareQueue.findIndex(
        (pokemon: generatedPokemonType) => pokemon.id === action.payload.id
      );
      const queue = [...state.compareQueue];
      queue.splice(index, 1);
      state.compareQueue = queue;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload;
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload;
    });
    builder.addCase(getUserPokemons.fulfilled, (state, action) => {
      state.userPokemons = action.payload!;
    });
  },
});

export const { addToCompare, removeFromCompare } = PokemonSlice.actions;
