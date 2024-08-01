import React from "react";
import AboutUsSection from "../components/AboutUsSection";
import OurWorkSection from "../components/OurWorkSection";
import OurImpactSection from "../components/OurImpactSection";
import OurApproachSection from "../components/OurApproachSection";
import TheTeamSection from "../components/TheTeamSection";
import Navbar from "../components/Navbar1";
import Footer from "../components/Footer1";

const About = () => (
  
  <>
  <Navbar/>
  <main className="bg-gray-100">
    <AboutUsSection />
    <OurWorkSection />
    <OurImpactSection />
    <OurApproachSection />
    <TheTeamSection />
  </main>
  <Footer/>
  </>
);

export default About;
