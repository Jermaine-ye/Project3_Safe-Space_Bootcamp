import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext";
import { BACKEND_URL } from "../constants";
import { useNavigate, Link } from "react-router-dom";

import { Card, Image, Text, Button, Group, Container } from "@mantine/core";
import NavBar from "./NavBar";

export default function EvaluationResults() {
  const { user, getAccessTokenSilently } = useAuth0();
  const { speciality, agePreference, language, religion, gender, clientInfo } =
    useAuth();

  const [assignedTherapists, setAssignedTherapists] = useState([]);

  const navigate = useNavigate();

  const matchTherapist = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });

    await axios.post(
      `${BACKEND_URL}/clients/therapists`,
      {
        specializationID: speciality,
        ageId: agePreference,
        religionId: religion,
        gender: gender,
        languageId: language,
        clientId: clientInfo.id,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const therapistRes = await axios.get(
      `${BACKEND_URL}/clients/${user.email}`
    );

    setAssignedTherapists(therapistRes.data.therapists);
  };

  useEffect(() => {
    matchTherapist();
  }, [user, speciality, agePreference, language, religion, gender]);

  //ON SUBMIT TO SET THERAPIST FOR CLIENT AND UPDATE NECESSARY INFO
  const ChoosenTherapist = async (e) => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });

    await axios.put(
      `${BACKEND_URL}/clients/`,
      {
        emailClient: user.email,
        firstName: clientInfo.firstName,
        lastName: clientInfo.lastName,
        phoneNumber: clientInfo.phoneNumber,
        photoLink: clientInfo.photoLink,
        ageClient: clientInfo.age,
        gender: clientInfo.gender,
        maritalStatus: clientInfo.maritalStatus,
        // eval
        therapistConfirmed: true,
        specializationId: speciality,
        genderPreference: gender,
        ageId: agePreference,
        languageId: language,
        religionId: religion,
        dailymood: null,
        description: null,
        active: true,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    await axios.put(
      `${BACKEND_URL}/clients/clientTherapist`,
      {
        chosenTherapist: true,
        endedAt: null,
        feedback: null,

        therapistID: e,
        clientID: clientInfo.id,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    navigate("/client/dashboard");
  };

  const displayAllTherapists = assignedTherapists.map((elem) => {
    return (
      <Container size={350} px="xs">
        <Card shadow="sm" p="lg" radius="md" withBorder key={elem.id}>
          <Card.Section>
            <div
              style={{
                width: 350,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                radius="md"
                src={`${elem.photoLink}`}
                alt={`${elem.photoLink}`}
                className="consultation"
              />
            </div>
          </Card.Section>
          <Card.Section>
            <Text weight={500}>{`${elem.firstName} ${elem.lastName}`}</Text>
            <Text>{elem.gender}</Text>
            <Text size="sm" color="dimmed">
              {elem.educationQualification}
            </Text>
          </Card.Section>
          <Group>
            <Button
              className="Select-Therapist"
              variant="light"
              color="orange"
              mt="md"
              radius="md"
              value={elem.id}
              onClick={(e) => ChoosenTherapist(elem.id)}
            >
              Pick Me
            </Button>
          </Group>
        </Card>
        <br />
      </Container>
    );
  });

  return (
    <div className="Page-body ">
      <div>
        <NavBar />
      </div>
      <div className="Content-container">
        <div className="Personal-Particulars-div">
          <Container className="Content-body" size="md" px="xs">
            <h2>Evaluation Results</h2>
            <Text color="blue" weight={600}>
              Specialists Chosen For You!
            </Text>
            {/* Display the results here! */}
            {displayAllTherapists}
            <br />

            <Link to="/">Home</Link>
          </Container>
        </div>
      </div>
    </div>
  );
}
