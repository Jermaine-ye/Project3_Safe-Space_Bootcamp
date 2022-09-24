import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Group,
} from "@mantine/core";

export default function JournalList() {
  const [journalList, setJournalList] = useState([]);
  const [journalId, setJournalId] = useState();
  const navigate = useNavigate();
  const { user, clientInfo, TherapistInfo } = useAuth0();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/journals/${clientInfo.id}`).then((response) => {
      setJournalList(response.data);
    });
    console.log(clientInfo);
    console.log(journalList);
  }, []);

  const params = useParams();
  if (journalId !== params.clientId) {
    setJournalId(params.clientId);
  }

  let finalList;
  if (journalList && journalList.length !== 0) {
    finalList = journalList.map((journalInfo) => {
      console.log(journalInfo);

      return (
        <div>
          <Link to={`/client/journals/${journalInfo.id}`} key={journalInfo.id}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Group position="apart" mt="md" mb="xs">
                <Text>JOURNAL ID???</Text>
                <Text>
                  {TherapistInfo.firstName}
                  {TherapistInfo.lastName}
                </Text>
              </Group>
              <Text size="sm" color="dimmed">
                GET DUE DATE
                {journalId.due_by}
              </Text>
              <Text size="sm" color="dimmed">
                CREATED AT OR UPDATED AT
                {journalInfo.updatedAt}
              </Text>
            </Card>
          </Link>
        </div>
      );
    });
  }

  return (
    <div>
      {journalList && journalList.length !== 0 ? <ul>{finalList}</ul> : null}
    </div>
  );
}
