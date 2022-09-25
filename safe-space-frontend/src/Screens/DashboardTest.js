import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ReactDOM from 'react-dom/client';
import SidebarClient from '../Components/SidebarClient';
import { Outlet, useNavigate, Link, useParams } from 'react-router-dom';
import { Button, Card, Text, Title, Grid, Container } from '@mantine/core';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from '../Components/AuthContext';
import { BACKEND_URL } from '../constants';
import PersonalParticularsForm from '../Components/PersonalParticularsForm';
import CalendarDashboard from '../Components/CalendarDashboard';
import CalendarFull from '../Components/CalendarFull';
import QuoteDisplay from '../Components/QuoteDisplay';

const DashboardClientScreen = () => {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});
  const [template, setTemplate] = useState();

  const navigate = useNavigate();
  const { user } = useAuth0();
  const { clientInfo, currentUser } = useAuth();

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);

    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails(response.data);
        console.log('client Details: ', response.data);
      });
    }
    console.log(clientDetails);
  }, [clientId]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  // const {
  //   isAuthenticated,
  //   user,
  //   loginWithRedirect,
  //   logout,
  //   getAccessTokenSilently,
  // } = useAuth0();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     loginWithRedirect();
  //   }
  // }, []);

  return (
    <div className="Dashboard">
      {/* <Outlet /> */}
      <Grid grow>
        <Grid.Col className="Dashboard-sidebar-co" span="auto">
          <SidebarClient />
        </Grid.Col>

        <Grid.Col span={8}>
          <QuoteDisplay />
          <Card shadow="sm" p="md">
            <CalendarDashboard />
            <br />
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default DashboardClientScreen;
