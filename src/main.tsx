import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/login";
import MainPage from "./components/MainPage";
import "./styles/global.css";
;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<App />} />

        {}
        <Route path="/login" element={<Login />} />

        {}
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);