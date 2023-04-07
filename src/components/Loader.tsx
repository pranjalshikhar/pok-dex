import React from "react";
import pokeballLoader from "../assets/pokeball-loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={pokeballLoader} alt="" />
    </div>
  );
};

export default Loader;
