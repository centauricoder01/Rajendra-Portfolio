import About from "./Components/Main_Body/About/About";
import Contact from "./Components/Main_Body/Contact/Contact";
import Experience from "./Components/Main_Body/Experience/Experience";
import Github from "./Components/Main_Body/Github/Github";
import Navbar from "./Components/Main_Body/Nav/Navbar";
import { Banner } from "./Components/Main_Body/Navbar/Home";
import Project from "./Components/Main_Body/Projects/Project";
import Skills from "./Components/Main_Body/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Github />
      <Contact />
      
    </>
  );
}

export default App;
