import pokeball_1 from "../assets/pokeball.png";
import pokeball_2 from "../assets/pokeball2.png";

const Background = () => {
  return (
    <div className="background">
      <img src={pokeball_1} alt="pokeball" className="pokeball pokeball1" />
      <img src={pokeball_2} alt="pokeball" className="pokeball pokeball2" />
      <img src={pokeball_1} alt="pokeball" className="pokeball pokeball3" />
      <img src={pokeball_2} alt="pokeball" className="pokeball pokeball4" />
      <img src={pokeball_1} alt="pokeball" className="pokeball pokeball5" />
      <img src={pokeball_2} alt="pokeball" className="pokeball pokeball6" />
    </div>
  );
};

export default Background;
