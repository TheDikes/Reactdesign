import React from "react";
import { createRoot } from "react-dom"; // Import from 'react-dom' instead of 'react-dom/client'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
 import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode> {/* Optionally use StrictMode */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

