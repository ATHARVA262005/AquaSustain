import React from "react";

const TheTeamSection = () => (
  <section
    id="the-team"
    className="bg-opacity-30 bg-white rounded-lg shadow-lg p-8 mb-8 container mx-auto backdrop-blur-lg"
    data-aos="fade-up"
  >
    <h2 className="text-3xl font-bold text-teal-300 mb-4 text-center">
      The Team
    </h2>
    <p className="mb-6 text-center">
      Our team comprises experts and passionate individuals dedicated to marine conservation. They bring diverse skills and experience to our mission.
    </p>
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 p-4 flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Dr. Jane Smith</h3>
          <p>Marine Biologist</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p>Conservation Specialist</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
          <p>Research Scientist</p>
        </div>
      </div>
    </div>
  </section>
);

export default TheTeamSection;
