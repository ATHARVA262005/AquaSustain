import React from "react";

const OurImpact = () => {
  return (
    <section
      id="our-impact"
      className=" p-8 mb-8 container mx-auto  flex flex-wrap"
      data-aos="fade-up"
    >
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold text-[#04373A] mb-4 text-left">
          Our Impact
        </h2>
        <p className="mb-6 text-md text-justify">
          Aqua Sustain is committed to making a tangible difference in marine conservation. Our impact includes:
        </p>
        <ul className="list-decimal list-inside mb-6 text-md text-justify">
          <li>
            <strong>Ecosystem Restoration:</strong> Successfully rehabilitated over 500 acres of coral reefs and coastal habitats.
          </li>
          <li>
            <strong>Species Protection:</strong> Contributed to the recovery of endangered marine species through targeted conservation efforts.
          </li>
          <li>
            <strong>Pollution Reduction:</strong> Implemented initiatives that have removed over 100 tons of plastic waste from marine environments.
          </li>
          <li>
            <strong>Sustainable Fishing:</strong> Partnered with local communities to establish sustainable fishing practices, improving both marine biodiversity and local livelihoods.
          </li>
          <li>
            <strong>Climate Action:</strong> Conducted research on blue carbon ecosystems, contributing to climate change mitigation strategies.
          </li>
        </ul>
        <p>
          Through these initiatives, we aim to create a world where marine ecosystems are resilient, diverse, and flourishing.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="relative w-full max-w-lg">
          <iframe
            src="https://www.youtube.com/embed/6-J1x5CfAbY?si=i2uTs6e2JUGAsCdm"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Our Impact"
            className="w-full aspect-video rounded-lg shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
