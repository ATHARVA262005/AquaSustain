import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"

// Ocean Background Image
const oceanBackground =
  "https://static.vecteezy.com/system/resources/previews/008/216/005/non_2x/underwater-ocean-background-black-silhouettes-swimming-sea-fish-with-corals-and-plants-free-vector.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen text-gray-700 overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative h-screen bg-blue-900 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${oceanBackground}')`,
              filter: "brightness(70%)",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative z-9 flex flex-col items-center justify-center h-full px-6 py-12 text-white">
            <h1 className="text-6xl md:text-8xl font-extrabold text-center">
              <span className="gradient-text font-extrabold text-9xl text-teal-100">14</span>{" "}
              Life Below Water
            </h1>
            <p className="text-xl md:text-2xl mt-4 mb-6 text-center max-w-3xl">
              Conserve and sustainably use the oceans, seas, and marine
              resources for sustainable development.
            </p>
            <button className="bg-[#0A8EA8] hover:bg-teal-600 text-white py-3 px-6 rounded-full text-lg transition duration-300">
              Discover How You Can Contribute with{" "}
              <span className="font-extrabold">AQUA SUSTAIN</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 220"
              className="w-full"
            >
              <path
                fill="#fff"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-6 md:px-12  text-[#04373A]">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At AquaSustain, we are committed to advancing sustainable
              development goals through marine conservation. Our mission is to
              protect marine ecosystems, promote ocean stewardship, and educate
              communities on the importance of preserving our underwater world.
            </motion.p>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16 px-6 md:px-12 bg-[#0A8EA8] text-white">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              AquaSustain is dedicated to marine conservation through innovative
              projects and community engagement. Our goal is to ensure the
              health of our oceans and marine ecosystems, promoting sustainable
              practices and raising awareness about ocean health. Join us in
              safeguarding our oceans for future generations.
            </motion.p>
          </div>
        </section>

        {/* Marine Conservation */}
        <section className="py-16 px-6 md:px-12  text-white">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold mb-8 text-[#04373A]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Marine Conservation
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#04373A]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="p-6 ">
                <h3 className="text-xl font-semibold mb-4">
                  Marine Monitoring
                </h3>
                <p className="text-gray-500 mb-5">
                  Advanced technologies help us monitor ocean health, identify
                  threats, and respond with targeted actions.
                </p>
                <Link
                  to="/marine-monitoring"
                  className="smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[100%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-9 after:z-[-20] after:bg-[#0A8EA8] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#0A8EA8]"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 ">
                <h3 className="text-xl font-semibold mb-4">
                  Conservation Projects
                </h3>
                <p className="text-gray-500 mb-5">
                  We address challenges like coral reef restoration and marine
                  debris removal to restore biodiversity.
                </p>
                <Link
                  to="/conservation-projects"
                  className="smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[100%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-9 after:z-[-20] after:bg-[#0A8EA8] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#0A8EA8]"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 ">
                <h3 className="text-xl font-semibold mb-4">
                  Educational Resources
                </h3>
                <p className="text-gray-500 mb-5">
                  Access articles, infographics, and videos to learn about
                  marine biology, conservation techniques, and more.
                </p>
                <Link
                  to="/educational-resources"
                  className="smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[100%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-9 after:z-[-20] after:bg-[#0A8EA8] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#0A8EA8]"
                >
                  Learn More
                </Link>
              </div>
              <div className="p-6 ">
                <h3 className="text-xl font-semibold mb-4">
                  Volunteer Programs
                </h3>
                <p className="text-gray-500 mb-5">
                  Participate in fieldwork and virtual tasks to contribute to
                  marine conservation efforts.
                </p>
                <Link
                  to="/volunteer-programs"
                  className="smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[100%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-9 after:z-[-20] after:bg-[#0A8EA8] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#0A8EA8]"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* News & Updates */}
        <section className="py-16 px-6 md:px-12  text-[#04373A]">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              News & Updates
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="p-6 rounded-lg ">
                <h3 className="text-xl font-semibold mb-4">
                  Project Announcements
                </h3>
                <p className="text-gray-500">
                  Get updates on our latest projects, initiatives, and
                  partnerships focused on marine conservation.
                </p>
              </div>
              <div className="p-6  rounded-lg ">
                <h3 className="text-xl font-semibold mb-4">
                  Research Findings
                </h3>
                <p className="text-gray-500">
                  Explore results from our research efforts and new discoveries
                  impacting marine conservation.
                </p>
              </div>
              <div className="p-6  rounded-lg ">
                <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                <p className="text-gray-500">
                  Discover upcoming events, workshops, and webinars focusing on
                  marine conservation.
                </p>
              </div>
            </motion.div>
            <Link to="/news" className="mt-5 flex justify-center bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#0A8EA8,-0.5rem_-0.5rem_#04373A] transition uppercase">
              <span className="my-auto pr-5"><BiRightArrowAlt /></span>Check Out
            </Link>
          </div>

        </section>

        {/* About Blog */}
        <section className="py-16 px-6 md:px-12 bg-[#0A8EA8] text-white">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Our Blog
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Our blog covers a range of topics from marine biology and conservation techniques to the latest research findings and community stories. Stay updated with our expert articles, engaging infographics, and impactful videos.
            </motion.p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 md:px-12 text-[#04373A] text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Discover More
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              To dive deeper into our content, visit our blog and explore all our articles and updates on marine conservation.
            </motion.p>
            <Link
              to="/blogs"
              className="bg-[#0A8EA8] hover:bg-teal-600 text-white py-3 px-6 rounded-full text-lg flex items-center justify-center"
            >
              Read Our Blog <BiRightArrowAlt className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
