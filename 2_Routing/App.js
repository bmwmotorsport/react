import './App.css';
import Ser from './Service';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>


      {/* <Home/>
      <Ser/>
      <About/>
      <Contact/>
      <Blog/> */}

    </div>
  );
}

export default App;
