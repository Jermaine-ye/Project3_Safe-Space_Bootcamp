import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { user } from '@auth0/auth0-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Form,
  Input,
  Textarea,
} from '@mantine/core';

import { BACKEND_URL } from '../constants.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext';

export default function MemoSingle(props) {
  const navigate = useNavigate();
  const { user, isAuthenticated, therapistInfo } = useAuth0();
  const [clientId, setClientId] = useState('');
  const [memoId, setMemoId] = useState('');
  const [memoDetails, setMemoDetails] = useState('');
  const [clientDetails, setClientDetails] = useState('');

  // to test if this theory works
  const [generalInput, setGeneralInput] = useState('');
  const [behaviorInput, setBehaviorInput] = useState('');
  const [contenttherapyInput, setContenttherapyInput] = useState('');
  const [therapeuticintInput, setTherapeuticintInput] = useState('');
  const [diagnosesInput, setDiagnosesInput] = useState('');
  const [instructionsInput, setInstructionsInput] = useState('');
  const [riskfactorsInput, setRiskfactorsInput] = useState('');
  const [clientFirstName, setClientFirstName] = useState('');
  const [clientLastName, setClientLastName] = useState('');
  const [updated, setUpdated] = useState('');

  const getAllInfo = async () => {};

  useEffect(() => {
    if (memoId) {
      axios.get(`${BACKEND_URL}/memos/single/${memoId}`).then((res) => {
        setMemoDetails(res.data);
        console.log(res.data);
        // setMemoDetails(res.data);
        // console.log("memo details: ", res.data);
        // setGeneralInput(res.data[0].generalInput);
        // setBehaviorInput(res.data[0].behaviorInput);
        // setContenttherapyInput(res.data[0].contenttherapyInput);
        // setTherapeuticintInput(res.data[0].therapeuticintInput);
        // setDiagnosesInput(res.data[0].diagnosesInput);
        // setInstructionsInput(res.data[0].instructionsInput);
        // setRiskfactorsInput(res.data[0].riskfactorsInput);
      });
    }
    // getting client info is working.
    //   if (clientId) {
    //     axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
    //       setClientDetails(response.data);
    //       console.log('client details:', response.data);
    //       setClientFirstName(response.data.firstName);
    //       setClientLastName(response.data.lastName);
    //     });
    //   }

    //   console.log(memoDetails[0]);
    // }, [clientId, memoId]);
    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails(response.data);
        console.log('client details:', response.data);
        setClientFirstName(response.data.firstName);
        setClientLastName(response.data.lastName);
        setClientId(response.data.lastName);
        setUpdated(response.data.lastName);
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
  // let oneMemoDetails = memoDetails[0];
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
            <Text>
              {new Date(memoDetails.updatedAt).toLocaleDateString()}{' '}
              {/* grab date from db */}
            </Text>

            <br />

            <Text weight={700}>
              {' '}
              {/* Patient Name: {clientDetails.firstName} {clientDetails.lastName} */}
              Patient Name:
            </Text>
            <Text>
              {' '}
              {clientDetails.firstName} {clientDetails.lastName}
            </Text>

            <br />

            <Text weight={700}>General Notes:</Text>
            {memoDetails.generalInput}
            {/* insert memo info */}
            {/* {memoDetails} */}
            <br />
            <br />
            <Text weight={700}>Behaviour Observations:</Text>
            {memoDetails.behaviorInput}
            {/* {memoDetails.behaviorInput} */}
            <br />
            <br />
            <Text weight={700}>Content of Today's Therapy:</Text>
            {memoDetails.contenttherapyInput}
            {/* insert memo info */}
            {/* {memoDetails.contenttherapyInput} */}
            <br />
            <br />
            <Text weight={700}>Any Therapeutic Intervention Needed?</Text>
            {memoDetails.therapeuticintInput}
            {/* insert memo info */}
            {/* {memoDetails.therapeuticintInput} */}
            <br />
            <br />
            <Text weight={700}>Diagnoses:</Text>
            {memoDetails.diagnosesInput}
            {/* insert memo info */}
            {/* {memoDetails.diagnosesInput} */}
            <Text weight={700}>Instructions/Recommendations/Plans</Text>
            {memoDetails.instructionsInput}
            {/* insert memo info */}
            {/* {memoDetails.instructionsInput} */}
            <br />
            <br />
            <Text weight={700}>Notes and Risk Factors:</Text>
            {memoDetails.riskfactorsInput}
            {/* insert memo info */}
            {/* {memoDetails.riskfactorsInput} */}
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
