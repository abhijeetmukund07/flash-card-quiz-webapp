import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import CategoryNavs from "./components/categorynavs/CategoryNavs";
function RootLayout() {
  return (
    <div>
      <Navbar />
      <CategoryNavs />
      <Outlet />
    </div>
  );
}

export default RootLayout;
