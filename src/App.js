import './App.css';
import Landing from './components/Landing';
import React from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Goodbye from './components/Goodbye';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {

  return (

    <div className='app'>
      <Navbar />
      <section id="inicio">
        <Landing />
      </section >
      <section id="sobremi">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <section id="goodbye">
        <Goodbye />
      </section>
    <footer>
      <Footer/>
    </footer>
    </div>

  );
}

export default App;
