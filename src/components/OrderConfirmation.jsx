// src/components/OrderConfirmation.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderConfirmation = () => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDownload = () => {
    // Simulate the downloading of an e-ticket (this can be integrated with actual PDF generation)
    alert("E-ticket downloaded!");
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <h1>Order Confirmed!</h1>
      <p>Thank you for your booking. Your tickets are confirmed.</p>
      <h3>Booking Summary</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h4>Event: {item.eventId}</h4>
            <p>Seats: {item.seats.join(", ")}</p>
            <p>Total Price: ${item.price}</p>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${totalPrice}</p>
      <button onClick={handleDownload}>Download E-Ticket</button>
      <Link to="/profile">
        <button onClick={handleClearCart}>Go to Profile</button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
