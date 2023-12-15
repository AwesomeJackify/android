import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
);
