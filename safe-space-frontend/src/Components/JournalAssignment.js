import axios from "axios";
import React, { useState, useEffect } from "react";
// import { user } from '@auth0/auth0-react';
import { Link, useNavigate, useParams } from "react-router-dom";
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
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { BACKEND_URL } from "../constants.js";
import { Auth0Client } from "@auth0/auth0-spa-js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext";

const JournalAssignment = () => {
  const navigate = useNavigate();
  const [updatedAt, setUpdatedAt] = useState("");
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { clientInfo, therapistInfo, template } = useAuth();

  const [dueDate, setDueDate] = useState("");

  const [clientDetails, setClientDetails] = useState("");
  const [clientFirstName, setClientFirstName] = useState("");
  const [clientLastName, setClientLastName] = useState("");
  const [clientMood, setClientMood] = useState("");

  // get all to know there is an empty null=> new journal entry =>
  const [clientId, setClientId] = useState("");
  const [journalId, setJournalId] = useState("");

  // const [journalEntryNum, setJournalEntryNum] = useState("");

  const [therapistFirstName, setTherapistFirstName] = useState("");
  const [therapistLastName, setTherapistLastName] = useState("");

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
  //   setClientId(response.data.id);
  // };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("user info:", user);
      console.log("email:", user.email);
      console.log("therapistInfo: ", therapistInfo);
      // setinput1();
      console.log(user);
      // callApi();
      console.log(therapistInfo);
    }
  }, [user]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  // const templateQns = (templateid) => {
  //   if (templateid == 1) {
  //     setTitle1("Topics  I want to discuss and goals for the session: ");
  //     setTitle2(
  //       `How do I feel about these things and how do they affect my life? Do I already see ways to help myself get over them?`
  //     );
  //     setTitle3(`Main insights and takeaways from session:
  // (including possible actions and follow ups)`);
  //   } else if (templateid == 2) {
  //     setTitle1("Focus Topics and goals for the session:");
  //     setTitle2(
  //       `How did my partner react to this discussion? What feelings and insights did he/she express?`
  //     );
  //     setTitle3(`My main insights and takeaways from session:
  // (including possible actions and follow ups)`);
  //   }
  // };

  // thinking how to dynamically render out the template qns with this set journal button... if not lazy we just integrate it with the form submission and not dynamically render the qns. so the qns will be a fixed template below for the therapist to reference?
  // let setJournalButton = (
  //   <div>
  //     <button
  //       onClick={(e) => {
  //         setJournalTemplate();
  //       }}
  //       value={template}
  //     >
  //       Set Journal Template
  //     </button>
  //     <select>
  //       {/*set value once you know and setstate in select. axios.put after. */}
  //       <option>Select a Template</option>
  //       <option>Template one</option>
  //       <option>Template two</option>
  //     </select>
  //   </div>
  // );

  // const setJournalTemplate = (e) => {
  //   e.preventDefault();
  //   //do a put reaquest to set the journal template number
  // };

  //If journal Template id == 1 templateQns

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(updatedAt);
    console.log(input1);
    console.log(input2);
    console.log(input3);
    axios.post(`${BACKEND_URL}/journals/${clientId}`, {
      // .post(`${BACKEND_URL}/journals/${journalId}`, {
      dueBy: updatedAt,
      templateId: Number(template),
      clientId: Number(clientId),
      therapistId: therapistInfo.id,
      //should change to due date for the journal instead of updated at
    });

    navigate(-1);
  };

  return (
    <Container className="Form-body" size="sm" px="xs">
      <Grid justify="center" align="center">
        {/* <Grid.Col span={1}> */}
        <Container>
          <label>Journal Assignment</label>

          <br />
          <label>
            Therapist: {therapistInfo.firstName} {therapistInfo.lastName}
          </label>
          <br />
        </Container>
        <Container>
          <form onSubmit={handleSubmit}>
            <label>
              Date Due:{" "}
              {
                <DatePicker
                  placeholder="Pick date"
                  value={updatedAt}
                  onChange={setUpdatedAt}
                  // allowFreeInput
                  // dateParser={(updatedAt) => new Date(Date.parse(updatedAt))}
                />
              }
            </label>
            <br />

            <label>
              {template === 1
                ? "Topics  I want to discuss and goals for the session: "
                : "Focus Topics and goals for the session:"}
            </label>
            <h1>Q1</h1>
            <Textarea
              name="input1"
              value={input1}
              onChange={(event) => setInput1(event.currentTarget.value)}
              placeholder="what has been bothering you?"
            />
            <br />
            <label>
              {template === 1
                ? `How do I feel about these things and how do they affect my life? Do I already see ways to help myself get over them?`
                : `How did my partner react to this discussion? What feelings and insights did he/she express?`}
            </label>
            <h1>Q2</h1>
            <Textarea
              name="input2"
              value={input2}
              onChange={(event) => setInput2(event.currentTarget.value)}
              placeholder="what are your thoughts?"
            />
            <br />
            <label>
              {template === 1
                ? `Main insights and takeaways from session: 
  (including possible actions and follow ups)`
                : `My main insights and takeaways from session:
  (including possible actions and follow ups)`}
            </label>
            <h1>Q3</h1>
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
        </Container>
        {/* </Grid.Col> */}
      </Grid>
    </Container>
  );
};

export default JournalAssignment;
