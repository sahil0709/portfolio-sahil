import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Facts from './components/Facts';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navigation/>
      <Hero />
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Projects />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer/>
    </>
  );
}

export default App;