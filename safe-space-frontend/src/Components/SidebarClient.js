import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Text, Title, Grid, Container } from '@mantine/core';

import { BACKEND_URL } from '../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext.js';

import PatientProfile from './PatientProfile.js';
import TherapistInfo from './TherapistInfo';

export default function SidebarClient() {
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
      axios
        .get(`${BACKEND_URL}/clients/key/${params.clientId}`)
        .then((response) => {
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

  return (
    <div className="Page-body">
      SidebarClient
      <Container className="Content-body" size="md" px="xs">
        <Link to="/client/:clientId">Profile</Link>
        <br />
        <br />
        <Link to="/client/therapist">Therapist Info</Link>
        <br />
        <br />
        <Link to="/client/journals">Journal List</Link>
        <br />
        <br />
      </Container>
    </div>
  );
}
