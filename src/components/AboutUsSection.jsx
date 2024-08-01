import React from "react";

const AboutUsSection = () => (
  <section
    id="about-us"
    className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg flex flex-wrap"
    data-aos="fade-up"
  >
    <div className="w-full md:w-1/2 p-4">
      <h1 className="text-4xl font-bold text-teal-300 mb-4 text-center">
        About Aqua Sustain
      </h1>
      <p className="text-xl text-justify mb-6">
        Aqua Sustain is dedicated to advancing Sustainable Development Goal 14: Life Below Water. Our mission is to promote the health and sustainability of marine ecosystems through cutting-edge research, community involvement, and innovative conservation strategies.
      </p>
      <p className="mb-6">
        Our work focuses on understanding and addressing the challenges faced by our oceans, from pollution to habitat destruction. By fostering collaboration among scientists, policymakers, and local communities, Aqua Sustain aims to create lasting positive impacts on marine environments, ensuring that our oceans remain vibrant and resilient for future generations.
      </p>
    </div>
    <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
      <div className="relative w-full max-w-lg">
        <iframe
          src="https://www.youtube-nocookie.com/embed/LKrJ-GO4itk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Aqua Sustain Introduction"
          className="w-full aspect-video rounded-lg shadow-lg"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
