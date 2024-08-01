import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`relative z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-blue-800 shadow-md sticky top-0 left-0 right-0' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Brand Logo */}
        <a href="/" className="text-white text-2xl font-bold flex items-center">
          <span className="mr-2">AquaSustain</span>
        </a>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex lg:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="text-white hover:text-blue-200 transition-transform transform hover:scale-105">
            Explore
          </a>
          <a href="/about" className="text-white hover:text-blue-200 transition-transform transform hover:scale-105">
            Our Mission
          </a>
          <a href="/contact" className="text-white hover:text-blue-200 transition-transform transform hover:scale-105">
            Connect
          </a>
          <a href="/login" className="text-white hover:text-blue-200 transition-transform transform hover:scale-105">
            Log In
          </a>
          <a href="/signup" className="text-white hover:text-blue-200 transition-transform transform hover:scale-105">
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
