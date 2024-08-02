import React from "react";

const OurApproach = () => {
  return (
    <section
      id="our-approach"
      className="p-8 mb-8 container mx-auto  flex flex-row flex-wrap "
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
        <h2 className="text-3xl font-bold text-[#04373A] mb-4 text-left">
        Our Approach
        </h2>
        <p className="text-md text-justify mb-4">
        Our approach to marine conservation is built on a foundation of scientific research, community engagement, and innovative solutions. Key aspects of our approach include:
        </p>
        <ul className="list-disc list-inside mb-6 text-md text-justify">
        <li>Conducting comprehensive marine research to inform conservation strategies.</li>
        <li>Engaging local communities and stakeholders to foster collaboration and shared responsibility.</li>
        <li>Implementing evidence-based conservation practices and monitoring their effectiveness.</li>
        <li>Promoting environmental edzucation and awareness to inspire action and support.</li>
        <li>Advocating for policy changes that support marine conservation and sustainable practices.</li>
        </ul>
        <p>
        By integrating these elements into our work, we strive to achieve meaningful and lasting impacts on marine ecosystems.
        </p>
      </div>

      </section>
      );
};

export default OurApproach;
