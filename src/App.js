import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Gallery from './components/home/Gallery';
import Menu from './components/home/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
