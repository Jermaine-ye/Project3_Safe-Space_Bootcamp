import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Text, Title, Container, Image } from "@mantine/core";

import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";

export default function ClientProfile() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});

  const { user } = useAuth0();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/clients/${user.email}`).then((response) => {
      setClientDetails(response.data);
    });
  }, [user]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  return (
    <div>
      <Container>
        <Card withBorder shadow="sm" radius="md">
          <Title size={20}>Profile</Title>
          <div
            style={{
              width: 250,
              marginTop: 20,
              marginLeft: "auto",
              marginRight: "auto",
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
          </Container>
        </Card>
      </Container>
    </div>
  );
}
