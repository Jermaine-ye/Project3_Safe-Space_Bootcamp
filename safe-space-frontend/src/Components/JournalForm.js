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
import { DatePicker } from '@mantine/dates';
import { BACKEND_URL } from '../constants.js';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from './AuthContext';

const JournalForm = () => {
  const navigate = useNavigate();
  const [updatedAt, setUpdatedAt] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { clientInfo, therapistInfo, template } = useAuth();

  const [dueDate, setDueDate] = useState('');

  // get all to know there is an empty null=> new journal entry =>
  const [clientId, setClientId] = useState('');
  const [journalId, setJournalId] = useState('');
  const [dueBy, setDueBy] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [journalEntry, setJournalEntry] = useState('');
  const [therapistFirstName, setTherapistFirstName] = useState('');
  const [therapistLasttName, setTherapistLastName] = useState('');

  // in real app, pls do not hardcode JonSnow, instead extract the user from AuthProvider
  const callApi = async () => {
    // let response = await axios.get(`${BACKEND_URL}/clients/jon@snow.com`);
    let response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);
    // it should be ${emailClient}
    console.log('user detailed information: ', response.data);

    console.log(therapistInfo);

    console.log('client Id: ', response.data.id);
    console.log('Journal Id: ', response.data.journalentries[0].id);
    console.log(
      'Template Id: ',
      response.data.journalentries[0].journaltemplateId
    );
    setTemplateId(response.data.journalentries[0].journaltemplateId);
    setJournalEntry(response.data.journalentries.length);
    setDueBy(response.data.journalentries[0].dueBy);

    setJournalId(response.data.journalentries[0].id);
    setTherapistLastName(response.data.journalentries[0].therapist.lastName);
    setTherapistFirstName(response.data.journalentries[0].therapist.firstName);
    setClientId(response.data.id);
  };

  // //in real app, pls do not hardcode JonSnow, instead extract the user from AuthProvider
  // const callApi = async () => {
  //   // let response = await axios.get(`${BACKEND_URL}/clients/jon@snow.com`);
  //   let response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);
  //   // it should be ${emailClient}
  //   console.log('user detailed information: ', response.data);
  //   console.log(response.data.journalentries.length);

  //   console.log(therapistInfo);

  //   setTherapistFirstName(response.data.therapists[0].firstName);
  //   setTherapistLastName(response.data.therapists[0].lastName);

  //   setJournalEntryNum(response.data.journalentries.length);

  //   templateQns(response.data.journalentries[0].journaltemplateId);

  //   setDueDate(response.data.journalentries[1].dueBy);
  //   console.log('client Id: ', response.data.id);
  //   // setJournalId()
  //   setClientId(response.data.id);
  // };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('user info:', user);
      console.log('email:', user.email);
      console.log('therapistInfo: ', therapistInfo);
      // setinput1();
      console.log(user);
      callApi();
    }
  }, [user]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(updatedAt);
  //   console.log(input1);
  //   console.log(input2);
  //   console.log(input3);
  //   axios.post(`${BACKEND_URL}/journals/${clientInfo.id}`, {
  //     updatedAt: new Date(),
  //     input1: input1,
  //     input2: input2,
  //     input3: input3,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test: ', journalId);

    axios

      .put(`${BACKEND_URL}/journals/${journalId}`, {
        updatedAt,
        input1,
        input2,
        input3,
      })
      .then((res) => {
        setUpdatedAt('');
        setInput1('');
        setInput2('');
        setInput3('');

        console.log('resdata:', res.data);
        console.log('Journal Submit Success!!');
        navigate(
          // `/therapist/patients/${res.data.clientId}/journal/${res.data.id}`
          `/client/journals/${res.data.id}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="Form-body" px="xs">
      <Grid justify="center" align="center">
        <Card withBorder shadow="sm" radius="md">
          <form onSubmit={handleSubmit}>
            <Text weight={700}>Journal Entry:</Text> <Text>{journalEntry}</Text>
            <Text weight={700}>Therapist:</Text>{' '}
            <Text>
              {therapistFirstName} {therapistLasttName}
            </Text>
            <br />
            <Text weight={700}>
              {user[`https://any-namespace/roles`].length === 1 ? (
                <div>
                  Date:
                  <DatePicker
                    placeholder="Pick date"
                    value={dueBy}
                    onChange={(e) => setDueBy(e.target.value)}
                  />
                </div>
              ) : (
                <div>Date Due: {new Date(dueBy).toLocaleDateString()}</div>
              )}
            </Text>
            <br />
            <br />
            <Text weight={700}>
              {templateId === 1
                ? 'Topics  I want to discuss and goals for the session: '
                : 'Focus Topics and goals for the session:'}
            </Text>
            <Textarea
              name="input1"
              value={input1}
              onChange={(event) => setInput1(event.currentTarget.value)}
              placeholder="what has been bothering you?"
            />
            <br />
            <br />
            <Text weight={700}>
              {templateId === 1
                ? `How do I feel about these things and how do they affect my life? Do I already see ways to help myself get over them?`
                : `How did my partner react to this discussion? What feelings and insights did he/she express?`}
            </Text>
            <Textarea
              name="input2"
              value={input2}
              onChange={(event) => setInput2(event.currentTarget.value)}
              placeholder="what are your thoughts?"
            />
            <br />
            <br />
            <Text weight={700}>
              {templateId === 1
                ? `Main insights and takeaways from session: 
  (including possible actions and follow ups)`
                : `My main insights and takeaways from session:
  (including possible actions and follow ups)`}
            </Text>
            <Textarea
              name="input3"
              value={input3}
              onChange={(event) => setInput3(event.currentTarget.value)}
              placeholder="what are your thoughts?"
            />
            <br />
            <br />
            <Button variant="light" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </Grid>
      {/* <Button variant="light" onClick={(e) => navigate(`/client/dashboard`)}>
        Back
      </Button> */}
    </Container>
  );
};

export default JournalForm;
