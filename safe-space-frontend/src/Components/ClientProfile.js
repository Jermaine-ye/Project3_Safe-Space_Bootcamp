import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Group,
  Image,
} from '@mantine/core';

import { BACKEND_URL } from '../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext.js';

export default function ClientProfile() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});

  const navigate = useNavigate();

  const { user } = useAuth0();
  const { clientInfo, currentUser, updateTemplate } = useAuth();

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);

    axios.get(`${BACKEND_URL}/clients/${user.email}`).then((response) => {
      setClientDetails(response.data);
    });

    console.log(clientDetails);
  }, [user]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  // const setUser = () => {
  //   setCurrentUser(clientInfo);
  // };

  // //essentially needed to update specfic client.
  // useEffect(() => {
  //   setUser();
  // }, [currentUser]);

  // useEffect(() => {
  //   console.log("inEffect");
  //   // If there is a patientId, retrieve the listing data
  //   console.log(user.email);
  //   axios.get(`${BACKEND_URL}/clients/${user.email}`).then((response) => {
  //     setClientDetails(response.data);
  //   });

  //   // Only run this effect on change to patientId
  // }, []);

  // const params = useParams();
  // if (patientId !== params.patientId) {
  //   setPatientId(params.patientId);
  // }

  // Store a new JSX element for each property in listing details
  // const listingDetails = [];
  // if (listing) {
  //   for (const key in listing) {
  //     listingDetails.push(
  //       <Card.Text key={key}>{`${key}: ${listing[key]}`}</Card.Text>
  //     );
  //   }
  // }

  return (
    <div>
      <Container>
        <Card withBorder shadow="sm" radius="md">
          <Title size={20}>Profile</Title>
          {/* <Image
          radius="md"
          width={300}
          src={`${clientDetails.photoLink}`}
          alt={`${clientDetails.photoLink}`}
        /> */}
          <div
            style={{
              width: 250,
              marginTop: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 20,
            }}
          >
            <Image
              src={clientDetails.photoLink}
              alt={clientDetails.photoLink}
              className="consultation"
            />
          </div>

          <Text weight={700}>Patient Name:</Text>
          <Text>
            {clientDetails.firstName}
            {clientDetails.lastName}
          </Text>

          <Container size="xs" px="xs">
            <Text weight={700}>Age:</Text>
            <Text>{clientDetails.ageClient}</Text>
            <Text weight={700}>Gender:</Text>
            <Text>{clientDetails.gender}</Text>
            <Text weight={700}>Phone Number:</Text>
            <Text>{clientDetails.phoneNumber}</Text>
            <Text weight={700}>Email:</Text>
            <Text>{clientDetails.email}</Text>
            <Text weight={700}>Marital Status:</Text>
            <Text>{clientDetails.maritalStatus}</Text>
            <br />
            {/*Information from memo?*/}
          </Container>
        </Card>
        {/* <Button variant="light" onClick={(e) => navigate(`/client/dashboard`)}>
          Back
        </Button> */}
      </Container>
    </div>
  );
}
