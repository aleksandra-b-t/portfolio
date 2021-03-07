import './App.css';
import React, {useState } from 'react';
import Home from './components/Home'
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [position, setPosition] = useState({});
  return (
    <>
      {/* <Home />
      <About /> */}
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
