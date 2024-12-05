import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black py-3 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-40">
        {/* Left Logo Section */}
        <div className="flex items-center">
          <img
            src="./remotron-robot.png"
            alt="Remotron Logo"
            className="h-[45px] mr-[145px]"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-10">
          <a
            href="#"
            className="text-gray-300 hover:text-neonBlue transition font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-neonBlue transition font-medium"
          >
            About Us
          </a>
          <a
            href="#products"
            className="text-gray-300 hover:text-neonBlue transition font-medium"
          >
            Products
          </a>
        </nav>

        {/* Right Logo Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-orbitron text-neonBlue">REMOTRON</h1>
          <p className="text-gray-400 text-xs italic">
            &quot;The Remote That Controls The Future&quot;
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
