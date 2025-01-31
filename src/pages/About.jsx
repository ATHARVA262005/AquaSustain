import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import OurWork from "../components/OurWork";
import OurImpact from "../components/OurImpact";
import OurApproach from "../components/OurApproach";
import TheTeam from "../components/TheTeam";
import OurPartners from "../components/OurPartners";
import GetInvolved from "../components/GetInvolved";

const About = () => {
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
    <div className=" bg-gradient-to-br from-sky-100 to-teal-100 text-gray-700  min-h-screen">
      <Navbar />

      <div className="pt-20">
        <AboutUs />
        <OurWork />
        <OurImpact />
        <OurApproach />
        <TheTeam />
        <OurPartners />
        <GetInvolved />
      </div>

      <Footer />
    </div>
  );
};

export default About;
