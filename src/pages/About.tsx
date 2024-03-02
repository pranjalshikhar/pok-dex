import Wrapper from "../sections/Wrapper";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="profile">
      <img
        src={
          "https://pranjalshikhar.vercel.app/_next/static/media/Avatar-black.dd6a4407.svg"
        }
        alt="Pranjal Shikhar"
        className="profile-image"
      />
      <h1 className="profile-text">hey there, myself pranjal shikhar 〽️</h1>
      <h2 className="profile-text">creator of this pokédex app.</h2>
      <div className="profile-links">
        <a href="https://www.github.com/pranjalshikhar">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pranjalshikhar">
          <FaLinkedin />
        </a>
        <a href="https://pranjalshikhar.vercel.app">
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default Wrapper(About);
