import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Import from Heroicons v2

const InfoPopup = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-[#04373A] opacity-70" onClick={onClose}></div>
      <div className="relative bg-[#0A8EA8] bg-opacity-80 rounded-lg shadow-lg max-w-sm mx-auto p-6 z-10">
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-200"
          onClick={onClose}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
        <p className="text-white">{content}</p>
      </div>
    </div>
  );
};

export default InfoPopup;
