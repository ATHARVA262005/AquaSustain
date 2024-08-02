// src/components/Modal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative max-h-[80vh] overflow-y-auto overflow-x-hidden text-left">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700">{content}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
