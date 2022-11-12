import React, { useEffect, useState } from "react";
import axios from "axios";
import SidebarClient from "../Components/SidebarClient";
import { Outlet, useParams } from "react-router-dom";
import { Card, Grid } from "@mantine/core";

import { BACKEND_URL } from "../constants";
import QuoteDisplay from "../Components/QuoteDisplay";

const DashboardClientScreen = () => {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});

  useEffect(() => {
    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails(response.data);
      });
    }
  }, [clientId]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  return (
    <div className="Dashboard">
      <Grid grow>
        <Grid.Col className="Dashboard-sidebar-co" span="auto">
          <SidebarClient />
        </Grid.Col>

        <Grid.Col span={8}>
          <QuoteDisplay />
          <Card shadow="sm" p="md">
            <Outlet />
            <br />
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default DashboardClientScreen;
