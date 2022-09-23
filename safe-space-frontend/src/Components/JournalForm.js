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
  const params = useParams();
  const Navigate = useNavigate();
  const [updatedAt, setUpdatedAt] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { clientInfo, therapistInfo } = useAuth();

  const [dueDate, setDueDate] = useState('');

  // get all to know there is an empty null=> new journal entry =>
  const [clientId, setClientId] = useState('');
  const [journalId, setJournalId] = useState('');
  const [journalEntryNum, setJournalEntryNum] = useState('');

  const [therapistFirstName, setTherapistFirstName] = useState('');
  const [therapistLastName, setTherapistLastName] = useState('');

  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');

  //in real app, pls do not hardcode JonSnow, instead extract the user from AuthProvider
  const callApi = async () => {
    // let response = await axios.get(`${BACKEND_URL}/clients/jon@snow.com`);
    let response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);
    // it should be ${emailClient}
    console.log('user detailed information: ', response.data);
    console.log(response.data.journalentries.length);

    console.log(therapistInfo);

    setTherapistFirstName(response.data.therapists[0].firstName);
    setTherapistLastName(response.data.therapists[0].lastName);

    setJournalEntryNum(response.data.journalentries.length);

    templateQns(response.data.journalentries[0].journaltemplateId);

    setDueDate(response.data.journalentries[1].dueBy);
    console.log('client Id: ', response.data.id);
    setClientId(response.data.id);
  };

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

  const templateQns = (templateid) => {
    if (templateid == 1) {
      setTitle1('Topics  I want to discuss and goals for the session: ');
      setTitle2(
        `How do I feel about these things and how do they affect my life? Do I already see ways to help myself get over them?`
      );
      setTitle3(`Main insights and takeaways from session: 
  (including possible actions and follow ups)`);
    } else if (templateid == 2) {
      setTitle1('Focus Topics and goals for the session:');
      setTitle2(
        `How did my partner react to this discussion? What feelings and insights did he/she express?`
      );
      setTitle3(`My main insights and takeaways from session:
  (including possible actions and follow ups)`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test: ', journalId);
    console.log(updatedAt);
    console.log(input1);
    console.log(input2);
    console.log(input3);
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
        Navigate(
          // `/therapist/patients/${res.data.clientId}/journal/${res.data.id}`
          `/client/journals/${res.data.id}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="Form-body" size="sm" px="xs">
      <Grid justify="center" align="center">
        <form onSubmit={handleSubmit}>
          <label>Journal Entry</label>
          <br />
          <br />
          <label>
            Therapist: {therapistFirstName} {therapistLastName}
          </label>
          <br />
          <br />
          <label>Date Due: {new Date(dueDate).toLocaleDateString()}</label>

          <br />
          <br />
          <label>Journal Entry: {journalEntryNum}</label>

          <br />

          <br />
          <label>Date:</label>
          <DatePicker
            placeholder="Pick date"
            value={updatedAt}
            onChange={setUpdatedAt}
          />
          <br />

          <label>{title1}</label>
          <Textarea
            name="input1"
            value={input1}
            onChange={(event) => setInput1(event.currentTarget.value)}
            placeholder="what has been bothering you?"
          />
          <br />
          <label>{title2}</label>
          <Textarea
            name="input2"
            value={input2}
            onChange={(event) => setInput2(event.currentTarget.value)}
            placeholder="what are your thoughts?"
          />
          <br />
          <label>{title3}</label>
          <Textarea
            name="input3"
            value={input3}
            onChange={(event) => setInput3(event.currentTarget.value)}
            placeholder="what are your thoughts?"
          />
          <br />
          <Button variant="light" type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default JournalForm;
