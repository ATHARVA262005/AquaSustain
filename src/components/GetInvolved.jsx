import React from "react";

const GetInvolved = () => {
  return (
    <section
      id="get-involved"
      className=" p-8 mb-8 container mx-auto flex flex-wrap"
      data-aos="fade-up"
    >
      <div className="w-full p-4">
        <h2 className="text-3xl font-bold text-[#04373A] mb-4 text-center">
          Get Involved
        </h2>
        <p className="mb-6 text-md text-center">
          There are many ways to get involved and support our mission. Whether you're interested in volunteering, donating, or partnering with us, your contribution can make a difference.
        </p>
        <p className="text-center mb-6 text-lg bg-[#04373A] text-blue-100 p-5">
          Visit our <a href="#contact" className="text-white font-bold">Contact</a> page for more information on how you can join us in our efforts to protect and preserve our oceans.
        </p>
      </div>
    </section>
  );
};

export default GetInvolved;
