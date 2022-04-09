import './App.css';
import Home from './components/Home/Home.js';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import SlideShow from './components/SlideShow/SlideShow.js';
import Consult from './components/Consult/Consult.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slideshow" element={<SlideShow />} />
        <Route path="/consult" element={<Consult />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
