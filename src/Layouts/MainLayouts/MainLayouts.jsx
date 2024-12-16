import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Sheard/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div className="md:w-11/12 md:mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
