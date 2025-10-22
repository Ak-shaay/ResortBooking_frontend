"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10 text-center">
      <h3 className="text-2xl font-semibold mb-4">Resort Paradise</h3>
      <p className="mb-4">
        Resort Paradise, Kerala, India | Phone: +91 98765 43210
      </p>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com/" className="hover:text-blue-400">
          <FaFacebook size={24} />
        </a>
        <a href="https://instagram.com/" className="hover:text-pink-400">
          <FaInstagram size={24} />
        </a>
        <a href="https://x.com" className="hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © 2025 Resort Paradise. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
