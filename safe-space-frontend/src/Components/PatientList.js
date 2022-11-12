import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card, Text, Container } from "@mantine/core";

export default function PatientList() {
  const navigate = useNavigate();

  const { user } = useAuth0();
  const [clientList, setClientList] = useState();

  let finalList;

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/therapists/clients/${user.email}`)
      .then((response) => {
        setClientList(response.data);
      });
  }, []);

  if (clientList && clientList.length !== 0) {
    finalList = clientList.map((clientInfo) => {
      return (
        <div key={clientInfo.client.id}>
          <Link
            to={`/therapist/patients/${clientInfo.client.id}`}
            key={clientInfo.client.id}
          >
            <Card shadow="sm" p="lg" radius="md" withBorder>
              {clientInfo.client.id}

              <Text weight={500}>
                {clientInfo.client.firstName}
                {` `}
                {clientInfo.client.lastName}
              </Text>

              <Text size="sm" color="dimmed">
                Patient Infomation
              </Text>

              <Text size="sm" color="dimmed">
                Journal Log
              </Text>
              <Text size="sm" color="dimmed">
                Appointment Memo
              </Text>
            </Card>
          </Link>
        </div>
      );
    });
  }
  return (
    <div>
      <Container>
        <h2>PatientList</h2>

        {clientList && clientList.length !== 0 ? <ul>{finalList}</ul> : null}

        <Button
          variant="light"
          onClick={(e) => navigate(`/therapist/dashboard`)}
        >
          Back
        </Button>
      </Container>
    </div>
  );
}
