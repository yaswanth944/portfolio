// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import './App.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
      <nav>
  <ul>
    <li>
      <Link to="/" className="nav-link">Home</Link>
    </li>
    <li>
      <Link to="/about" className="nav-link">About</Link>
    </li>
    <li>
      <Link to="/contact" className="nav-link">Contact</Link>
    </li>
  </ul>
</nav>


        <Routes> {/* Wrap your Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
