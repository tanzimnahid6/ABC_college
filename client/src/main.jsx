import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Route/Route.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { CollegesProvider } from "./context/CollegesContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CollegesProvider>
        <RouterProvider router={route}></RouterProvider>
      </CollegesProvider>
    </AuthProvider>
  </React.StrictMode>
);
