"use client";
import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";

const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Parallax
            bgImage={img}
            strength={400}
            className="h-screen flex items-center justify-center"
          >
            <div className="text-center text-white bg-black/40 p-8 rounded-xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Resort Paradise
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Escape • Relax • Rejuvenate
              </p>
              <a
                href="#booking"
                className="btn-custom text-black px-6 py-3 rounded-lg"
              >
                Book Now
              </a>
            </div>
          </Parallax>
        </div>
      ))}
    </section>
  );
};

export default Hero;
