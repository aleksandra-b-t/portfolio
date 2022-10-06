import './App.css';
import About from './components/about/About';
//import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Products from './components/products/Products';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar className="navBar" />
      <Intro className="intro"/>
      <About className="about"/>
      <Products className="products"/>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
