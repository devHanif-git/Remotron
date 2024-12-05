import React from "react";

const Hero = () => {
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
          <div className="space-x-4 flex justify-center sm:justify-start">
            <a href="#about">
              <button className="bg-neonBlue text-black py-2 px-4 rounded-lg hover:bg-white hover:text-black">
                Learn More
              </button>
            </a>
            <a href="#products">
              <button className="border border-neonBlue text-neonBlue py-2 px-4 rounded-lg hover:bg-neonBlue hover:text-black">
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
              className="w-[220px] h-auto m-4 sm:w-[260px] md:w-[280px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
