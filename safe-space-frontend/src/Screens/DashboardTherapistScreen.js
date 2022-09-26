import React from "react";
import ReactDOM from "react-dom/client";

import { Outlet, useNavigate, Link, useParams } from "react-router-dom";
import { Button, Card, Text, Title, Grid, Container } from "@mantine/core";
import CalendarDashboard from "../Components/CalendarDashboard";
import SidebarTherapist from "../Components/SidebarTherapist";
import CalendarFull from "../Components/CalendarFull";
import QuoteDisplay from "../Components/QuoteDisplay";
import { useAuth0 } from "@auth0/auth0-react";

const DashboardTherapistScreen = () => {
  const { user, logout } = useAuth0();
  return (
    <div>
      <Link to="/">Home</Link>
      <QuoteDisplay />
      <SidebarTherapist />
      <CalendarDashboard />
      <Outlet />
    </div>
  );
};

export default DashboardTherapistScreen;
