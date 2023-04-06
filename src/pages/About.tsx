import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/self.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="profile">
      <img src={avatarImage} alt="Pranjal Shikhar" className="profile-image" />
      <h1 className="profile-text">Hye, I am Pranjal Shikhar ⚡</h1>
      <h2 className="profile-text">The creator of this awesome pokédex.</h2>
      <div className="profile-links">
        <a href="https://www.github.com/pranjalshikhar">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pranjalshikhar">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Wrapper(About);
