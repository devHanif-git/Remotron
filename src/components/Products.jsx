"use client";
import React, { useState } from "react";

const Products = () => {
  const merchandise = [
    {
      title: "Remotron Keychain",
      image: "/keychain.png", // Replace with the actual image path
      description: "A sleek keychain featuring the futuristic Remotron logo.",
    },
    {
      title: "Remotron Mug",
      image: "/mug.png", // Replace with the actual image path
      description:
        "A stylish mug designed to keep your mornings energized with Remotron vibes.",
    },
    {
      title: "Remotron Packaging Box",
      image: "/box.png", // Replace with the actual image path
      description:
        "An innovative packaging design combining eco-friendliness and a futuristic look.",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  return (
    <div
      id="products"
      className="min-h-screen bg-gray-900 text-white px-12 py-6"
    >
      <h1 className="text-4xl font-orbitron text-neonBlue mb-10 text-center">
        Our Products
      </h1>

      {/* Product Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {merchandise.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            {/* Square Image */}
            <div
              className="w-full aspect-square cursor-pointer"
              onClick={() => openModal(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Info Box */}
            <div className="p-4">
              <h3 className="text-xl font-orbitron text-neonBlue mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Video Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-orbitron text-neonBlue mb-4">
          Watch Our Promotional Video
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Explore the innovation and creativity behind Remotron in our exclusive
          promotional video.
        </p>
        <div className="relative w-full pb-[56.25%]">
          {" "}
          {/* 16:9 aspect ratio */}
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/-ko1Zt4kCQo" // Replace with your actual YouTube video ID
            title="Remotron Promotional Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-lg w-full p-4">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              onClick={closeModal}
            >
              Close
            </button>
            <img
              src={modalImage}
              alt="Product Preview"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
