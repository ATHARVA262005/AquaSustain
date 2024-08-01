import React from "react";

const OurApproachSection = () => (
  <section
    id="our-approach"
    className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg flex flex-wrap"
    data-aos="fade-up"
  >
    <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
      <div className="relative w-full max-w-lg">
        <iframe
          src="https://www.youtube.com/embed/u7N8BaSFJ7g?si=4nAUVpZN648Ye8Fg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Our Approach"
          className="w-full aspect-video rounded-lg shadow-lg"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-3xl font-bold text-teal-300 mb-4 text-center">
        Our Approach
      </h2>
      <p className="mb-6">
        Aqua Sustain employs a multifaceted approach to achieve marine conservation goals. Our strategy includes:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Ecosystem-Based Management:</strong> We consider the entire ecosystem, including humans, in our conservation strategies.
        </li>
        <li>
          <strong>Community Engagement:</strong> We empower local communities with knowledge and tools to contribute to marine conservation.
        </li>
        <li>
          <strong>Innovative Technologies:</strong> We leverage cutting-edge technologies for marine research and conservation.
        </li>
        <li>
          <strong>Policy Advocacy:</strong> We work with governments and organizations to implement policies that protect marine life and habitats.
        </li>
        <li>
          <strong>Education and Outreach:</strong> We raise awareness about ocean conservation through educational programs and public campaigns.
        </li>
      </ul>
      <p>
        Our approach is rooted in science, collaboration, and innovation, aiming to make a significant impact on ocean health and sustainability.
      </p>
    </div>
  </section>
);

export default OurApproachSection;
