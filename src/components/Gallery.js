"use client";
import React from "react";

const Gallery = () => {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg","/5.jpg","/4.jpg","/6.jpg"];

  return (
    <section id="gallery" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Gallery</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
