import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl w-full mx-4 sm:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            className="absolute top-5 right-3 p-2 bg-[#0A8EA8] text-white rounded-full hover:bg-[#017a8a]"
            onClick={onClose}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#04373A] mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#04373A]">Goals:</h4>
              <p className="text-gray-600">{project.goals}</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#04373A]">Impact:</h4>
              <p className="text-gray-600">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
