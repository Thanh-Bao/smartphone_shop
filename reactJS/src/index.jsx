import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@ui5/webcomponents-react";
import "./index.css";

import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "@ui5/webcomponents-react/dist/Assets";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/cart";
import "@ui5/webcomponents-icons/dist/heart-2";
import "@ui5/webcomponents-icons/dist/nutrition-activity";
import "@ui5/webcomponents-icons/dist/paid-leave";
import "@ui5/webcomponents-icons/dist/shipping-status";

import Home from "./pages/Home";
import PhoneDetail from "./pages/PhoneDetail";

setTheme("sap_horizon");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:phoneID",
    element: <PhoneDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
