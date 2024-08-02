import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWater, FaRecycle, FaRegSun } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const newsItems = [
  { 
    title: "Marine Protected Areas Increased", 
    content: "Recent efforts have led to an increase in Marine Protected Areas (MPAs), helping preserve marine biodiversity."
  },
  { 
    title: "Plastic Waste Reduction Initiatives", 
    content: "New initiatives aimed at reducing plastic waste in oceans are gaining momentum globally."
  },
  { 
    title: "Coral Reef Restoration Projects", 
    content: "Innovative coral reef restoration projects are showing promising results in several regions."
  },
  { 
    title: "Sustainable Fishing Practices Adopted", 
    content: "Several countries have adopted sustainable fishing practices to ensure the long-term health of marine ecosystems."
  },
  { 
    title: "Marine Pollution Control Measures", 
    content: "Stricter marine pollution control measures are being implemented to reduce the impact on ocean life."
  },
  { 
    title: "Ocean Acidification Research", 
    content: "New research is shedding light on the impacts of ocean acidification and ways to mitigate its effects."
  },
  { 
    title: "Mangrove Reforestation Efforts", 
    content: "Mangrove reforestation efforts are proving to be effective in protecting coastlines and supporting marine life."
  },
  { 
    title: "Marine Species Conservation Programs", 
    content: "Conservation programs are making significant strides in protecting endangered marine species."
  }
];

const recommendedNewsItems = [
  { 
    title: "Marine Ecosystem Restoration", 
    content: "Efforts to restore marine ecosystems are showing positive results."
  },
  { 
    title: "Innovative Aquaculture Practices", 
    content: "Innovative aquaculture practices are improving sustainability in the fishing industry."
  },
  { 
    title: "Seagrass Conservation Initiatives", 
    content: "Seagrass conservation initiatives are helping to maintain marine biodiversity."
  },
  { 
    title: "Microplastic Research Advancements", 
    content: "Recent advancements in microplastic research are leading to better pollution control methods."
  },
  { 
    title: "Marine Wildlife Protection Laws", 
    content: "New laws are being enacted to protect marine wildlife from overfishing and habitat destruction."
  },
  { 
    title: "Climate Change Impact Studies", 
    content: "Studies on the impact of climate change on marine life are driving new conservation strategies."
  },
  { 
    title: "Deep-Sea Exploration Discoveries", 
    content: "Discoveries from deep-sea explorations are expanding our understanding of marine ecosystems."
  },
  { 
    title: "Sustainable Tourism in Coastal Areas", 
    content: "Promoting sustainable tourism in coastal areas is helping to preserve marine environments."
  }
];

function News() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedRecommendedIndex, setExpandedRecommendedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleExpandRecommended = (index) => {
    setExpandedRecommendedIndex(expandedRecommendedIndex === index ? null : index);
  };

  return (
    <>
    <Navbar/>

    <div className="bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700 min-h-screen py-12 px-20">
      <h1 className="text-3xl font-bold text-left mb-8 text-[#0A8EA8]">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 space-y-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row p-6">
                <div className="w-full md:w-1/3">
                  <img
                    src={`https://picsum.photos/200/150?random=${index}`}
                    alt="News"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-2/3 pl-0 md:pl-6">
                  <h2 className="text-xl font-semibold mb-2 text-[#04373A]">{item.title}</h2>
                  <p className="text-gray-700 mb-4 line-clamp-3">{item.content}</p>
                  {expandedIndex !== index && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-[#0A8EA8] underline hover:text-[#17C9F1] transition duration-300"
                    >
                      Read More
                    </button>
                  )}
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E1F5FE] mt-2 rounded-lg shadow-md"
                  >
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-4 text-[#04373A]">{item.title}</h2>
                      <img
                        src={`https://picsum.photos/800/400?random=${index}`}
                        alt="News"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <p className="text-gray-700 mb-4">{item.content}</p>
                      <button
                        onClick={() => toggleExpand(index)}
                        className="bg-[#0A8EA8] text-white px-4 py-2 rounded hover:bg-[#17C9F1] transition duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-center text-[#0A8EA8] mb-4">Recommended News</h2>
          {recommendedNewsItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-[#04373A]">{item.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{item.content}</p>
                {expandedRecommendedIndex !== index && (
                  <button
                    onClick={() => toggleExpandRecommended(index)}
                    className="text-[#0A8EA8] underline hover:text-[#17C9F1] transition duration-300"
                  >
                    Read More
                  </button>
                )}
              </div>
              <AnimatePresence>
                {expandedRecommendedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#E1F5FE] mt-2 rounded-lg shadow-md"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-[#04373A]">{item.title}</h3>
                      <img
                        src={`https://picsum.photos/800/400?random=${index}`}
                        alt="News"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <p className="text-gray-700 mb-4">{item.content}</p>
                      <button
                        onClick={() => toggleExpandRecommended(index)}
                        className="bg-[#0A8EA8] text-white px-4 py-2 rounded hover:bg-[#17C9F1] transition duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default News;
