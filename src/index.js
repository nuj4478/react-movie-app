import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();