import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { useEffect, useMemo } from "react";

const Navbar = () => {
  const NavigationRoutes = useMemo(
    () => [
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
        name: "My List",
        route: "/list",
      },
      {
        name: "About",
        route: "/about",
      },
    ],
    []
  );

  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const index = NavigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route)
    );
    ul(index);
  }, [location.pathname, NavigationRoutes]);

  const ul = (index: number) => () => {
    var underlines = document.querySelectorAll<HTMLElement>(".underline");
    for (var i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
    }
  };

  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball-icon" />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          {NavigationRoutes.map(({ name, route }, index) => {
            return (
              <Link
                to={route}
                key={index}
                // onClick={(e) => dispatch(resetRandomPokemons())}
              >
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
