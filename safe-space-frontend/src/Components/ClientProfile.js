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
              width: 300,
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

          <Text>
            Patient Name: {clientDetails.firstName}
            {clientDetails.lastName}
          </Text>

          <Container size="xs" px="xs">
            <Text>Age:{clientDetails.ageClient}</Text>
            <Text>Gender:{clientDetails.gender}</Text>
            <Text>Phone Number:{clientDetails.phoneNumber}</Text>
            <Text>Email:{clientDetails.email}</Text>
            <Text>Marital Status:{clientDetails.maritalStatus}</Text>
            <br />
            {/*Information from memo?*/}
          </Container>
        </Card>
        <Button onClick={(e) => navigate(-1)}>back</Button>
      </Container>
    </div>
  );
}
