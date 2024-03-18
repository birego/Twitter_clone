import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import Sidebar from "./Sidebar.jsx";
import Trend from "./Trend.jsx";
import Profile from "./Profile.jsx"; 

const router = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {router}
    </BrowserRouter>
  </React.StrictMode>
);
