import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Card, Text, Container } from '@mantine/core';

import { BACKEND_URL } from '../constants.js';

export default function MemoSingle(props) {
  const navigate = useNavigate();

  const [clientId, setClientId] = useState('');
  const [memoId, setMemoId] = useState('');
  const [memoDetails, setMemoDetails] = useState('');
  const [clientDetails, setClientDetails] = useState('');

  useEffect(() => {
    if (memoId) {
      axios.get(`${BACKEND_URL}/memos/single/${memoId}`).then((res) => {
        setMemoDetails(res.data);
        console.log(res.data);
      });
    }

    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails(response.data);
        console.log('client details:', response.data);
      });
    }

    console.log(memoDetails[0]);
  }, [clientId, memoId]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  if (memoId !== params.memoId) {
    setMemoId(params.memoId);
  }

  return (
    <div>
      <Container className="Form-body" size="sm" px="xs">
        <Card withBorder shadow="sm" radius="md">
          <form>
            <br />
            <Text size={20} weight={700}>
              Memo Entry
            </Text>
            <br />

            <Text weight={700}>Date:</Text>
            <Text>{new Date(memoDetails.updatedAt).toLocaleDateString()} </Text>

            <br />

            <Text weight={700}>Patient Name:</Text>
            <Text>
              {clientDetails.firstName} {clientDetails.lastName}
            </Text>

            <br />

            <Text weight={700}>General Notes:</Text>
            {memoDetails.generalInput}

            <br />
            <br />
            <Text weight={700}>Behaviour Observations:</Text>
            {memoDetails.behaviorInput}

            <br />
            <br />
            <Text weight={700}>Content of Today's Therapy:</Text>
            {memoDetails.contenttherapyInput}

            <br />
            <br />
            <Text weight={700}>Any Therapeutic Intervention Needed?</Text>
            {memoDetails.therapeuticintInput}

            <br />
            <br />
            <Text weight={700}>Diagnoses:</Text>
            {memoDetails.diagnosesInput}

            <Text weight={700}>Instructions/Recommendations/Plans</Text>
            {memoDetails.instructionsInput}

            <br />
            <br />
            <Text weight={700}>Notes and Risk Factors:</Text>
            {memoDetails.riskfactorsInput}

            <br />
            <br />
          </form>
        </Card>
        <button
          onClick={(e) => navigate(`/therapist/patients/${clientId}/allmemo`)}
        >
          back
        </button>
      </Container>
    </div>
  );
}
