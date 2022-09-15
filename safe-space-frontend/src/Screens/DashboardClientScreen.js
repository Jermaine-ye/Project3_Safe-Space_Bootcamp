import React from "react";
import ReactDOM from "react-dom/client";
import SidebarClient from "../Components/SidebarClient";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardClientScreen = () => {
  return (
    <div>
      <SidebarClient />
      <Outlet />
    </div>
  );
};

export default DashboardClientScreen;
