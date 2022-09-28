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

export default function JournalListTherapist() {
  const [journalList, setJournalList] = useState([]);

  const navigate = useNavigate();

  const { currentUserEmail, clientInfo, TherapistInfo } = useAuth();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/clients/${currentUserEmail}`).then((response) => {
      setJournalList(response.data.journalentries);
      console.log(response.data);
    });
    console.log(`HELLO WHY`, clientInfo);
    console.log(`list of journals`, journalList);
    console.log(`email to grab all journals`, currentUserEmail);
  }, []);

  let finalList;
  if (journalList && journalList.length !== 0) {
    finalList = journalList.map((journalInfo) => {
      console.log("journalinfo: ", journalInfo);
      console.log(journalInfo.id);

      return (
        <div>
          <Link to={`/client/journals/${journalInfo.id}`} key={journalInfo.id}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Text>Journal ID: {journalInfo.id}</Text>

              <Text size="sm" color="dimmed">
                DUE DATE: <br />
                {new Date(journalInfo.dueBy).toLocaleDateString()}
              </Text>
              <Text size="sm" color="dimmed">
                CREATED AT OR UPDATED AT:
                <br />
                {new Date(journalInfo.updatedAt).toLocaleDateString()}
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
      <Button variant="light" onClick={(e) => navigate(-1)}>
        Back
      </Button>
    </div>
  );
}
