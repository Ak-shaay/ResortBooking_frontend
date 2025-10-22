"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/bookings");
        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading)
    return <p className="text-center mt-20 text-lg">Loading bookings...</p>;

  return (
    <div className="max-w-full mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings available.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full border bg-white">
            <thead className="text-white" style={{backgroundColor:"#52b100"}}>
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">First Name</th>
                <th className="py-2 px-4 text-left">Last Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Mobile</th>
                <th className="py-2 px-4 text-left">Address</th>
                <th className="py-2 px-4 text-left">Message</th>
                <th className="py-2 px-4 text-left">Start Date</th>
                <th className="py-2 px-4 text-left">End Date</th>
                {/* <th className="py-2 px-4 text-left">Created At</th> */}
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => (
                <tr
                  key={b._id || index}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="py-2 px-4 break-words whitespace-normal">{index+1}</td>
                  <td className="py-2 px-4 break-words whitespace-normal">{b.first_name}</td>
                  <td className="py-2 px-4 break-words whitespace-normal">{b.last_name}</td>
                  <td className="py-2 px-4 break-words whitespace-normal">{b.email}</td>
                  <td className="py-2 px-4 break-words whitespace-normal">{b.mobile}</td>
                  <td className="py-2 px-4 break-words whitespace-normal">{b.address}</td>
                  <td className="py-2 px-4 break-words whitespace-normal max-w-lg">{b.message || "-"}</td>
                  <td className="py-2 px-4 break-words whitespace-normal">
                    {new Date(b.start_date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 break-words whitespace-normal">
                    {new Date(b.end_date).toLocaleDateString()}
                  </td>
                  {/* <td className="py-2 px-4 break-words whitespace-normal">
                    {new Date(b.createdAt).toLocaleString()}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
