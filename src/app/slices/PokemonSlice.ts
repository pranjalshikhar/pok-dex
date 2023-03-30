import { createSlice } from "@reduxjs/toolkit";
import { PokemontypeInitialState } from "../../utils/types";

const initialState: PokemontypeInitialState = {};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
});

export const {} = PokemonSlice.actions;
