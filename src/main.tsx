import React from "react";
import { createRoot } from "react-dom/client";
// HashRouter so deep links keep working when the site is served from a GitHub Pages sub-path.
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root is missing from index.html");

createRoot(container).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
