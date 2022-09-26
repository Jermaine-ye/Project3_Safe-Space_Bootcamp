import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Image,
  Avatar,
} from '@mantine/core';

import { BACKEND_URL } from '../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext.js';

import PatientProfile from './PatientProfile.js';
import TherapistInfo from './TherapistInfo';
import CalendarFull from './CalendarFull.js';
import CalendarDashboard from './CalendarDashboard';

export default function SidebarClient() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});
  const [template, setTemplate] = useState();
  const [clientFirstName, setClientFirstName] = useState('');
  const [clientLastName, setClientLastName] = useState('');
  const [clientPhoto, setClientPhoto] = useState('');
  const [idJournal, setIdJournal] = useState();
  const navigate = useNavigate();

  const { user, logout } = useAuth0();
  const { clientInfo, currentUser } = useAuth();

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);
    console.log('c cuser: ', currentUser);
    setClientFirstName(currentUser[0].firstName);
    setClientLastName(currentUser[0].lastName);
    setClientPhoto(currentUser[0].photoLink);
    setIdJournal(currentUser[0].id);

    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails(response.data);
        console.log('client Details: ', response.data);
      });
    }
    console.log(clientDetails);

    console.log(currentUser[0].id);
  }, [clientId]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  return (
    // <div className="Side-bar-column">
    <Grid grow>
      {/* <Container className="SideBar-Content-body" size="xl" px="xs"> */}

      <Card className="Side-bar" radius="md" shadow="sm" p="md">
        <Image
          className="SideBar-profile-pic"
          // width={300}
          radius="xl"
          src={clientPhoto}
          alt="User Profile"
        />
        <br />
        <Title size={30} color="White">
          Welcome {clientFirstName}
        </Title>

        <div className="Sidebar-a">
          <Link to="/client/dashboard">Home</Link>
          <br />
          <br />

          <Link to="/client/:clientId">Profile</Link>
          <br />
          <br />
          <Link to="/client/therapist">Therapist Info</Link>
          <br />
          <br />
          <Link to={`/client/${idJournal}/journals`}>Journal List</Link>
          <br />
          <br />
          <Link to="/client/newjournal">Current Journal Entry</Link>
          <br />
          <br />
        </div>
        <Button
          className="Sidebar-logout-btn"
          variant="light"
          onClick={() => {
            logout();
          }}
        >
          LOG OUT
        </Button>
      </Card>
      {/* </Container> */}
      {/* <Outlet /> */}
    </Grid>
    // </div>
  );
}
