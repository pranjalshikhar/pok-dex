import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  pokemonStatsType,
  pokemonTypeInterface,
  userPokemonsType,
} from "../../utils/types";
import { RootState } from "../store";
import { setToasts } from "../slices/AppSlice";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/firebaseConfig";
import { getUserPokemons } from "./getUserPokemons";

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
      const {
        app: { userInfo },
        pokemon: { userPokemons },
      } = getState() as RootState;
      if (!userInfo?.email) {
        return dispatch(
          setToasts("Please Login in order to add Pokemon to your Collections.")
        );
      }
      const index = userPokemons.findIndex((userPokemon: userPokemonsType) => {
        return userPokemon.name === pokemon.name;
      });
      if (index === -1) {
        let types: string[] = [];
        if (!pokemon.stats) {
          pokemon.types.forEach((type: any) =>
            types.push(Object.keys(type).toString())
          );
        } else {
          types = pokemon.types as string[];
        }
        await addDoc(pokemonListRef, {
          pokemon: { id: pokemon.id, name: pokemon.name, types },
          email: userInfo.email,
        });
        await dispatch(getUserPokemons());
        return dispatch(setToasts(`${pokemon.name} added to your collection.`));
      } else {
        return dispatch(
          setToasts(`${pokemon.name} is already part of your collection.`)
        );
      }
    } catch (err) {
      console.error(err);
    }
  }
);
