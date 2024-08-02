import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    title: 'Coral Reef Restoration',
    description: 'Our Coral Reef Restoration project involves transplanting healthy corals to damaged reefs and monitoring their growth and survival.',
    goals: 'The primary goals are to restore biodiversity, improve ecosystem health, and ensure the long-term sustainability of coral reefs.',
    impact: 'This project has led to significant improvements in reef structure and marine life diversity, providing a healthier and more resilient reef ecosystem.',
    image: 'https://www.barrierreef.org/generated/1280w-16-9/000202801-coral-planting-credit-coral-nurture-program-coral-nurture-program-1-jpg.jpg?1676603545'
    },
  {
    title: 'Marine Debris Removal',
    description: 'Our Marine Debris Removal project focuses on organizing cleanups to remove trash and debris from marine environments.',
    goals: 'Key goals include reducing pollution, protecting marine wildlife, and preventing the accumulation of harmful debris in marine ecosystems.',
    impact: 'The project has resulted in cleaner oceans, reduced hazards for marine animals, and increased awareness about marine pollution.',
    image: 'https://www.hawaii.edu/news/wp-content/uploads/2023/10/manoa-pmdp-2023-1-2.jpg'
  },
  {
    title: 'Endangered Species Protection',
    description: 'Our Endangered Species Protection project works to safeguard species at risk of extinction through habitat preservation and anti-poaching initiatives.',
    goals: 'The goals are to prevent extinction, preserve natural habitats, and support sustainable populations of endangered species.',
    impact: 'The initiative has stabilized populations and improved survival rates, contributing to the recovery of several endangered species.',
    image: 'https://beta-planet.gvi.co.uk/wp-content/uploads/2018/07/rhino-conservation.png'
  }
];

const ConservationProjects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-[#04373A] mb-4">Conservation Projects</h1>
            <p className="text-lg text-gray-600">
              Our conservation projects address specific challenges in marine environments and promote ecosystem recovery. These initiatives are meticulously designed to tackle pressing issues such as coral reef degradation, marine pollution, and the protection of endangered species. By implementing targeted actions like coral transplantation, debris removal, and habitat preservation, we aim to restore the delicate balance of marine ecosystems. Each project is guided by clear objectives and measurable outcomes to ensure we make a meaningful impact. Through these efforts, we not only aim to reverse environmental damage but also foster greater awareness and engagement in marine conservation. Our commitment to these projects reflects our broader mission to safeguard ocean health and promote sustainable practices for future generations.
            </p>
          </header>

          {/* Projects Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0A8EA8] my-6">Featured Projects</h2>
            <p className="text-lg text-gray-700 mb-8">
              Explore our key projects, each designed to make a significant impact on marine conservation. We track progress and measure success through clear goals and impact metrics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`hover:bg-white hover:scale-105 relative bg-${selectedIndex === index ? 'white' : 'bg-[#ffffff]'} border border-[#0A8EA8] rounded-xl shadow-lg overflow-hidden ${
                    selectedIndex === index ? 'scale-105 shadow-2xl' : ''
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-xl" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#04373A] mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-semibold text-[#04373A]">Goals:</h4>
                        <p className="text-gray-600">{project.goals}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#04373A]">Impact:</h4>
                        <p className="text-gray-600">{project.impact}</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex items-center mt-4 text-[#0A8EA8] hover:text-[#04373A] font-semibold"
                    >
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A8EA8] mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join us in our efforts to protect marine environments. Whether you want to participate in a project or support our initiatives, your contribution makes a difference.
            </p>
            <a
              href="/start-your-application"
              className="bg-[#0A8EA8] hover:bg-[#017a8a] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Apply to Volunteer
            </a>
          </section>
        </div>
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={projects[selectedIndex]}
        />
      )}

      <Footer />
    </>
  );
};

export default ConservationProjects;
