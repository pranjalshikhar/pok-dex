import React from "react";
import { pokemonTypeInterface, userPokemonTypes } from "../utils/types";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { useAppDispatch } from "../app/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCompare } from "../app/slices/PokemonSlice";
import { setToasts } from "../app/slices/AppSlice";

const PokemonCardGrid = ({ pokemons }: { pokemons: userPokemonTypes[] }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons.map((data: userPokemonTypes) => {
            return (
              <div className="pokemon-card" key={data.id}>
                <div className="pokemon-card-list">
                  {location.pathname.includes("/pokemon") ||
                  location.pathname.includes("/search") ? (
                    <FaPlus className="plus" />
                  ) : (
                    <FaTrash className="trash" />
                  )}
                </div>
                <div className="pokemon-card-compare">
                  <IoGitCompare
                    onClick={() => {
                      dispatch(addToCompare(data));
                      dispatch(
                        setToasts(`${data.name} added to the compare queue`)
                      );
                    }}
                  />
                </div>
                <h3 className="pokemon-card-title">{data.name}</h3>
                <img
                  src={data.image}
                  alt={data.name}
                  className="pokemon-card-image"
                  loading="lazy"
                  onClick={() => navigate(`/pokemon/${data.id}`)}
                />
                <div className="pokemon-card-types">
                  {data.types.map(
                    (type: pokemonTypeInterface, index: number) => {
                      const keys = Object.keys(type);
                      // console.log({ keys });
                      return (
                        <div className="pokemon-card-types-type" key={index}>
                          <img
                            src={type[keys[0]].image}
                            alt="Pokemon Type"
                            className="pokemon-card-types-type-image"
                            loading="lazy"
                          />
                          <h6 className="pokemon-card-types-type-text">
                            {keys[0]}
                          </h6>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PokemonCardGrid;
