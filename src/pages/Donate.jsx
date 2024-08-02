import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Donate() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700 pt-16"> {/* Adjusted padding-top for navbar height */}
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-6 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2 text-[#0A8EA8] uppercase py-5">Support Our Cause</h1>
            <p className="text-[#04373A] mb-4">
              Your generous donations help us protect marine life and promote ocean conservation.
            </p>
            <p className="text-[#04373A] mb-4">
              With your support, we can continue our efforts in marine conservation and education. Every contribution, no matter how small, makes a big difference.
            </p>
            <div className="text-[#04373A]">
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
                <label className="block text-[#04373A] text-sm font-bold mb-2" htmlFor="amount">
                  Donation Amount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#0A8EA8]"
                  id="amount"
                  type="number"
                  placeholder="Amount in USD"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#04373A] text-sm font-bold mb-2" htmlFor="message">
                  Message (Optional)
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#0A8EA8]"
                  id="message"
                  placeholder="Your message"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#17C9F1] hover:bg-[#0A8EA8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                  type="submit"
                >
                  Donate
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

export default Donate;
