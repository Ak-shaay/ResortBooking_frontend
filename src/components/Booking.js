"use client";
import React, { useState } from "react";
import { Parallax } from "react-parallax";
import BookingModal from "./BookingModal";

const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Parallax
      bgImage="/bg.jpg"
      strength={300}
      className="min-h-screen flex items-center justify-center"
    >
      {/* Overlay for readability */}
      <div id="booking" className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl font-bold mb-4">Book Your Stay</h2>
        <p className="max-w-md mx-auto mb-6">
          Reserve your dream vacation at Resort Paradise today!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-custom px-6 py-3 rounded-lg hover:cursor-pointer transition"
        >
          Book Now
        </button>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Parallax>
  );
};

export default Booking;
