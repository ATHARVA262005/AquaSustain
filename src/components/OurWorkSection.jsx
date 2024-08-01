import React from "react";

const OurWorkSection = () => (
  <section
    id="our-work"
    className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg flex flex-wrap"
    data-aos="fade-up"
  >
    <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
      <div className="relative w-full max-w-lg">
        <iframe
          src="https://www.youtube-nocookie.com/embed/im61iyNpimw"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Aqua Sustain Work"
          className="w-full aspect-video rounded-lg shadow-lg"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-3xl font-bold text-teal-300 mb-4 text-center">
        Our Work
      </h2>
      <p className="mb-6">
        At Aqua Sustain, we integrate scientific research with community action to address critical marine issues. Our key areas of focus include:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Marine Pollution Mitigation</li>
        <li>Conservation of Endangered Marine Species</li>
        <li>Coral Reef and Marine Habitat Restoration</li>
        <li>Promotion of Sustainable Fishing Practices</li>
        <li>Ocean Acidification Research and Mitigation</li>
        <li>Marine Protected Area Establishment and Management</li>
      </ul>
      <p>
        Through collaborative efforts and innovative solutions, we work to enhance ocean health and resilience, ensuring that marine ecosystems can thrive in the face of global challenges.
      </p>
    </div>
  </section>
);

export default OurWorkSection;
