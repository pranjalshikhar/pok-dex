// @ts-nocheck

import { pokemonTypes } from "./../../utils/pokemonTypes";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { generatedPokemonType, genericPokemonType } from "../../utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonData = createAsyncThunk(
  "pokemon/randomPokemon",
  async (pokemons: genericPokemonType[]) => {
    try {
      // console.log({ pokemons }, "from reducer");
      const pokemonsData: generatedPokemonType[] = [];
      // console.log({ defaultImages, images });
      for await (const pokemon of pokemons) {
        // console.log(pokemon);
        const {
          data,
        }: { data: { id: number; types: { type: genericPokemonType }[] } } =
          await axios.get(pokemon.url);
        const types = data.types.map(
          ({ type: { name } }: { type: { name: string } }) => ({
            [name]: pokemonTypes[name],
          })
        );
        // console.log({ data });

        let image: string = images[data.id];
        if (!image) {
          image = defaultImages[data.id];
        }
        if (image) {
          pokemonsData.push({
            name: pokemon.name,
            id: data.id,
            image,
            types,
          });
        }
      }
      return pokemonsData;
    } catch (err) {
      console.error(err);
    }
  }
);
