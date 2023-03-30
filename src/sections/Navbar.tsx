import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const NavigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball-icon" />
      </div>
      <div className="data">
        {NavigationRoutes.map(({ name, route }, index) => {
          return (
            <Link to={route} key={index}>
              <li>{name}</li>
            </Link>
          );
        })}
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
