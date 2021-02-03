
import './App.css';
import React, {useState } from 'react';
import About from './components/About';

function App() {
  const [position, setPosition] = useState({});
  
  const positionInfo = (e) => {
    console.log(e.clientX, e.clientY)
  }
  return (
    <>
      <About positionInfo={positionInfo} />
    </>
  );
}

export default App;
