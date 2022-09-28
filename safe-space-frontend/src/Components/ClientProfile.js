import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Group,
  Image,
} from "@mantine/core";

import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";

export default function ClientProfile() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});

  const navigate = useNavigate();

  const { user } = useAuth0();

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
