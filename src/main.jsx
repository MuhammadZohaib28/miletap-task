import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { SidebarProvider } from "./context/sidebarContext";
import { MealProvider } from "./context/mealContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <MealProvider>
        <RouterProvider router={router} />
      </MealProvider>
    </SidebarProvider>
  </React.StrictMode>
);
