import axios from 'axios';
import React, { useState, useEffect } from 'react';

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

const MemoForm = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [date, setDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [therapistName, setTherapistName] = useState('');
  const [general, setGeneral] = useState('');
  const [behavior, setBehavior] = useState('');
  const [contentTherapy, setContentTherapy] = useState('');
  const [therapeuticInt, setTherapeuticInt] = useState('');
  const [diagnoses, setDiagnoses] = useState('');
  const [instructions, setInstructions] = useState('');
  const [riskFactors, setRiskFactors] = useState('');
  const params = useParams();
  const Navigate = useNavigate();

  const callApi = async () => {
    // let response = await axios.get(`${BACKEND_URL}/clients/jon@snow.com`);

    // should be getting info from the therapist side instead of the client??
    let response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);
    // it should be ${emailClient}
    console.log('user detailed information: ', response.data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('user info:', user);
      console.log('email:', user.email);
      // setinput1();
      console.log(user);
      callApi();
    }
  }, [user]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'date':
        setDate(event.target.value);
        break;
      case 'general':
        setGeneral(event.target.value);
        break;
      case 'behavior':
        setBehavior(event.target.value);
        break;
      case 'content':
        setContentTherapy(event.target.value);
        break;
      case 'therapeutic':
        setTherapeuticInt(event.target.value);
        break;
      case 'diagnoses':
        setDiagnoses(event.target.value);
        break;
      case 'instructions':
        setInstructions(event.target.value);
        break;
      case 'risk':
        setRiskFactors(event.target.value);
        break;
      default:
    }
  };

  //   const params = useParams();
  //   if (sightingIndex !== params.sightingIndex) {
  //     setSightingIndex(params.sightingIndex);
  //   }

  //   // Store a new JSX element for each property in sighting details
  //   const sightingDetails = [];
  //   if (sighting) {
  //     for (const key in sighting) {
  //       sightingDetails.push(
  //         <Card.Text key={key}>{`${key}: ${sighting[key]}`}</Card.Text>
  //       );
  //     }

  const handleSubmit = (e) => {
    e.preventDefault();

    //back end route is different from BE route.
    //check what type of data you want get access first then check index.js app.use (all the way below to see the relatvent router to grab the get/put etc)

    // memo/${:clientId}/${:memoId}
    // not front end route like what u have done below!!!
    // should be getting info from the therapist side instead of the client??

    axios
      .post(`${BACKEND_URL}/therapist/patients/jon@snow.com/newmemo`, {
        date,
        general,
        behavior,
        contentTherapy,
        therapeuticInt,
        diagnoses,
        instructions,
        riskFactors,
      })
      .then((res) => {
        setDate('');
        setGeneral('');
        setBehavior('');
        setContentTherapy('');
        setTherapeuticInt('');
        setDiagnoses('');
        setInstructions('');
        setRiskFactors('');

        console.log('resdata:', res.data);
        Navigate(`/journals/${res.data.id}`);
        // see if can grab the client ID and memo ID from the back end in res.data.id
        // /therapist/patients/:clientId/memos/:memoId
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container className="Form-body" size="sm" px="xs">
      <Grid justify="center" align="center">
        <form onSubmit={handleSubmit}>
          <label>Memo Entry</label>

          <br />

          <br />
          <label>Date:</label>
          <DatePicker
            name="date"
            placeholder="Pick date"
            value={date}
            onChange={setDate}
          />
          <br />

          <label>General Notes:</label>
          <Textarea name="general" value={general} onChange={handleChange} />
          <br />
          <label>Behaviour Observations:</label>
          <Textarea name="behavior" value={behavior} onChange={handleChange} />
          <br />
          <label>Content of Today's Therapy:</label>
          <Textarea
            name="content"
            value={contentTherapy}
            onChange={handleChange}
          />
          <br />
          <label>Any Therapeutic Intervention Needed?</label>
          <Textarea
            name="therapeutic"
            value={therapeuticInt}
            onChange={handleChange}
          />
          <br />
          <label>Diagnoses:</label>
          <Textarea
            name="diagnoses"
            value={diagnoses}
            onChange={handleChange}
          />
          <br />

          <label>Instructions/Recommendations/Plans</label>
          <Textarea
            name="instructions"
            value={instructions}
            onChange={handleChange}
          />
          <br />
          <label>Notes and Risk Factors:</label>
          <Textarea name="risk" value={riskFactors} onChange={handleChange} />

          <br />
          <Button variant="light" type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    </Container>
  );
};

export default MemoForm;




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

const JournalForm = () => {
  const params = useParams();
  const Navigate = useNavigate();
  const [updatedAt, setUpdatedAt] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [dueDate, setDueDate] = useState('');

  // get all to know there is an empty null=> new journal entry =>
  const [clientId, setClientId] = useState('');
  const [journalId, setJournalId] = useState('');

  const [latestJournalEntry, setLatestJournalEntry] = useState('');

  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');

  //in real app, pls do not hardcode JonSnow, instead extract the user from AuthProvider
  const callApi = async () => {
    // let response = await axios.get(`${BACKEND_URL}/clients/jon@snow.com`);
    let response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);
    // it should be ${emailClient}
    console.log('user detailed information: ', response.data);
    console.log(response.data.journalentries);
    setLatestJournalEntry(response.data.journalentries.length);
    console.log(
      'latest journal entry index position Id:',
      response.data.journalentries[0].id
    );

    setJournalId(response.data.journalentries[0].id);
    console.log(response.data.journalentries[0].id);

    template1Qns(response.data.journalentries[0].journaltemplateId);

    setDueDate(response.data.journalentries[1].dueBy);
    console.log('client Id: ', response.data.id);
    setClientId(response.data.id);
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('user info:', user);
      console.log('email:', user.email);
      // setinput1();
      console.log(user);
      callApi();
    }
  }, [user]);

  const template1Qns = (templateid) => {
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
          `/therapist/patients/${res.data.clientId}/journal/${res.data.id}`
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

          <label>Date Due: {new Date(dueDate).toLocaleDateString()}</label>

          <br />
          <br />
          <label>Journal Entry: {latestJournalEntry}</label>

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
