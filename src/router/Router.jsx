import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import NotFound from "../components/NotFound.jsx";
import Home from "../pages/Home.jsx";
import MealDetails from "../pages/MealDetails.jsx";
import Category from "../pages/Category.jsx";
import Menu from "../pages/Menu.jsx";
import About from "../pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/meal/:id",
        element: <MealDetails />,
      },
      {
        path: "/meal/category/:name",
        element: <Category />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
