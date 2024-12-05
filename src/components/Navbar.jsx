"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black py-3 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left Logo Section */}
        <div className="flex items-center cursor-pointer">
          <a href="#">
            <img
              src="./remotron-robot.png"
              alt="Remotron Logo"
              className="h-[45px]"
            />
          </a>
        </div>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden lg:flex items-center space-x-10 ml-[100px]">
          <a
            href="#"
            className="text-gray-300 hover:text-neonBlue transition font-medium"
          >
            Home
          </a>
          <a
            href="#our-story"
            className="text-gray-300 hover:text-neonBlue transition font-medium"
          >
            Our Story
          </a>
          <a
            href="#behind-the-logo"
            className="text-gray-300 hover:text-neonBlue transition font-medium"
          >
            Behind The Logo
          </a>
          <a
            href="#products"
            className="text-gray-300 hover:text-neonBlue transition font-medium"
          >
            Products
          </a>
        </nav>

        {/* Right Logo Section */}
        <div className="cursor-default flex flex-col items-center">
          <h1 className="text-lg font-orbitron text-neonBlue">REMOTRON</h1>
          <p className="text-gray-400 text-xs italic">
            &quot;The Remote That Controls The Future&quot;
          </p>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hamburger Menu Sliding Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-end z-50">
          <div className="w-3/4 sm:w-1/2 bg-darkBackground p-6 shadow-lg">
            <button
              className="text-gray-300 focus:outline-none absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col items-center mt-10 space-y-6">
              <a
                href="#"
                className="text-gray-300 hover:text-neonBlue transition font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#our-story"
                className="text-gray-300 hover:text-neonBlue transition font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href="#behind-the-logo"
                className="text-gray-300 hover:text-neonBlue transition font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Behind The Logo
              </a>
              <a
                href="#products"
                className="text-gray-300 hover:text-neonBlue transition font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
