import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import SidebarClient from "../Components/SidebarClient";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../Components/AuthContext";
import { BACKEND_URL } from "../constants";
import PersonalParticularsForm from "../Components/PersonalParticularsForm";

const DashboardClientScreen = () => {
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <SidebarClient />
      <Outlet />
    </div>
  );
};

export default DashboardClientScreen;
