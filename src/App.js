import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Menu from './components/home/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Videos from './components/videos/Videos';

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
          <Route path='/videos' element={<Videos />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
