import axios from "axios";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Button, Card, Text, Grid, Container, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";

const JournalForm = () => {
  const navigate = useNavigate();
  const [updatedAt, setUpdatedAt] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const { user, isAuthenticated } = useAuth0();

  const [clientId, setClientId] = useState("");
  const [journalId, setJournalId] = useState("");
  const [dueBy, setDueBy] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [therapistFirstName, setTherapistFirstName] = useState("");
  const [therapistLasttName, setTherapistLastName] = useState("");

  const callApi = async () => {
    let response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);

    setTemplateId(response.data.journalentries[0].journaltemplateId);
    setJournalEntry(response.data.journalentries.length);
    setDueBy(response.data.journalentries[0].dueBy);

    setJournalId(response.data.journalentries[0].id);
    setTherapistLastName(response.data.journalentries[0].therapist.lastName);
    setTherapistFirstName(response.data.journalentries[0].therapist.firstName);
    setClientId(response.data.id);
  };

  useEffect(() => {
    if (isAuthenticated) {
      callApi();
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios

      .put(`${BACKEND_URL}/journals/${journalId}`, {
        updatedAt,
        input1,
        input2,
        input3,
      })
      .then((res) => {
        setUpdatedAt("");
        setInput1("");
        setInput2("");
        setInput3("");

        navigate(`/client/journals/${res.data.id}`);
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
            <Text weight={700}>Therapist:</Text>{" "}
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
                ? "Topics  I want to discuss and goals for the session: "
                : "Focus Topics and goals for the session:"}
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
    </Container>
  );
};

export default JournalForm;
