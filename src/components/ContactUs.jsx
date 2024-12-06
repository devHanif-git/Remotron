"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // Show success modal
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      id="contact-us"
      className="min-h-screen bg-black text-white px-12 py-6"
    >
      <h1 className="text-4xl font-orbitron text-neonBlue mb-10 text-center">
        Contact Us
      </h1>

      {/* Contact Section Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Logo or Image */}
        <div className="flex justify-center">
          <img
            src="/favicon.png" // Replace with your actual logo path
            alt="Remotron Logo"
            className="w-64 h-64 object-contain rounded-full shadow-lg"
          />
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-orbitron text-neonBlue mb-6">
            We&apos;d Love to Hear From You!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg shadow-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg shadow-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-lg shadow-md"
                rows="5"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-neonBlue text-black py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {modalVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
          >
            <h2 className="text-2xl font-orbitron text-neonBlue mb-4">
              Success!
            </h2>
            <p className="text-gray-800 mb-4">
              Your message has been sent successfully.
            </p>
            <button
              onClick={closeModal}
              className="bg-neonBlue text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
