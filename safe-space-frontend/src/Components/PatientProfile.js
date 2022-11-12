import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Text,
  Container,
  Group,
  NativeSelect,
  Image,
} from "@mantine/core";

import { BACKEND_URL } from "../constants.js";
import { useAuth } from "./AuthContext.js";

export default function PatientProfile() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});

  const navigate = useNavigate();

  const { updateTemplate, updateClientEmail } = useAuth();

  useEffect(() => {
    if (clientId) {
      axios
        .get(`${BACKEND_URL}/clients/key/${params.clientId}`)
        .then((response) => {
          setClientDetails(response.data);
          updateClientEmail(response.data.email);
        });
    }
  }, [clientId]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  const data = [
    { value: 0, label: "Choose one" },
    { value: 1, label: "Template One" },
    { value: 2, label: "Template Two" },
  ];

  return (
    <div>
      <Container>
        <Card withBorder shadow="sm" radius="md">
          <div
            style={{
              width: 300,

              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              src={clientDetails.photoLink}
              alt="Patient Picture"
              className="consultation"
            />
          </div>

          <Text weight={700}>Patient Name:</Text>
          <Text>
            {" "}
            {clientDetails.firstName}
            {clientDetails.lastName}
          </Text>
          <Button
            variant="light"
            onClick={() =>
              navigate(`/therapist/patients/${clientId}/newjournal`)
            }
          >
            Journal Form Creation
          </Button>

          <Container size="xs" px="xs">
            <NativeSelect
              size="sm"
              data={data}
              label="Select a Template"
              placeholder="Pick one or two"
              onChange={(e) => updateTemplate(e.target.value)}
            />
          </Container>

          <Container size="xs" px="xs">
            <Text>Age:{clientDetails.ageClient}</Text>
            <Text>Gender:{clientDetails.gender}</Text>
            <Text>Phone Number:{clientDetails.phoneNumber}</Text>
            <Text>Email:{clientDetails.email}</Text>
            <Text>Marital Status:{clientDetails.maritalStatus}</Text>
            <br />
          </Container>
          <Group position="center" spacing="lg">
            <Button
              variant="light"
              onClick={() =>
                navigate(`/therapist/patients/${clientId}/newmemo`)
              }
            >
              Memo Form Creation
            </Button>
            <Button
              variant="light"
              onClick={() =>
                navigate(`/therapist/patients/${clientId}/allmemo`)
              }
            >
              Memo List for this patient
            </Button>

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
              Back to Patient List
            </Button>
          </Group>
        </Card>
      </Container>
    </div>
  );
}
