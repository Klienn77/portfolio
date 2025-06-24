import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Experience from './components/experiencia/Experiencia';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Layout>
      <div className="App">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;