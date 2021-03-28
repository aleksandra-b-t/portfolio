import './App.css';
import React, {useState } from 'react';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import {PersonalData, ExperienceData, EducationData, ProjectsData} from './components/Data.js'

function App() {
  const [position, setPosition] = useState({});
  return (
    <>
      <Home />
      <About PersonalData={PersonalData}/>
      <Projects ProjectsData={ProjectsData}/>
      <Education EducationData={EducationData}/>
      <Footer PersonalData={PersonalData}/>
    </>
  );
}

export default App;
