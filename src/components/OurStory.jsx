"use client";
import React, { useState } from "react";

const OurStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  return (
    <div
      id="our-story"
      className="min-h-screen bg-gray-900 text-white px-12 py-10"
    >
      <h1 className="text-4xl font-orbitron text-neonBlue mb-8 text-center">
        Our Story
      </h1>

      {/* Logo Story */}
      <div className="max-w-6xl mx-auto mb-8">
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          At Remotron, our logo is more than just a design—it’s a reflection of
          our mission to revolutionize control. The robot at the center of our
          logo symbolizes intelligence and technology, while its remote-like
          interface represents connectivity and ease of use. Together, they
          embody our tagline:{" "}
          <span className="text-neonBlue font-bold">
            "The Remote That Controls the Future."
          </span>
        </p>
      </div>

      {/* Logo Variants */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img
            src="/remotron-robot.png"
            alt="Primary Logo"
            className="h-40 w-auto rounded-lg shadow-lg transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => openModal("/remotron-robot.png")} // Trigger modal on image click
          />
          <p className="text-gray-400 mt-4 text-center">Primary Logo</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/seclogo.png"
            alt="Alternative Logo"
            className="h-40 w-auto rounded-lg shadow-lg transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => openModal("/seclogo.png")} // Trigger modal on image click
          />
          <p className="text-gray-400 mt-4 text-center">Alternative Logo</p>
        </div>
      </div>

      {/* Color Palette */}
      <div className="max-w-6xl mx-auto text-center mb-8 px-4">
        <h2 className="text-2xl font-orbitron text-neonBlue mb-6">
          Color Palette
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
          {/* Neon Blue */}
          <div className="flex flex-col items-center">
            <div className="relative group w-32 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28 bg-neonBlue rounded-lg shadow-md flex items-center justify-center">
              <span className="cursor-default absolute inset-0 flex justify-center items-center text-sm text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Neon Blue
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">#00BFFF</p>
          </div>

          {/* Black */}
          <div className="flex flex-col items-center">
            <div className="relative group w-32 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28 bg-black rounded-lg shadow-md flex items-center justify-center">
              <span className="cursor-default absolute inset-0 flex justify-center items-center text-sm text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Black
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">#000000</p>
          </div>

          {/* Light Gray */}
          <div className="flex flex-col items-center">
            <div className="relative group w-32 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28 bg-lightGray rounded-lg shadow-md flex items-center justify-center">
              <span className="cursor-default absolute inset-0 flex justify-center items-center text-sm text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Light Gray
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">#E5E5E5</p>
          </div>

          {/* White */}
          <div className="flex flex-col items-center">
            <div className="relative group w-32 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28 bg-white rounded-lg shadow-md border flex items-center justify-center">
              <span className="cursor-default absolute inset-0 flex justify-center items-center text-sm text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                White
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">#FFFFFF</p>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-orbitron text-neonBlue mb-4">
          Typography
        </h2>
        <p className="text-gray-300 mb-4">
          We use the following fonts to convey modernity and readability:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-orbitron text-neonBlue">Orbitron:</span> Used
            for titles and headings.
          </li>
          <li>
            <span className="font-poppins text-neonBlue">Poppins:</span> Used
            for body text and descriptions.
          </li>
        </ul>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)} // Close modal on background click
        >
          <div
            className="bg-gray-800 p-4 rounded-lg shadow-lg w-80 h-80 flex justify-center items-center relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing
          >
            <img
              src={modalImage}
              alt="Logo Preview"
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurStory;
