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
import "./index.css"
import Blogs from './pages/Blogs';
import News from './pages/News';
import VolunteerPrograms from './pages/VolunteerPrograms';
import Donate from './pages/Donate';
import StartYourApplication from './pages/StartYourApplication';
import ConservationProjects from './pages/ConservationProjects';
import EducationalResources from './pages/EducationalResources';
import Error404 from './pages/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/marine-monitoring" element={<MarineMonitoring />} />
        <Route path="/conservation-projects" element={<ConservationProjects />} />
        <Route path="/educational-resources" element={<EducationalResources />} />
        <Route path="/volunteer-programs" element={<VolunteerPrograms />} />
        <Route path="/news" element={<News />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/start-your-application" element={<StartYourApplication />} />
        <Route path="*" element={<Error404 />} />
        
      </Routes>
    </Router>
  );
};

export default App;
