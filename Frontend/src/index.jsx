import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/applicationContext";
import AppRoutes from "./appRoutes/AppRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <Router>
        <AppRoutes />
    </Router>
  </AppContextProvider>
);