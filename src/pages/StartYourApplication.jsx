import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StartYourApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#04373A] mb-4">Start Your Application</h1>
            <p className="text-base md:text-lg text-gray-600">
              Fill out the form below to apply for one of our marine conservation volunteer programs.
            </p>
          </header>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg p-6 sm:p-8 md:p-10 mx-auto max-w-md md:max-w-lg lg:max-w-xl">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8EA8]"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8EA8]"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8EA8]"
                />
              </div>

              {/* Program */}
              <div>
                <label htmlFor="program" className="block text-gray-800 font-medium mb-2">Select Program</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8EA8]"
                >
                  <option value="" disabled>Select a program</option>
                  <option value="beachCleanup">Beach Cleanup Crew</option>
                  <option value="wildlifeSurveys">Marine Wildlife Surveys</option>
                  <option value="educationalOutreach">Educational Outreach</option>
                  <option value="virtualTasks">Virtual Conservation Tasks</option>
                </select>
              </div>

              {/* Resume */}
              <div>
                <label htmlFor="resume" className="block text-gray-800 font-medium mb-2">Upload Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A8EA8]"
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-gray-800 font-medium mb-2">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8EA8]"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#0A8EA8] hover:bg-[#017a8a] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StartYourApplication;
