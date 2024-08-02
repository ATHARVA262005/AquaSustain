import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Adjust according to version
const logo = require('../assets/logo.png');

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false); // Close dropdown when menu opens
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#04373A] shadow-md sticky top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-xl font-bold">
            <img src={logo}width={100}  alt="logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:bg-[#0A8EA8] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/about" className="text-white hover:bg-[#0A8EA8] hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <div className="relative">
                <button
                  onClick={handleDropdownClick}
                  className="text-white hover:bg-[#0A8EA8] hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Marine Conservation
                  <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md">
                    <a href="/marine-monitoring" className="block px-4 py-2 text-sm hover:bg-[#0A8EA8] hover:text-white">Marine Monitoring</a>
                    <a href="/conservation-projects" className="block px-4 py-2 text-sm hover:bg-[#0A8EA8] hover:text-white">Conservation Projects</a>
                    <a href="/educational-resources" className="block px-4 py-2 text-sm hover:bg-[#0A8EA8] hover:text-white">Educational Resources</a>
                    <a href="/volunteer-programs" className="block px-4 py-2 text-sm hover:bg-[#0A8EA8] hover:text-white">Volunteer Programs</a>
                  </div>
                )}
              </div>
              <a href="/news" className="text-white hover:bg-[#0A8EA8] hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>
              <a href="/blogs" className="text-white hover:bg-[#0A8EA8] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</a>
              <a href="/contact" className="text-white hover:bg-[#0A8EA8] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="/donate" className="text-white hover:bg-[#0A8EA8] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Donate</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMenuClick}
              type="button"
              className="bg-[#0A8EA8] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#17C9F1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#04373A] focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white hover:bg-[#0A8EA8] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/about" className="text-white hover:bg-[#0A8EA8] hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <button
              onClick={handleDropdownClick}
              className="text-white hover:bg-[#0A8EA8] hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center w-full"
            >
              Marine Conservation
              <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </button>
            {isDropdownOpen && (
              <div className="bg-white text-gray-800 shadow-lg rounded-md">
                <a href="/marine-monitoring" className="block px-4 py-2 text-sm hover:bg-[#0A8EA8] hover:text-white">Marine Monitoring</a>
                <a href="/conservation-projects" className="block px-4 py-2 text-sm hover:bg-[#0A8EA8] hover:text-white">Conservation Projects</a>
                <a href="/educational-resources" className="block px-4 py-2 text-sm hover:bg-[#0A8EA8] hover:text-white">Educational Resources</a>
                <a href="/volunteer-programs" className="block px-4 py-2 text-sm hover:bg-[#0A8EA8] hover:text-white">Volunteer Programs</a>
              </div>
            )}
            <a href="/news" className="text-white hover:bg-[#0A8EA8] hover:text-white block px-3 py-2 rounded-md text-base font-medium">News</a>
            <a href="/blogs" className="text-white hover:bg-[#0A8EA8] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</a>
            <a href="/contact" className="text-white hover:bg-[#0A8EA8] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="/donate" className="text-white hover:bg-[#0A8EA8] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Donate</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
