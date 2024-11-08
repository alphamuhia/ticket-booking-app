// src/components/SeatSelection.js
import React, { useState } from "react";

const SeatSelection = ({ event, onAddToCart }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <div>
        {event.seats.map((seat) => (
          <button
            key={seat}
            onClick={() => handleSeatSelect(seat)}
            className={selectedSeats.includes(seat) ? "selected" : ""}
          >
            {seat}
          </button>
        ))}
      </div>
      <button onClick={() => onAddToCart(selectedSeats)}>Add to Cart</button>
    </div>
  );
};

export default SeatSelection;
