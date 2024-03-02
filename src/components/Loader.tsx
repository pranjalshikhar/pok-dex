import pokeballLoader from "../assets/pokeball-loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={pokeballLoader} alt="loader" />
    </div>
  );
};

export default Loader;
