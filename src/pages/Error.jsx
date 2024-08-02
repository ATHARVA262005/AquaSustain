import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Ocean Background Image
const oceanBackground =
  "https://static.vecteezy.com/system/resources/previews/008/216/005/non_2x/underwater-ocean-background-black-silhouettes-swimming-sea-fish-with-corals-and-plants-free-vector.jpg";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${oceanBackground}')`,
          filter: "brightness(50%)",
        }}
      ></div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-9xl font-extrabold mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Oops! The page you're looking for is not available.
        </motion.p>
        <Link
          to="/"
          className="bg-[#0A8EA8] hover:bg-teal-600 text-white py-3 px-6 rounded-full text-lg transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
