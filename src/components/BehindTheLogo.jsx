import React from "react";

const BehindTheLogo = () => {
  return (
    <div
      id="behind-the-logo"
      className="min-h-screen bg-black text-white px-12 py-6"
    >
      <h1 className="text-4xl font-orbitron text-neonBlue mb-10 text-center">
        Behind the Logo
      </h1>

      {/* Section 1: Name Origin */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="/section1.png" // Replace with your actual image path
            alt="Remote to Remotron Concept"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        {/* Text */}
        <div>
          <h2 className="text-2xl font-orbitron text-neonBlue mb-4">
            The Origin of the Name
          </h2>
          <p className="text-gray-300 leading-relaxed">
            &quot;Remotron&quot; was born from the fusion of two concepts:
            &quot;<span className="font-bold">Remote</span>&quot; and &quot;
            <span className="font-bold">Robot</span>&quot;. We wanted a name
            that embodies simplicity, intelligence, and futuristic innovation.
            The idea originated from the everyday remotes we use to control TVs
            and air conditioners, reimagined as a smart, robotic solution for
            the modern world.
          </p>
        </div>
      </div>

      {/* Section 2: Concept */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-orbitron text-neonBlue mb-4">
            Concept and Inspiration
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our logo was inspired by the simplicity and functionality of
            everyday remote controls and the futuristic aesthetic of robots in
            science fiction. The design integrates these elements into a modern
            symbol that reflects intelligence, ease of use, and connectivity.
          </p>
        </div>
        {/* Image */}
        <div className="order-1 md:order-2">
          <img
            src="/section2.png" // Replace with your actual image path
            alt="Concept Design"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Section 3: Design Process */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="/section3.png" // Replace with your actual image path
            alt="Design Process"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        {/* Text */}
        <div>
          <h2 className="text-2xl font-orbitron text-neonBlue mb-4">
            The Design Process
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Using tools like Adobe Illustrator and Figma, we crafted the logo
            with precision. The robot&apos;s design conveys intelligence, while
            the remote-like interface ensures familiarity. Neon Blue was chosen
            to symbolize technology and futurism, complemented by clean and
            modern typography.
          </p>
        </div>
      </div>

      {/* Section 4: References */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-orbitron text-neonBlue mb-4">
            References and Inspiration
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our inspiration came from the design of TV remotes, air conditioner
            remotes, and sci-fi depictions of robots. These everyday devices
            formed the foundation of our design, merging practicality with a
            futuristic aesthetic.
          </p>
        </div>
        {/* Image */}
        <div className="order-1 md:order-2">
          <img
            src="/section4.png" // Replace with your actual image path
            alt="References and Inspiration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Section 5: Behind the Scenes */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-orbitron text-neonBlue mb-4">
          Behind the Scenes
        </h2>
        <p className="text-gray-300 leading-relaxed">
          From rough sketches on paper to detailed mockups in design software,
          the journey of creating the Remotron logo was a true labor of love.
          Every decision—whether it was about color, font, or layout—was made
          with the goal of creating a symbol that represents our mission and
          vision.
        </p>
      </div>
    </div>
  );
};

export default BehindTheLogo;
