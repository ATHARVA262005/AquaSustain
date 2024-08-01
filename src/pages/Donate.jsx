import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import Navbar from '../components/Navbar1';
import Footer from '../components/Footer1';

function Donate() {
  
  return (
    <>
      <Navbar />
        <div>
         
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-6 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Support Our Cause</h1>
            <p className="text-gray-600 mb-4">
              Your generous donations help us protect marine life and promote ocean conservation.
            </p>
            <p className="text-gray-600 mb-4">
              With your support, we can continue our efforts in marine conservation and education. Every contribution, no matter how small, makes a big difference.
            </p>
            <div className="text-gray-700">
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <p className="mb-4">123 Marine Lane, Ocean City, CA 90210</p>
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p className="mb-4">Phone: (123) 456-7890</p>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="mb-4">donate@marineworld.com</p>
            </div>
          </div>
          <div>
            <form action="https://example.com/submit-donation" method="post">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                  Donation Amount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  type="number"
                  placeholder="Amount in USD"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message (Optional)
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                  type="submit"
                >
                  Donate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

        </div>

      <Footer />
    </>
  );
}

export default Donate;
