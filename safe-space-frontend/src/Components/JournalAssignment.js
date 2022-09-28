import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Text, Grid, Container, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { BACKEND_URL } from "../constants.js";
import { useAuth } from "./AuthContext";

const JournalAssignment = () => {
  const navigate = useNavigate();
  const [updatedAt, setUpdatedAt] = useState("");
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [input3, setInput3] = useState(null);
  const { therapistInfo, template } = useAuth();
  const [clientId, setClientId] = useState("");

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(updatedAt);
    console.log(input1);
    console.log(input2);
    console.log(input3);
    axios.post(`${BACKEND_URL}/journals/${clientId}`, {
      dueBy: updatedAt,
      templateId: Number(template),
      clientId: Number(clientId),
      therapistId: therapistInfo.id,
    });

    navigate(-1);
  };

  return (
    <Container className="Form-body" size="sm" px="xs">
      <Card withBorder shadow="sm" radius="md">
        <Grid justify="center" align="center">
          {/* <Grid.Col span={1}> */}
          <Container>
            <Text size={20} weight={700}>
              Journal Assignment
            </Text>

            <br />
            <Text weight={700}>
              Therapist: {therapistInfo.firstName} {therapistInfo.lastName}
            </Text>
          </Container>
          <Container>
            <form onSubmit={handleSubmit}>
              <Text weight={700}>
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
              </Text>
              <br />
              <Text weight={700}>
                {template === 1
                  ? "Q1: Topics  I want to discuss and goals for the session: "
                  : "Q1: Focus Topics and goals for the session:"}
              </Text>

              <Textarea
                name="input1"
                value={input1}
                onChange={(event) => setInput1(event.currentTarget.value)}
                placeholder="what has been bothering you?"
              />
              <br />
              <Text weight={700}>
                {template === 1
                  ? `Q2: How do I feel about these things and how do they affect my life? Do I already see ways to help myself get over them?`
                  : `Q2: How did my partner react to this discussion? What feelings and insights did he/she express?`}
              </Text>

              <Textarea
                name="input2"
                value={input2}
                onChange={(event) => setInput2(event.currentTarget.value)}
                placeholder="what are your thoughts?"
              />
              <br />
              <Text weight={700}>
                {template === 1
                  ? `Q3: Main insights and takeaways from session: 
  (including possible actions and follow ups)`
                  : `Q3: My main insights and takeaways from session:
  (including possible actions and follow ups)`}
              </Text>

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
          <Button variant="light" onClick={(e) => navigate(-1)}>
            Back to Patient Profile
          </Button>
          {/* </Grid.Col> */}
        </Grid>
      </Card>
    </Container>
  );
};

export default JournalAssignment;
