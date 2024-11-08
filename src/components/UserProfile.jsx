// src/components/UserProfile.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useAuth();
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    // Mock API call to fetch user booking history
    const fetchBookingHistory = async () => {
      // Replace this with actual API call to fetch booking history
      setBookingHistory([
        {
          eventId: "Movie 1",
          seats: ["A1", "A2"],
          date: "2024-11-10",
          price: 40,
        },
        {
          eventId: "Movie 2",
          seats: ["B1", "B2"],
          date: "2024-11-12",
          price: 60,
        },
      ]);
    };
    fetchBookingHistory();
  }, [user]);

  return (
    <div>
      <h1>Profile: {user.name}</h1>
      <h3>Your Bookings</h3>
      {bookingHistory.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookingHistory.map((booking, index) => (
            <li key={index}>
              <h4>{booking.eventId}</h4>
              <p>Seats: {booking.seats.join(", ")}</p>
              <p>Booking Date: {booking.date}</p>
              <p>Total Price: ${booking.price}</p>
            </li>
          ))}
        </ul>
      )}
      <Link to="/cart">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
};

export default UserProfile;
