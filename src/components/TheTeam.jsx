import React from "react";

const TheTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Marine Biologist",
      image: "https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc",
      description: "Brief description of John Doe's expertise and role in the team."
    },
    {
      name: "Jane Smith",
      role: "Conservation Specialist",
      image: "https://i0.wp.com/www.lizzyc.com.au/journal/wp-content/uploads/2016/07/AHall_0216_0017.jpg?fit=1000%2C667&ssl=1",
      description: "Brief description of Jane Smith's expertise and role in the team."
    },
    {
      name: "David Lee",
      role: "Oceanographer",
      image: "https://knowledgeenthusiast.com/wp-content/uploads/2022/04/pexels-photo-6694422.jpeg", // Replace with your image
      description: "Brief description of David Lee's expertise and role in the team."
    }
  ];

  return (
    <section id="the-team" className="p-8 container mx-auto">
      <h2 className="text-3xl font-bold text-[#04373A] mb-4 text-center">Meet Our Team</h2>
      <p className="text-md text-center mb-8">
        Our team is composed of passionate and dedicated professionals with diverse expertise in marine science, conservation, and community engagement. Together, we work tirelessly to protect and preserve our oceans for future generations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member relative overflow-hidden rounded-lg shadow-lg">
            <div className="bg-black h-full rounded-lg flex flex-col justify-end p-6 py-10">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-white">{member.role}</p>
            </div>
            <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover opacity-90" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheTeam;
