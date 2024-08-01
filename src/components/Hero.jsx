import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-cyan-200 to-blue-900 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Discover the Wonders of the Ocean</h1>
        <p className="text-lg mb-8">
          Exploring the depths, revealing the wonders of our oceans, and inspiring conservation of marine life for generations to come.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
