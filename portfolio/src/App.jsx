import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About />
      <Products />
    </div>
  );
}

export default App;
