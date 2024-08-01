import React, { useState } from 'react';

const VolunteerPrograms = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Marine Life Conservation Volunteer Programs
        </h1>
        
        {/* Introduction */}
        <p className="text-center mb-6 text-lg">
          Volunteering with us provides a unique opportunity to make a real difference in marine conservation. Our programs are designed to engage individuals in meaningful activities that support the protection and preservation of marine ecosystems. Whether you are interested in hands-on fieldwork or remote tasks, there is a place for you in our volunteer community. Explore our diverse range of programs and see how you can contribute to safeguarding our oceans and marine life.
        </p>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <a 
            href="#apply"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Apply to Volunteer
          </a>
        </div>

        {/* Diverse Opportunities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Diverse Opportunities</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our program offers various opportunities, catering to different interests and skill sets, making it inclusive and accessible.
          </p>

          {/* Individual Cards for Each Opportunity */}
          <div className="flex flex-wrap gap-6">
            {/* Beach Cleanup Crew */}
            <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Beach Cleanup Crew</h3>
              <p className="text-gray-700 mb-4">
                Join our efforts in cleaning up local beaches to protect marine life and habitats.
              </p>
              <button
                onClick={() => toggleExpand('beachCleanup')}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {expanded === 'beachCleanup' ? 'Read Less' : 'Learn More'}
              </button>
              {expanded === 'beachCleanup' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    As a member of the Beach Cleanup Crew, you'll participate in organized events to remove litter and debris from beaches, preventing pollutants from entering the ocean and harming marine life. Volunteers receive training on safe cleanup practices and the impact of marine pollution.
                  </p>
                </div>
              )}
            </div>

            {/* Marine Wildlife Surveys */}
            <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Marine Wildlife Surveys</h3>
              <p className="text-gray-700 mb-4">
                Assist in collecting data on marine species to support conservation research and initiatives.
              </p>
              <button
                onClick={() => toggleExpand('wildlifeSurveys')}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {expanded === 'wildlifeSurveys' ? 'Read Less' : 'Learn More'}
              </button>
              {expanded === 'wildlifeSurveys' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    Volunteers in this program conduct surveys to monitor the health and population of marine species. Training includes species identification, data collection techniques, and the use of tools like GPS and cameras. The data collected is crucial for informing conservation strategies and protecting marine biodiversity.
                  </p>
                </div>
              )}
            </div>

            {/* Educational Outreach */}
            <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Educational Outreach</h3>
              <p className="text-gray-700 mb-4">
                Engage with the community to raise awareness about marine conservation issues.
              </p>
              <button
                onClick={() => toggleExpand('educationalOutreach')}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {expanded === 'educationalOutreach' ? 'Read Less' : 'Learn More'}
              </button>
              {expanded === 'educationalOutreach' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    In the Educational Outreach program, volunteers participate in events, workshops, and school presentations to educate the public about the importance of marine conservation. Training covers effective communication techniques, educational content development, and public speaking skills.
                  </p>
                </div>
              )}
            </div>

            {/* Virtual Conservation Tasks */}
            <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Virtual Conservation Tasks</h3>
              <p className="text-gray-700 mb-4">
                Contribute remotely to conservation efforts through data analysis, social media campaigns, and more.
              </p>
              <button
                onClick={() => toggleExpand('virtualTasks')}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {expanded === 'virtualTasks' ? 'Read Less' : 'Learn More'}
              </button>
              {expanded === 'virtualTasks' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    Virtual Conservation Tasks offer opportunities to support marine conservation from anywhere. Volunteers can assist with tasks such as data analysis, content creation for awareness campaigns, or administrative support. This flexible option is ideal for those who want to contribute their skills and time but are unable to participate in fieldwork.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Support and Training Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Support and Training</h2>
          <p className="text-lg text-gray-700 mb-6">
            We provide comprehensive training and support to ensure volunteers are well-prepared and effective in their roles.
          </p>

          {/* Individual Cards for Each Training Program */}
          <div className="flex flex-wrap gap-6">
            {/* Environmental Education Workshops */}
            <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Environmental Education Workshops</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive workshops on marine ecosystems, conservation strategies, and sustainable practices.
              </p>
              <button
                onClick={() => toggleExpand('education')}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {expanded === 'education' ? 'Read Less' : 'Learn More'}
              </button>
              {expanded === 'education' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    Our workshops provide in-depth knowledge about marine ecosystems, the challenges they face, and how conservation strategies can be effectively implemented. Participants will gain a deeper understanding of the science behind conservation and the practical steps they can take to make a difference.
                  </p>
                </div>
              )}
            </div>

            {/* Fieldwork Training */}
            <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Fieldwork Training</h3>
              <p className="text-gray-700 mb-4">
                Hands-on training in data collection, species identification, and environmental monitoring techniques.
              </p>
              <button
                onClick={() => toggleExpand('fieldwork')}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {expanded === 'fieldwork' ? 'Read Less' : 'Learn More'}
              </button>
              {expanded === 'fieldwork' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    Fieldwork training equips volunteers with the skills needed for accurate data collection and species identification. This hands-on experience is crucial for those interested in contributing to scientific research and environmental monitoring projects.
                  </p>
                </div>
              )}
            </div>

            {/* Data Collection and Analysis */}
            <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Data Collection and Analysis</h3>
              <p className="text-gray-700 mb-4">
                Training in data recording, analysis, and interpretation for conservation research.
              </p>
              <button
                onClick={() => toggleExpand('dataCollection')}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {expanded === 'dataCollection' ? 'Read Less' : 'Learn More'}
              </button>
              {expanded === 'dataCollection' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    Volunteers involved in data collection and analysis will learn methods for recording and analyzing environmental data. Training includes the use of specialized software and tools for interpreting results and contributing to research efforts.
                  </p>
                </div>
              )}
            </div>

            {/* Community Support and Networking */}
            <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Community Support and Networking</h3>
              <p className="text-gray-700 mb-4">
                Opportunities to connect with other volunteers, share experiences, and support one another.
              </p>
              <button
                onClick={() => toggleExpand('community')}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {expanded === 'community' ? 'Read Less' : 'Learn More'}
              </button>
              {expanded === 'community' && (
                <div className="mt-4">
                  <p className="text-gray-700">
                    Our program fosters a supportive community where volunteers can network, share experiences, and support each other. Regular meetings and events provide opportunities to connect with fellow volunteers, discuss challenges, and celebrate successes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Volunteer with Us?</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li className="mb-2">Make a tangible impact on marine conservation efforts</li>
            <li className="mb-2">Gain hands-on experience and develop new skills</li>
            <li className="mb-2">Connect with like-minded individuals and build a sense of community</li>
            <li className="mb-2">Receive training and support to enhance your volunteer experience</li>
            <li className="mb-2">Contribute to meaningful research and educational outreach</li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">What Our Volunteers Say</h2>
          <div className="max-w-md mx-auto">
            <blockquote className="italic text-gray-700 mb-4">
              "Volunteering with the Marine Wildlife Surveys has been an incredible experience. I've learned so much about marine biology and made lasting connections with fellow volunteers." – Jane D.
            </blockquote>
            <blockquote className="italic text-gray-700">
              "The Beach Cleanup Crew is a fantastic way to give back to the environment. It’s rewarding to see the immediate impact of our efforts on the local beaches." – Mark T.
            </blockquote>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg mb-4">
            If you have any questions or need more information about our volunteer programs, feel free to reach out to us:
          </p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> volunteer@example.com</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> (123) 456-7890</p>
          <p className="text-gray-700"><strong>Address:</strong> 123 Ocean Drive, Marine City, Oceanland</p>
        </div>

        {/* Conclusion */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Join us in our mission to protect and preserve marine environments. Your involvement makes a significant impact and helps build a stronger community of ocean advocates.
          </p>
          <a href="/contact" className="text-blue-500 hover:underline">
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPrograms;
