
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Marks from './components/Marks';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Marks />
      <Contact />
    </div>
  );
}

export default App;
