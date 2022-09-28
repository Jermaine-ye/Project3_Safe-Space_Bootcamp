import React from 'react';
import { Outlet } from 'react-router-dom';
import { Card, Grid } from '@mantine/core';
import SidebarTherapist from '../Components/SidebarTherapist';
import QuoteDisplay from '../Components/QuoteDisplay';

const DashboardTherapistScreen = () => {
  return (
    <div className="Dashboard">
      <Grid grow>
        <Grid.Col className="Dashboard-sidebar-co" span="auto">
          <SidebarTherapist />
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

export default DashboardTherapistScreen;
