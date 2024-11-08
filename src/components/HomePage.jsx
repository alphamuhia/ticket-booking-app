// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Ticket Booking</h1>
      <input type="text" placeholder="Search events..." />
      <div>
        <h2>Popular Events</h2>
        <Link to="/events/music">Music</Link>
        <Link to="/events/sports">Sports</Link>
        <Link to="/events/theater">Theater</Link>
      </div>
    </div>
  );
};

export default HomePage;
