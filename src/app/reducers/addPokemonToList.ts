import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonStatsType, pokemonTypeInterface } from "../../utils/types";
export const addPokemonToList = createAsyncThunk(
  "pokemon/addPokemon",
  async (
    pokemon: {
      id: number;
      name: string;
      types: pokemonTypeInterface[] | string[];
      stats?: pokemonStatsType[];
    },
    { getState, dispatch }
  ) => {
    try {
    } catch (error) {}
  }
);
