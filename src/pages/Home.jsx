import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <section className="h-screen bg-gradient-to-b from-cyan-200 to-blue-900 text-white">
        <Navbar />
        <Hero />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
