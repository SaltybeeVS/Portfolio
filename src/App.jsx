import StarSystem from "./components/Starts/starSystem.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Skills from "./components/Skills/Skills.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";


function App() {
  return (
    <>
      <StarSystem />
      <Header />
      <Hero />
      <Projects/>
      <AboutMe/>
      <Skills/>
      <ContactMe/>
      <Footer />
    </>
  )
}

export default App
