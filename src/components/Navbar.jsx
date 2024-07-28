// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">AquaSustain</a>
        <div>
          <a href="/" className="text-white mx-4 hover:text-blue-200">Home</a>
          <a href="/about" className="text-white mx-4 hover:text-blue-200">About</a>
          <a href="/contact" className="text-white mx-4 hover:text-blue-200">Contact</a>
          <a href="/login" className="text-white mx-4 hover:text-blue-200">Login</a>
          <a href="/signup" className="text-white mx-4 hover:text-blue-200">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
