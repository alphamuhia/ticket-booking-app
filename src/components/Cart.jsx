// src/components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h3>Event: {item.eventId}</h3>
                <p>Seats: {item.seats.join(", ")}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => removeFromCart(item.eventId)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
