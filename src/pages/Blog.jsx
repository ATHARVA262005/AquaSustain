import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const blogs = [
  {
    title: 'The Wonders of the Ocean',
    excerpt: 'Explore the mysteries and beauty of our oceans, from coral reefs to deep-sea creatures.',
    content: `Our oceans are vast and full of mysteries. From the vibrant coral reefs to the enigmatic deep-sea creatures, the ocean is a world of wonders. Coral reefs are among the most diverse ecosystems on Earth, hosting thousands of species. Meanwhile, deep-sea exploration reveals bizarre and fascinating creatures adapted to extreme conditions. The ocean plays a crucial role in regulating our climate and supporting life. By protecting these underwater treasures, we ensure a healthier planet for future generations. Discover more about the ocean's wonders and the importance of marine conservation.`,
  },
  {
    title: 'Sustainable Living Tips',
    excerpt: 'Simple yet effective tips for living a more sustainable and eco-friendly lifestyle.',
    content: `Sustainable living is not just about making big changes but also about the small, everyday choices we make. Here are some simple tips to start living more sustainably: Reduce, reuse, and recycle – cut down on waste by making smarter choices. Opt for reusable bags, bottles, and containers. Save energy – turn off lights and unplug devices when not in use. Choose eco-friendly products – look for items with minimal packaging and sustainable materials. Support local – buying locally reduces carbon footprints and supports local economies. By incorporating these habits into your daily life, you can make a significant positive impact on the environment.`,
  },
  {
    title: 'The Impact of Climate Change',
    excerpt: 'An overview of how climate change is affecting our planet and what we can do to combat it.',
    content: `Climate change is one of the most pressing issues of our time, impacting every corner of the globe. Rising temperatures lead to melting ice caps, causing sea levels to rise and threatening coastal communities. Extreme weather events, such as hurricanes and droughts, are becoming more frequent and severe. Ecosystems are shifting, and species are struggling to adapt. Addressing climate change requires collective action: reducing greenhouse gas emissions, transitioning to renewable energy sources, and promoting conservation efforts. By taking action now, we can mitigate the effects of climate change and work towards a more sustainable future.`,
  },
  {
    title: 'Innovations in Renewable Energy',
    excerpt: 'Discover the latest advancements in renewable energy technologies and their benefits.',
    content: `Renewable energy technologies are advancing rapidly, offering new solutions to our energy needs. Solar power continues to improve with more efficient panels and better storage solutions. Wind energy is becoming more viable with larger, more efficient turbines. Hydroelectric power and geothermal energy provide consistent, reliable energy sources. Innovations in energy storage, such as advanced batteries, are crucial for managing renewable energy supply. These technologies not only help reduce our reliance on fossil fuels but also offer economic opportunities and environmental benefits. Embracing renewable energy is key to a sustainable future.`,
  },
  {
    title: 'The Role of Technology in Conservation',
    excerpt: 'How modern technology is aiding in the conservation of wildlife and natural habitats.',
    content: `Technology plays a crucial role in modern conservation efforts. Satellite imaging allows for monitoring deforestation and tracking wildlife populations from space. Drones are used to survey and protect endangered species and their habitats. Data analytics help researchers understand and predict environmental changes. GPS tracking collars provide valuable data on animal movements and behaviors. Additionally, conservation apps and social media platforms help raise awareness and mobilize support. By leveraging these technologies, we can enhance our efforts to protect and preserve the natural world for future generations.`,
  },
  {
    title: 'Exploring Marine Biodiversity',
    excerpt: 'A dive into the rich and diverse life forms found in marine ecosystems.',
    content: `Marine biodiversity is incredibly rich and diverse, encompassing a wide range of species from the smallest plankton to the largest whales. Coral reefs, often referred to as the "rainforests of the sea," support an astounding variety of marine life. Mangroves, seagrass beds, and kelp forests also play crucial roles in supporting marine biodiversity. Understanding and preserving this biodiversity is essential for maintaining healthy ocean ecosystems. By exploring and studying marine life, we gain insights into the intricate relationships that sustain these ecosystems and the importance of their conservation.`,
  },
  {
    title: 'Waste Management in Coastal Cities',
    excerpt: 'An examination of waste management practices and their impact on coastal environments.',
    content: `Coastal cities face unique challenges when it comes to waste management due to their proximity to the ocean. Improper waste disposal and inadequate management can lead to marine pollution, affecting both wildlife and human health. Effective waste management practices, such as recycling programs, waste-to-energy technologies, and public education campaigns, are essential for minimizing environmental impact. By implementing sustainable waste management strategies and promoting community involvement, coastal cities can reduce their ecological footprint and protect marine environments.`,
  },
  {
    title: 'The Future of Ocean Exploration',
    excerpt: 'Insights into upcoming technologies and missions aimed at exploring the depths of our oceans.',
    content: `The future of ocean exploration is set to be transformed by new technologies and ambitious missions. Advances in underwater robotics, autonomous vehicles, and deep-sea sensors are enabling scientists to explore previously inaccessible areas of the ocean. Upcoming missions aim to map the ocean floor, study deep-sea ecosystems, and discover new species. These technological innovations not only expand our understanding of the ocean but also provide valuable data for conservation efforts and resource management. The continued investment in ocean exploration will help address pressing environmental challenges and unlock new opportunities for scientific discovery.`,
  },
  {
    title: 'The Benefits of Marine Protected Areas',
    excerpt: 'Understanding the significance and advantages of marine protected areas for ocean health.',
    content: `Marine Protected Areas (MPAs) are regions designated for the conservation of marine ecosystems and biodiversity. MPAs play a critical role in protecting endangered species, preserving habitats, and restoring ecological balance. By limiting human activities such as fishing and tourism, MPAs allow ecosystems to recover and thrive. Research shows that MPAs contribute to increased fish populations, improved water quality, and enhanced resilience to environmental changes. Supporting and expanding MPAs is essential for maintaining the health of our oceans and ensuring sustainable use of marine resources.`,
  },
];

const Recommendedblogs = [
  {
    title: 'The Wonders of the 304',
    excerpt: 'chutiya from coral reefs to deep-sea creatures.',
    content: `lavda oceans are vast and full of mysteries. From the vibrant coral reefs to the enigmatic deep-sea creatures, the ocean is a world of wonders. Coral reefs are among the most diverse ecosystems on Earth, hosting thousands of species. Meanwhile, deep-sea exploration reveals bizarre and fascinating creatures adapted to extreme conditions. The ocean plays a crucial role in regulating our climate and supporting life. By protecting these underwater treasures, we ensure a healthier planet for future generations. Discover more about the ocean's wonders and the importance of marine conservation.`,
  },
];


function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showRightDiv, setShowRightDiv] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      setShowRightDiv(false);
    } else {
      setExpandedIndex(index);
      setShowRightDiv(!isMobile);
    }
  };

  const closeContent = () => {
    setExpandedIndex(null);
    setShowRightDiv(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-4xl font-bold text-center my-5 text-gray-800">Blog Page</h1>

      <div className="flex flex-wrap justify-center">
        <div className='w-1/4'>
        <h2 className="text-2xl font-bold text-center m-5 p-5 text-white bg-blue-500">Recommended Blogs</h2>
        <div className="space-y-6 mx-5 mt-5">
        {Recommendedblogs.map((recommendedblog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold mb-2">{recommendedblog.title}</h2>
                <p className="text-gray-600">{recommendedblog.excerpt}</p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 text-blue-500 hover:underline cursor-pointer"
                >
                  View Full Content
                </button>
                {isMobile && expandedIndex === index && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Full Content</h3>
                    <p className="text-gray-700">{recommendedblog.content}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
        </div>
        <div className={`w-3/4 flex flex-col md:flex-row transition-all duration-300 ${showRightDiv ? 'w-full' : 'w-full'}`}>
          {/* Left Column */}
          <div className={`transition-all duration-300 ${showRightDiv && !isMobile ? 'md:w-7/12' : 'w-full'} space-y-6 mx-auto mt-5`}>
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600">{blog.excerpt}</p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 text-blue-500 hover:underline cursor-pointer"
                >
                  View Full Content
                </button>
                {isMobile && expandedIndex === index && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">Full Content</h3>
                    <p className="text-gray-700">{blog.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Right Column */}
          <AnimatePresence>
            {showRightDiv && !isMobile && (
              <motion.div
                key={expandedIndex}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3 }}
                className="md:w-5/12 bg-white rounded-lg shadow-md p-6 sticky top-8 h-[calc(100vh-2rem)] md:ml-6 m-5"
              >
                {expandedIndex !== null && (
                  <>
                    <button
                      onClick={closeContent}
                      className="absolute top-2 right-2 bg-gray-300 text-gray-700 rounded-full p-1 hover:bg-gray-400 transition duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <h2 className="text-2xl font-semibold mb-4">{blogs[expandedIndex].title}</h2>
                    <p className="text-gray-700">{blogs[expandedIndex].content}</p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
