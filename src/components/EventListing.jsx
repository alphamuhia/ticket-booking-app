// src/components/EventListing.js
import React from "react";
import { Link } from "react-router-dom";

const EventListing = ({ events }) => {
  return (
    <div>
      <h2>Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <Link to={`/events/${event.id}`}>Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export default EventListing;
