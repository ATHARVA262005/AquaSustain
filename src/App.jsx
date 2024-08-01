// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MarineMonitoring from './pages/MarineMonitoring';
import VolunteerPrograms from './pages/VolunteerPrograms';
import Donate from './pages/Donate';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/marine-monitoring" element={<MarineMonitoring />} />
        <Route path="/volunteer-programs" element={<VolunteerPrograms />} />
      </Routes>
    </Router>
  );
};

export default App;
