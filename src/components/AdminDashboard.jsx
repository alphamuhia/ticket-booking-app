// src/components/AdminDashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = ({ bookings }) => {
  const { user } = useAuth();

  const theaterBookings = bookings.filter(
    (booking) => booking.theater === user.theater
  );

  return (
    <div>
      <h1>{user.theater} Dashboard</h1>
      {theaterBookings.map((booking, index) => (
        <div key={index}>
          <h2>Event: {booking.eventName}</h2>
          <p>Tickets Sold: {booking.ticketsSold}</p>
          <p>Seats: {booking.seats.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
