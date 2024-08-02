import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoPopup from '../components/InfoPopup'; // Import the InfoPopup component

const VolunteerPrograms = () => {
  const [popup, setPopup] = useState(null);

  const openPopup = (section) => {
    setPopup(section);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-[#04373A] mb-4">Marine Life Conservation Volunteer Programs</h1>
            <p className="text-lg text-gray-600">
              Join us in making a real difference in marine conservation. Our programs offer various ways to contribute, from fieldwork to remote tasks.
            </p>
          </header>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <a 
              href="#apply"
              className="bg-[#0A8EA8] hover:bg-[#017a8a] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Apply to Volunteer
            </a>
          </div>

          {/* Diverse Opportunities Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0A8EA8] mb-6">Diverse Opportunities</h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore our wide range of programs, each designed to engage different interests and skill sets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Beach Cleanup Crew */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Beach Cleanup Crew</h3>
                  <p className="text-gray-600 mb-4">
                    Join us in cleaning up local beaches to protect marine habitats.
                  </p>
                  <button
                    onClick={() => openPopup('beachCleanup')}
                    className="text-[#0A8EA8] hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Marine Wildlife Surveys */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Marine Wildlife Surveys</h3>
                  <p className="text-gray-600 mb-4">
                    Assist in collecting data to support marine research and conservation.
                  </p>
                  <button
                    onClick={() => openPopup('wildlifeSurveys')}
                    className="text-[#0A8EA8] hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Educational Outreach */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Educational Outreach</h3>
                  <p className="text-gray-600 mb-4">
                    Raise awareness about marine conservation in the community.
                  </p>
                  <button
                    onClick={() => openPopup('educationalOutreach')}
                    className="text-[#0A8EA8] hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Virtual Conservation Tasks */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Virtual Conservation Tasks</h3>
                  <p className="text-gray-600 mb-4">
                    Contribute to conservation efforts remotely through various tasks.
                  </p>
                  <button
                    onClick={() => openPopup('virtualTasks')}
                    className="text-[#0A8EA8] hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Support and Training Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0A8EA8] mb-6">Support and Training</h2>
            <p className="text-lg text-gray-700 mb-8">
              We provide the necessary training and support to help you excel in your role.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Environmental Education Workshops */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Environmental Education Workshops</h3>
                  <p className="text-gray-600 mb-4">
                    Workshops on marine ecosystems and conservation strategies.
                  </p>
                  <button
                    onClick={() => openPopup('education')}
                    className="text-[#0A8EA8] hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Fieldwork Training */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Fieldwork Training</h3>
                  <p className="text-gray-600 mb-4">
                    Hands-on training in data collection and environmental monitoring.
                  </p>
                  <button
                    onClick={() => openPopup('fieldwork')}
                    className="text-[#0A8EA8] hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Data Collection and Analysis */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Data Collection and Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Training in data recording and analysis for research purposes.
                  </p>
                  <button
                    onClick={() => openPopup('dataCollection')}
                    className="text-[#0A8EA8] hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Community Support and Networking */}
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Community Support and Networking</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with fellow volunteers and conservationists through our network.
                  </p>
                  <button
                    onClick={() => openPopup('networking')}
                    className="text-[#0A8EA8] hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* How to Apply Section */}
          <section id="apply" className="mb-16">
            <h2 className="text-3xl font-bold text-[#0A8EA8] mb-6">How to Apply</h2>
            <p className="text-lg text-gray-700 mb-8">
              Ready to make a difference? Follow these steps to apply for our volunteer programs:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-8">
              <li>
                <span className="font-semibold">Choose a Program:</span> Review the available opportunities and select the one that best matches your interests and skills.
              </li>
              <li>
                <span className="font-semibold">Complete the Application:</span> Fill out our online application form with your details and program preferences.
              </li>
              <li>
                <span className="font-semibold">Submit Required Documents:</span> Upload any necessary documents, such as a resume or references.
              </li>
              <li>
                <span className="font-semibold">Attend an Interview:</span> Participate in a brief interview to discuss your application and suitability for the program.
              </li>
              <li>
                <span className="font-semibold">Get Started:</span> Once accepted, you'll receive further instructions and onboarding materials to begin your volunteering journey.
              </li>
            </ol>
            <a 
              href="/start-your-application"
              className="bg-[#0A8EA8] hover:bg-[#017a8a] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Start Your Application
            </a>
          </section>
        </div>
      </div>

      <Footer />
      <InfoPopup
        title={
          {
            beachCleanup: 'Beach Cleanup Crew',
            wildlifeSurveys: 'Marine Wildlife Surveys',
            educationalOutreach: 'Educational Outreach',
            virtualTasks: 'Virtual Conservation Tasks',
            education: 'Environmental Education Workshops',
            fieldwork: 'Fieldwork Training',
            dataCollection: 'Data Collection and Analysis',
            networking: 'Community Support and Networking',
          }[popup]
        }
        content={
          {
            beachCleanup: 'Join us in cleaning up local beaches to protect marine habitats.',
            wildlifeSurveys: 'Assist in collecting data to support marine research and conservation.',
            educationalOutreach: 'Raise awareness about marine conservation in the community.',
            virtualTasks: 'Contribute to conservation efforts remotely through various tasks.',
            education: 'Workshops on marine ecosystems and conservation strategies.',
            fieldwork: 'Hands-on training in data collection and environmental monitoring.',
            dataCollection: 'Training in data recording and analysis for research purposes.',
            networking: 'Connect with fellow volunteers and conservationists through our network.',
          }[popup]
        }
        isOpen={!!popup}
        onClose={closePopup}
      />
    </>
  );
};

export default VolunteerPrograms;
