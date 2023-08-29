import "./styles.css";
import "./mediaquries.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./about";
import Skill from "./skill";
import Projects1 from "./projects1";
import Projects2 from "./project2";
import Contact from "./contact";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Projects1/>
      <Projects2/>
      <Contact/>
    </>
  );
}

export default App;
