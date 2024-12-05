"use client";
import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsModalOpen(true); // Show the modal after "submit"
  };
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-6 py-20">
        {/* Text Content */}
        <div className="sm:w-1/2 text-center sm:text-left mb-10 sm:mb-0">
          <h1 className="text-3xl sm:text-5xl font-orbitron text-neonBlue mb-4">
            Welcome to the Future
          </h1>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Remotron is an intelligent robot transforming how you control your
            world. From smart homes to futuristic gadgets, the future starts
            here.
          </p>
          <div className="space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center sm:justify-start mt-8 sm:mt-0">
            <a href="#about">
              <button className="bg-neonBlue text-black py-2 px-4 rounded-lg text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Learn More
              </button>
            </a>
            <a href="#products">
              <button className="border border-neonBlue text-neonBlue py-2 px-4 rounded-lg text-xl font-semibold hover:bg-neonBlue hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Explore Products
              </button>
            </a>
          </div>
        </div>

        {/* Robot Image */}
        <div className="sm:w-1/2 flex justify-center mt-6 sm:mt-0">
          <div
            className="relative w-[280px] sm:w-[350px] md:w-[420px] h-[280px] sm:h-[350px] md:h-[420px] rounded-lg shadow-lg flex items-center justify-center"
            style={{
              backgroundImage: "url('/Texonly.png')", // Update with your actual PNG filename
              backgroundSize: "contain", // Ensures the entire image is visible
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img
              src="/remotron-robot.png"
              alt="Remotron Robot"
              className="w-[220px] h-auto m-4 sm:w-[260px] md:w-[280px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Email Capture Form */}
      <section className="bg-darkBackground py-12 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl text-white mb-6 font-semibold">
          Stay Updated!
        </h2>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Sign up to receive the latest news and product updates from Remotron.
        </p>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-700 bg-black text-white focus:outline-none focus:ring-2 focus:ring-neonBlue w-full sm:w-auto flex-1"
          />
          <button className="bg-neonBlue text-black py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
            Sign Up
          </button>
        </form>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)} // Close on clicking the overlay
        >
          <div
            className="bg-white rounded-lg p-8 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            <h3 className="text-2xl text-black mb-4">Thank You!</h3>
            <p className="text-gray-700 mb-6">
              You have successfully signed up!
            </p>
            <button
              onClick={() => setIsModalOpen(false)} // Close modal on click
              className="bg-neonBlue text-black py-2 px-6 rounded-lg font-semibold hover:bg-neonBlue hover:text-white hover:border hover:border-white transition-all duration-300"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
