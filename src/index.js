// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // optional: global styles

const root = document.getElementById("root"); // Get the root element
if (root) {
  const rootElement = ReactDOM.createRoot(root); // Create root from the element
  rootElement.render(<App />); // Render the app to this root
} else {
  console.error("Root element not found!");
}
