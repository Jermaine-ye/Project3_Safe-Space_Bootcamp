import React from "react";
import ReactDOM from "react-dom/client";

import { Outlet, useNavigate, Link, useParams } from "react-router-dom";
import { Button, Card, Text, Title, Grid, Container } from "@mantine/core";
import CalendarDashboard from "../Components/CalendarDashboard";
import SidebarTherapist from "../Components/SidebarTherapist";
import CalendarFull from "../Components/CalendarFull";
import QuoteDisplay from "../Components/QuoteDisplay";

const DashboardTherapistScreen = () => {
  return (
    // <div>
    //   <Link to="/">Home</Link>
    //   <QuoteDisplay />

    //   <Outlet />

    <div className="Dashboard">
      {/* <DashboardTest /> */}

      <Grid grow>
        <Grid.Col className="Dashboard-sidebar-co" span="auto">
          <SidebarTherapist />
        </Grid.Col>

        <Grid.Col span={8}>
          <QuoteDisplay />
          <Card shadow="sm" p="md">
            {/* <Route path="/client/dashboard" element={<CalendarDashboard />}>
              <Route path="/client/calendar" element={<CalendarFull />} />
            </Route> */}
            {/* <CalendarDashboard /> */}

            <Outlet />
            <br />
          </Card>
        </Grid.Col>
      </Grid>
    </div>
    // </div>
  );
};

export default DashboardTherapistScreen;
