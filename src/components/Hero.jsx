import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-darkBackground text-white min-h-screen">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-darkBackground opacity-75 -z-10"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-5xl font-orbitron text-neonBlue mb-4">
            Welcome to the Future
          </h1>
          <p className="text-gray-300 mb-6">
            Remotron is an intelligent robot transforming how you control your
            world. From smart homes to futuristic gadgets, the future starts
            here.
          </p>
          {/* Call-to-Actions */}
          <div className="space-x-4">
            {/* <Button
              variant="default"
              className="bg-neonBlue text-black hover:bg-white"
            >
              Learn More
            </Button>
            <Button variant="outline" className="border-neonBlue text-neonBlue">
              Explore Products
            </Button> */}
          </div>
        </div>

        {/* Robot Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64 bg-neonBlue rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/remotron-robot.png"
              alt="Remotron Robot"
              className="w-40 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
