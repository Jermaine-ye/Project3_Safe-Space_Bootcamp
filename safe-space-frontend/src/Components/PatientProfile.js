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
  NativeSelect,
  Image,
} from "@mantine/core";

import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";

export default function PatientProfile() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});

  const navigate = useNavigate();

  const { user } = useAuth0();
  const { clientInfo, currentUser, updateTemplate, updateClientEmail } =
    useAuth();

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);

    if (clientId) {
      axios
        .get(`${BACKEND_URL}/clients/key/${params.clientId}`)
        .then((response) => {
          setClientDetails(response.data);
          updateClientEmail(response.data.email);
        });
    }
    console.log(clientDetails);
  }, [clientId]);

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

  const data = [
    { value: 0, label: "Choose one" },
    { value: 1, label: "Template One" },
    { value: 2, label: "Template Two" },
  ];

  return (
    <div>
      <Container>
        {/* <Text size="xl">Patient Profile</Text> */}
        <Text>
          Patient Name: {clientDetails.firstName}
          {clientDetails.lastName}
        </Text>

        <Image
          radius="md"
          height={300}
          src={`${clientDetails.photoLink}`}
          alt={`${clientDetails.photoLink}`}
        />

        <Button
          variant="light"
          onClick={() => navigate(`/therapist/patients/${clientId}/newjournal`)}
        >
          Journal Form Creation
        </Button>
        {/* <select
          name="template"
          onChange={(e) => updateTemplate(e.target.value)}
        >
          {/*set value once you know and setstate in select. axios.put after. */}
        {/* <option value={0}>Select a Template</option>
          <option value={1}>Template one</option>
          <option value={2}>Template two</option> */}
        {/* </select> */}

        <NativeSelect
          data={data}
          label="Select a Template"
          placeholder="Pick one or two"
          onChange={(e) => updateTemplate(e.target.value)}
        />

        <Container size="xs" px="xs">
          <Text>Age:{clientDetails.ageClient}</Text>
          <Text>Gender:{clientDetails.gender}</Text>
          <Text>Phone Number:{clientDetails.phoneNumber}</Text>
          <Text>Email:{clientDetails.email}</Text>
          <Text>Marital Status:{clientDetails.maritalStatus}</Text>
          <br />
          {/*Information from memo?*/}
        </Container>
        <Group position="center" spacing="lg">
          {/* <button>Deactivate</button> */}
          <Button
            variant="light"
            onClick={() => navigate(`/therapist/patients/${clientId}/history`)}
          >
            Patient Apppointment Log
          </Button>
          <Button
            variant="light"
            onClick={() => navigate(`/therapist/patients/${clientId}/newmemo`)}
          >
            Memo Form Creation
          </Button>
          <Button
            variant="light"
            onClick={() => navigate(`/therapist/patients/${clientId}/allmemo`)}
          >
            Memo List for this patient
          </Button>
          {/*Create new route in app.js and update the route path here!!!!*/}
          <Button
            variant="light"
            onClick={() => navigate(`/therapist/${clientId}/journals/`)}
          >
            Journal List for this patient
          </Button>
          <Button
            variant="light"
            onClick={(e) => navigate(`/therapist/patients/`)}
          >
            Back
          </Button>
        </Group>
      </Container>
    </div>
  );
}
