
import './App.css';
import React, {useState } from 'react';
import About from './components/About';

function App() {
  const [position, setPosition] = useState({});
  
  const positionInfo = (e) => {
    e.preventDefault()
    var c = document.getElementById(`${e.target.parentElement.id}`);
    var element = document.getElementById(`${e.target.id}`);
    var positionY = e.clientY - (c.offsetHeight / 2);
    var positionX = e.clientX - (c.offsetWidth / 2);
   
    var translateValue = "translate3d(" + positionX + "px," + positionY + "px, 0)";
    element.style.transform = translateValue;
  }
  return (
    <>
      <About positionInfo={positionInfo} />
    </>
  );
}

export default App;
