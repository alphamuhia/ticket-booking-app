// src/components/EventDetail.js
import React from "react";
import SeatSelection from "./SeatSelection";
import { useCart } from "../context/CartContext";

const EventDetail = ({ event }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (selectedSeats) => {
    const ticket = {
      eventId: event.id,
      seats: selectedSeats,
      price: event.price * selectedSeats.length,
    };
    addToCart(ticket);
  };

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <p>
        {event.date} - {event.time}
      </p>
      <SeatSelection event={event} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default EventDetail;
