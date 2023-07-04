import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      Hello
      <Outlet />
    </div>
  );
};

export default MainLayout;
