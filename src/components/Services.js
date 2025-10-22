"use client";
import React from "react";
import { FaBed, FaMountain, FaSpa } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBed size={50} className="primary mb-4" />,
      title: "Accommodation",
      desc: "Luxurious rooms with waterfall and mountain views.",
    },
    {
      icon: <FaMountain size={50} className="primary mb-4" />,
      title: "Adventure Activities",
      desc: "Hiking and thrilling outdoor experiences.",
    },
    {
      icon: <FaSpa size={50} className="primary mb-4" />,
      title: "Wellness & Spa",
      desc: "Relax with world-class spa and wellness treatments.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Our Services
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {services.map((s, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center">
              {s.icon}
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
