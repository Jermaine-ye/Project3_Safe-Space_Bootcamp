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

const JournalForm = () => {
  const [date, setDate] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const [dueDate, setDueDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [therapistName, setTherapistName] = useState('');
  // const [templateid, setTemplateId] = useState('');
  const templateid = 1;

  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');

  const Navigate = useNavigate();

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'date':
        setDate(event.target.value);
        break;
      case 'input1':
        setInput1(event.target.value);
        break;
      case 'input2':
        setInput2(event.target.value);
        break;
      case 'input3':
        setInput3(event.target.value);
        break;
      default:
    }
  };

  const template1Qns = (templateid) => {
    if (templateid == 1) {
      setTitle1('Topics  I want to discuss and goals for the session: ');
      setTitle2(
        `How do I feel about these things and how do they affect my life? ${(
          <br />
        )}Do I already see ways to help myself get over them?`
      );
      setTitle3(`Main insights and takeaways from session: ${(<br />)}
(including possible actions and follow ups)`);
    } else if (templateid == 2) {
      setTitle1('Focus Topics and goals for the session:');
      setTitle2(
        `How did my partner react to this discussion? ${(
          <br />
        )}What feelings and insights did he/she express?`
      );
      setTitle3(`My main insights and takeaways from session: ${(<br />)}
(including possible actions and follow ups)`);
    }
  };

  // Need to get the set template and set the due date & Journal ID & Therapist ID & Template ID
  // const Sighting = () => {
  // const [sightingIndex, setSightingIndex] = useState();
  // const [sighting, setSighting] = useState();

  // useEffect(() => {
  //   // If there is a sightingIndex, retrieve the sighting data
  //   if (sightingIndex) {
  //     axios
  //       .get(`${BACKEND_URL}/sightings/${sightingIndex}`)
  //       .then((response) => {
  //         setSighting(response.data);
  //       });
  //   }
  //   // Only run this effect on change to sightingIndex
  // }, [sightingIndex]);

  // const params = useParams();
  // if (sightingIndex !== params.sightingIndex) {
  //   setSightingIndex(params.sightingIndex);
  // }

  // // Store a new JSX element for each property in sighting details
  // const sightingDetails = [];
  // if (sighting) {
  //   for (const key in sighting) {
  //     sightingDetails.push(
  //       <Card.Text key={key}>{`${key}: ${sighting[key]}`}</Card.Text>
  //     );
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      // .post(`${BACKEND_URL}/client/${clientId}/journal/new`, {
      .post(`${BACKEND_URL}/client/:clientId/journal/new`, {
        date,
        input1,
        input2,
        input3,
      })
      .then((res) => {
        setDate('');
        setInput1('');
        setInput2('');
        setInput3('');

        console.log('resdata:', res.data);
        Navigate(`/journals/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container ClassName="Form-body" size="sm" px="xs">
      <Grid justify="center" align="center">
        <form onSubmit={handleSubmit}>
          <label>Journal Entry</label>

          <label>Date Due:</label>
          {/* <input
        type="datetime-local"
        name="date"
        value={date}
        onChange={handleChange}
      /> */}
          <br />

          <br />
          <label>Date:</label>
          <DatePicker placeholder="Pick date" value={date} onChange={setDate} />
          <br />

          <label>{title1}</label>
          <Textarea
            value={input1}
            onChange={handleChange}
            placeholder="what has been bothering you?"
          />
          <br />
          <label>{title2}</label>
          <Textarea
            name="notes"
            value={input2}
            onChange={handleChange}
            placeholder="what are your thoughts?"
          />
          <br />
          <label>{title3}</label>
          <Textarea
            name="notes"
            value={input3}
            onChange={handleChange}
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
