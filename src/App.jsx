// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
<<<<<<< HEAD
import News from './pages/News';
import Blog from './pages/Blog';


const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow pt-16"> {/* Add top padding to avoid overlap with fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
            
            
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
=======
import MarineMonitoring from './pages/MarineMonitoring';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marine-monitoring" element={<MarineMonitoring />} />
      </Routes>
    </Router>
>>>>>>> b1b6330b58edb16e5283ab98b2f7c490bc24a2cc
  );
};

export default App;