"use client";
import React, { useState } from "react";
import axios from "axios";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
    start_date: "",
    end_date: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { first_name, last_name, email, mobile, address, start_date, end_date } = formData;
    if (!first_name || !last_name || !email || !mobile || !address || !start_date || !end_date) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return false;
    }

    if (!mobileRegex.test(mobile)) {
      setStatus({ type: "error", message: "Please enter a valid 10-digit mobile number." });
      return false;
    }

    const today = new Date();
    const start = new Date(start_date);
    const end = new Date(end_date);

    if (start < today.setHours(0, 0, 0, 0)) {
      setStatus({ type: "error", message: "Start date cannot be in the past." });
      return false;
    }

    if (end <= start) {
      setStatus({ type: "error", message: "End date must be after start date." });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post("http://localhost:8080/bookings", formData);

      if (response.status === 201) {
        setStatus({ type: "success", message: "Booking successful!" });
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          address: "",
          message: "",
          start_date: "",
          end_date: "",
        });
        setTimeout(() => onClose(), 1500);
      }
    } catch (error) {
      console.error("Booking error:", error);
      setStatus({ type: "error", message: "Booking failed. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full bg-gray-100 border border-transparent rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:secondary placeholder-gray-500 transition-all duration-150";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 primary">
          Book Your Stay
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className={inputStyle}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyle}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className={`${inputStyle} resize-none`}
            rows="3"
          ></textarea>

          {/* Status Message */}
          {status.message && (
            <p
              className={`text-sm text-center ${status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
            >
              {status.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full btn-custom py-2 rounded-lg hover:cursor-pointer transition ${loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default BookingModal;
