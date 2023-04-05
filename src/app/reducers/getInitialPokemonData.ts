import { pokemonRoute } from "./../../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      const { data } = await axios.get(pokemonRoute);
      // console.log(data);
      return data.results;
    } catch (err) {
      console.error(err);
    }
  }
);