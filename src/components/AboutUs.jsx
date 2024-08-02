import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="px-8 mb-8 container mx-auto flex flex-wrap"
      data-aos="fade-up"
    >
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-bold text-[#04373A] mb-4 text-left">
          About Aqua Sustain
        </h1>
        <p className="text-md text-justify mb-4">
          Aqua Sustain is dedicated to advancing Sustainable Development Goal 14: Life Below Water. Our mission is to promote the health and sustainability of marine ecosystems through cutting-edge research, community involvement, and innovative conservation strategies.
        </p>
        <p className="text-md text-justify ">
          Our work focuses on understanding and addressing the challenges faced by our oceans, from pollution to habitat destruction. By fostering collaboration among scientists, policymakers, and local communities, Aqua Sustain aims to create lasting positive impacts on marine environments, ensuring that our oceans remain vibrant and resilient for future generations.
        </p>
      </div>
      <div className="w-full md:w-1/2  flex justify-center items-center">
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
};

export default AboutUs;
