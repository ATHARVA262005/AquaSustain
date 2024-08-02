import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EducationalResources = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700 py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-[#04373A] mb-4">Educational Resources</h1>
            <p className="text-lg text-gray-600">
              Education plays a vital role in marine conservation, and our platform offers a range of resources to inform and engage the public. Our educational materials include informative articles, interactive infographics, and engaging videos that cover various topics such as marine biology, conservation techniques, and the importance of sustainable practices. We also provide online courses and webinars to deepen understanding and foster a sense of responsibility towards ocean stewardship. By making these resources accessible, we aim to raise awareness, inspire action, and equip individuals with the knowledge needed to contribute to marine conservation efforts.
            </p>
          </header>

          {/* Featured Resources */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0A8EA8] mb-6 text-center">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <img src="https://woottoncommonsense.com/wp-content/uploads/2021/11/NSN5DtOC7JqORWvM3baCp9IPWMMpEu87CqRGGOZV-900x563.jpeg" alt="Resource 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Marine Biology 101</h3>
                  <p className="text-gray-600 mb-4">
                    Dive into the basics of marine biology with this comprehensive guide that covers the fundamentals of marine ecosystems, species, and their interactions.
                  </p>
                  <a
                    href="#"
                    className="text-[#0A8EA8] hover:text-[#04373A] font-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-white border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.goeco.org/wp-content/uploads/2020/12/Top-5-Marine-Conservation-Programs-Abroad-02.jpg" alt="Resource 2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Conservation Techniques</h3>
                  <p className="text-gray-600 mb-4">
                    Explore various conservation techniques used to protect marine environments and the strategies that have proven effective in preserving oceanic health.
                  </p>
                  <a
                    href="#"
                    className="text-[#0A8EA8] hover:text-[#04373A] font-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-white border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.primeluxuryrentals.com/wp-content/uploads/2024/06/Sustainable-Fishing-Practices-and-Their-Impact-on-Marine-Ecosystems.jpg" alt="Resource 3" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Sustainable Practices</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about sustainable practices that can be adopted to minimize human impact on marine ecosystems and contribute to the health of our oceans.
                  </p>
                  <a
                    href="#"
                    className="text-[#0A8EA8] hover:text-[#04373A] font-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Infographics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0A8EA8] mb-6 text-center">Interactive Infographics</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our interactive infographics provide engaging and visual ways to understand marine conservation topics. Explore these infographics to see data come to life and gain insights into critical environmental issues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.worldoceanobservatory.org/files/OceanHealth.jpg" alt="Infographic 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Ocean Health Overview</h3>
                  <p className="text-gray-600 mb-4">
                    An interactive infographic that illustrates the current state of ocean health and highlights key areas of concern.
                  </p>
                  <a
                    href="#"
                    className="text-[#0A8EA8] hover:text-[#04373A] font-semibold"
                  >
                    Explore
                  </a>
                </div>
              </div>
              <div className="bg-white border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.graygroupintl.com/hubfs/Gray%20Group%20International/GGI%20-%20Approved%20and%20Converted%20%28WebP%29/Marine%20Biodiversity%20Exploring%20the%20Richness%20of%20Ocean%20Life.webp" alt="Infographic 2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Marine Species Diversity</h3>
                  <p className="text-gray-600 mb-4">
                    Discover the diversity of marine species and learn about their roles within various ocean ecosystems.
                  </p>
                  <a
                    href="#"
                    className="text-[#0A8EA8] hover:text-[#04373A] font-semibold"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Online Courses */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#0A8EA8] mb-6 text-center">Online Courses</h2>
            <p className="text-lg text-gray-700 mb-8">
              Enroll in our online courses to deepen your understanding of marine conservation. Our courses cover a range of topics and provide valuable knowledge and skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/08/11/humpback-whale.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp" alt="Course 1" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Introduction to Marine Biology</h3>
                  <p className="text-gray-600 mb-4">
                    A foundational course that covers the basics of marine biology, including marine organisms, ecosystems, and environmental issues.
                  </p>
                  <a
                    href="#"
                    className="text-[#0A8EA8] hover:text-[#04373A] font-semibold"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
              <div className="bg-white border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.researchgate.net/publication/351713916/figure/fig4/AS:1025503376969743@1621510466963/The-main-governmental-and-society-responses-DPSIR-method-which-include-conservation.ppm" alt="Course 2" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Marine Conservation Strategies</h3>
                  <p className="text-gray-600 mb-4">
                    Explore various strategies and techniques used in marine conservation, including case studies and practical applications.
                  </p>
                  <a
                    href="#"
                    className="text-[#0A8EA8] hover:text-[#04373A] font-semibold"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
              <div className="bg-white border border-[#0A8EA8] rounded-lg shadow-lg overflow-hidden">
                <img src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-018-03158-3/MediaObjects/41467_2018_3158_Fig1_HTML.jpg" alt="Course 3" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#04373A] mb-3">Sustainable Practices for the Ocean</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about sustainable practices that can help protect ocean environments and promote long-term conservation efforts. </p>
                <a href="#" className="text-[#0A8EA8] hover:text-[#04373A] font-semibold">
                Enroll Now
                </a>
                </div>
                </div>
                </div>
                </section>
                {/* Call to Action */}
                <section className="text-center py-12 bg-[#0A8EA8] text-white rounded-lg p-5">
                    <h2 className="text-3xl font-bold mb-4">Get Involved in Marine Conservation</h2>
                    <p className="text-lg mb-6">
                    Ready to make a difference? Explore our resources, participate in our programs, and help protect our oceans. Together, we can create a sustainable future.
                    </p>
                    <a
                    href="/start-your-application"
                    className="bg-[#17C9F1] hover:bg-[#0A8EA8] text-[#221f1f] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                    >
                    Join Us Today
                    </a>
                </section>
                </div>
            </div>

            <Footer />
            </>
            );
            };

            export default EducationalResources;