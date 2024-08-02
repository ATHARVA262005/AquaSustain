import React, { useState, useEffect } from "react";
import CompanyCarousel from "./CompanyCarousel";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPartners = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop - 200 &&
          scrollPosition < sectionTop + sectionHeight - 200
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section
      id="our-partners"
      className=" container mx-auto  flex flex-wrap"
      data-aos="fade-up"
    >
      <div className="w-full mt-4">
        <h2 className="text-3xl font-bold text-[#04373A] mb-4 text-center justify-center">
          Our Partners
        </h2>
        <p className="mb-4 text-center">
          We are proud to collaborate with a range of organizations and institutions that share our commitment to marine conservation. Our partnerships help us amplify our impact and achieve our goals more effectively.
        </p>
        
      <CompanyCarousel />
      </div>
    </section>
  );
};

export default OurPartners;
