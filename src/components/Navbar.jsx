import React from 'react';
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon, KeyIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 p-4 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold flex items-center">
          <span className="mr-2">AquaSustain</span>
        </a>
        <div className="flex items-center">
          <a href="/" className="text-white mx-4 flex items-center hover:text-blue-200">
            <HomeIcon className="h-6 w-6 mr-1" />
            Home
          </a>
          <a href="/about" className="text-white mx-4 flex items-center hover:text-blue-200">
            <InformationCircleIcon className="h-6 w-6 mr-1" />
            About
          </a>
          <a href="/contact" className="text-white mx-4 flex items-center hover:text-blue-200">
            <PhoneIcon className="h-6 w-6 mr-1" />
            Contact
          </a>
          <a href="/login" className="text-white mx-4 flex items-center hover:text-blue-200">
            <KeyIcon className="h-6 w-6 mr-1" />
            Login
          </a>
          <a href="/signup" className="text-white mx-4 flex items-center hover:text-blue-200">
            <UserIcon className="h-6 w-6 mr-1" />
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

