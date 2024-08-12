import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import CategoryNavs from "./components/categorynavs/CategoryNavs";

function RootLayout() {
  const location = useLocation();
  const hideCategoryNavs =
    location.pathname.startsWith("/admin") || location.pathname === "/admin-login";

  return (
    <div>
      <Navbar />
      {!hideCategoryNavs && <CategoryNavs />}
      <Outlet />
    </div>
  );
}

export default RootLayout;
