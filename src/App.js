import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";

function App() {
  return (
    <>
    <Header />
     <Home />
      <About />
      <Experience />
      <Skill />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
