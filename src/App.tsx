import Background from "./components/Background";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";
import "./scss/index.scss";

const App = () => {
  return (
    <div className="main-container">
      <Background />
      <div className="app">
        <Navbar />
        <Wrapper />
        <Footer />
      </div>
    </div>
  );
};

export default App;
