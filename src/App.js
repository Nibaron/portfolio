import "./styles.css";
import "./mediaquries.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./about";
import Skill from "./skill";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
    </>
  );
}

export default App;
