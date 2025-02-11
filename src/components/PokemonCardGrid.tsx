import React from "react";
import { pokemonTypeInterface, userPokemonsType } from "../utils/types";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { useAppDispatch } from "../app/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCompare } from "../app/slices/PokemonSlice";
import { setToast } from "../app/slices/AppSlice";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
import { removePokemonFromUserList } from "../app/reducers/removePokemonFromList";

const PokemonCardGrid = ({ pokemons }: { pokemons: userPokemonsType[] }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons.map((data: userPokemonsType) => {
            return (
              <div className="pokemon-card gradient" key={data.id}>
                <div className="pokemon-card-list">
                  {location.pathname.includes("/pokemon") ||
                  location.pathname.includes("/search") ? (
                    <FaPlus
                      className="plus"
                      onClick={() => dispatch(addPokemonToList(data))}
                    />
                  ) : (
                    <FaTrash
                      className="trash"
                      onClick={async () => {
                        await dispatch(
                          removePokemonFromUserList({ id: data.firebaseId! })
                        );
                        dispatch(setToast(`${data.name} removed from list`));
                      }}
                    />
                  )}
                </div>
                <div className="pokemon-card-compare">
                  <IoGitCompare
                    onClick={() => {
                      dispatch(addToCompare(data));
                      dispatch(
                        setToast(`${data.name} added to the compare queue`)
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
