// src/components/Checkout.js
import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const handlePayment = () => {
    // Integrate payment gateway here (e.g., Stripe)
    clearCart();
    alert("Payment Successful");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.eventId} - Seats: {item.seats.join(", ")} - Price: $
            {item.price}
          </li>
        ))}
      </ul>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Checkout;
