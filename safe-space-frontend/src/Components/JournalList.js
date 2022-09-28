import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext.js';
import { Card, Text, Container } from '@mantine/core';

export default function JournalList() {
  const [journalList, setJournalList] = useState([]);

  const navigate = useNavigate();
  const { user } = useAuth0();
  const { clientInfo } = useAuth();

  useEffect(() => {
    axios.get(`${BACKEND_URL}/clients/${user.email}`).then((response) => {
      setJournalList(response.data.journalentries);
      console.log(response.data);
    });
    console.log(clientInfo);
    console.log(journalList);
  }, []);

  let finalList;
  if (journalList && journalList.length !== 0) {
    finalList = journalList.map((journalInfo) => {
      console.log('journalinfo: ', journalInfo);
      console.log(journalInfo.id);

      return (
        <div>
          <Container size="xs" px="xs">
            <Link
              to={`/client/journals/${journalInfo.id}`}
              key={journalInfo.id}
            >
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Text>Journal ID: {journalInfo.id}</Text>
                <Text></Text>
                <Text size="sm" color="dimmed">
                  DUE DATE: <br />
                  {new Date(journalInfo.dueBy).toLocaleDateString()}
                </Text>
                <br />
                <Text size="sm" color="dimmed">
                  UPDATED AT:
                  <br />
                  {new Date(journalInfo.updatedAt).toLocaleDateString()}
                </Text>
              </Card>
            </Link>
          </Container>
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
