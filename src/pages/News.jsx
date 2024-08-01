import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="bg-blue-50 min-h-screen">
      <div className="p-4 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12 text-blue-900">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          <div className="col-span-1 md:col-span-2 space-y-6 md:pl-12">
            {newsItems.map((item, index) => (
              <div key={index}>
                <motion.div
                  layout
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row p-4 md:p-6">
                    <img
                      src={`https://picsum.photos/200/150?random=${index}`}
                      alt="News"
                      className="w-full md:w-1/3 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                    />
                    <div className="w-full md:w-2/3">
                      <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-900">{item.title}</h2>
                      <p className="text-gray-600 line-clamp-2">{item.content}</p>
                      {expandedIndex !== index && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="mt-4 text-blue-500 underline bg-transparent hover:text-blue-700 transition duration-200"
                        >
                          Read More
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white mt-2 rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="p-4 md:p-6">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-900">{item.title}</h2>
                        <img
                          src={`https://picsum.photos/800/400?random=${index}`}
                          alt="News"
                          className="w-full h-64 object-cover rounded-lg mb-4 md:mb-6"
                        />
                        <p className="text-gray-700 mb-4">{item.content}</p>
                        <p className="text-gray-700">
                          Marine Protected Areas (MPAs) have been instrumental in preserving marine 
                          biodiversity. By restricting human activities such as fishing, drilling, 
                          and tourism, MPAs create safe havens where marine life can thrive. Recent 
                          expansions in MPAs across the globe have been driven by a combination of 
                          governmental policies and international agreements. These protected zones 
                          not only help in the recovery of endangered species but also contribute to 
                          the overall health of marine ecosystems, making them more resilient to 
                          climate change and human impacts.
                        </p>
                        <button
                          onClick={() => toggleExpand(index)}
                          className="mt-4 md:mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className='hidden md:flex md:flex-col'>
            <div className='mb-5 text-center'>
              <h2 className="text-2xl font-bold text-blue-900">Recommended News</h2>
            </div>
            <div>
              {recommendedNewsItems.map((item, index) => (
                <div key={index}>
                  <motion.div
                    layout
                    className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
                  >
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-semibold mb-2 text-blue-900">{item.title}</h3>
                      <p className="text-gray-600 line-clamp-2">{item.content}</p>
                      {expandedRecommendedIndex !== index && (
                        <button
                          onClick={() => toggleExpandRecommended(index)}
                          className="mt-4 text-blue-500 underline bg-transparent hover:text-blue-700 transition duration-200"
                        >
                          Read More
                        </button>
                      )}
                    </div>
                  </motion.div>
                  <AnimatePresence>
                    {expandedRecommendedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white mt-2 rounded-lg shadow-md overflow-hidden"
                      >
                        <div className="p-4 md:p-6">
                          <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-900">{item.title}</h3>
                          <img
                            src={`https://picsum.photos/800/400?random=${index}`}
                            alt="News"
                            className="w-full h-64 object-cover rounded-lg mb-4 md:mb-6"
                          />
                          <p className="text-gray-700 mb-4">{item.content}</p>
                          <p className="text-gray-700">
                            Efforts to restore marine ecosystems are showing positive results. By 
                            focusing on habitat restoration, species reintroduction, and pollution 
                            control, these initiatives aim to rehabilitate degraded marine 
                            environments. Collaboration between governments, NGOs, and local 
                            communities has been crucial in the success of these projects. The 
                            restoration of coral reefs, seagrasses, and mangroves is particularly 
                            important as these habitats support a diverse range of marine species. 
                            Additionally, these efforts help mitigate the impacts of climate change 
                            by enhancing the natural resilience of marine ecosystems.
                          </p>
                          <button
                            onClick={() => toggleExpandRecommended(index)}
                            className="mt-4 md:mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                          >
                            Close
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
