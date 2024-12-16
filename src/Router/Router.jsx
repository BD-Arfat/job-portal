import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import RegisterForm from "../Form/RegisterForm";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <h3>route not found</h3>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/register", element: <RegisterForm></RegisterForm> },
    ],
  },
]);

export default Router;
