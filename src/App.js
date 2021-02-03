
import './App.css';
import React, {useState } from 'react';
import About from './components/About';

function App() {
  const [position, setPosition] = useState({});
  
  const positionInfo = (e) => {
    var d = document.getElementById('element-1');
    d.style.left = e.clientY + 'px';
    d.style.top = e.clientX + 'px';

    // var d = document.getElementById('element-1');
    // d.style.position = "absolute";
    // d.style.left = x_pos+'px';
    // d.style.top = y_pos+'px';
    console.log(d.style)
  }
  return (
    <>
      <About positionInfo={positionInfo} />
    </>
  );
}

export default App;
