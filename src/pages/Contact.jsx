import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700 pt-16"> {/* Adjusted padding-top for navbar height */}
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-6 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2 text-[#0A8EA8] uppercase py-5">Contact Us</h1>
            <p className="text-gray-700 mb-4">
              Whether you have questions, suggestions, or simply want to share your passion for the underwater world, we’re here to connect.
            </p>
            <p className="text-gray-700 mb-4">
              Your support and involvement are crucial to our mission of marine conservation and education.
            </p>
            <div className="text-gray-800">
              <h2 className="text-xl font-semibold mb-2 text-[#04373A]">Address</h2>
              <p className="mb-4">123 Marine Lane, Ocean City, CA 90210</p>
              <h2 className="text-xl font-semibold mb-2 text-[#04373A]">Contact</h2>
              <p className="mb-4">Phone: (123) 456-7890</p>
              <h2 className="text-xl font-semibold mb-2 text-[#04373A]">Email</h2>
              <p className="mb-4">contact@marineworld.com</p>
            </div>
          </div>
          <div>
            <form action="https://example.com/submit" method="post">
              <div className="mb-4">
                <label className="block text-[#04373A] text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#0A8EA8]"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#04373A] text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#0A8EA8]"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#04373A] text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#0A8EA8]"
                  id="message"
                  placeholder="Your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#17C9F1] hover:bg-[#0A8EA8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
