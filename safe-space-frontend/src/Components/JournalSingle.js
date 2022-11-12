import axios from "axios";
import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Text, Title, Container, Image } from "@mantine/core";

import { BACKEND_URL } from "../constants.js";

import pic1 from "../images/illustration/Journal single-01-01.png";

export default function JournalSingle(props) {
  const navigate = useNavigate();

  const [journalId, setJournalId] = useState("");

  const [indiJournalID, setIndiJournalId] = useState();
  const [indiJournalDueBy, setIndiJournalDueBy] = useState();
  const [indiJournalTemplate, setIndiJournalTemplate] = useState();
  const [indiJournalInput1, setIndiJournalInput1] = useState();
  const [indiJournalInput2, setIndiJournalInput2] = useState();
  const [indiJournalInput3, setIndiJournalInput3] = useState();

  const getSingleJournal = async () => {
    if (journalId) {
      axios.get(`${BACKEND_URL}/journals/single/${journalId}`).then((res) => {
        setIndiJournalId(res.data.id);
        setIndiJournalDueBy(res.data.dueBy);
        setIndiJournalTemplate(res.data.journaltemplateId);
        setIndiJournalInput1(res.data.input1);
        setIndiJournalInput2(res.data.input2);
        setIndiJournalInput3(res.data.input3);
      });
    }
  };

  useEffect(() => {
    getSingleJournal();
  }, []);

  const params = useParams();
  if (journalId !== params.journalId) {
    setJournalId(params.journalId);
  }

  return (
    <Container align="center" className="Form-body" size="sm" px="xs">
      <Card withBorder shadow="sm" radius="md">
        <Title order={3} weight={500} align="center">
          Journal Entry Record
        </Title>
        <br />
        <Text weight={700}>Journal ID:</Text>
        <Text>{indiJournalID}</Text>
        <br />
        <Text weight={700}>Due by:</Text>{" "}
        <Text weight={400}>
          {new Date(indiJournalDueBy).toLocaleDateString()}
        </Text>
        <br />
        <Text weight={700}>
          {indiJournalTemplate === 1 ? (
            <Text>Topics I want to discuss and goals for the session: </Text>
          ) : (
            <Text>Focus Topics and goals for the session: </Text>
          )}
        </Text>
        <br />
        <Text>{indiJournalInput1}</Text>
        <br />
        <Text weight={700}>
          <label>
            {indiJournalTemplate === 1 ? (
              <Text>
                How do I feel about these things and how do they affect my life?
                Do I already see ways to help myself get over them?
              </Text>
            ) : (
              <Text>
                How did my partner react to this discussion? What feelings and
                insights did he/she express?
              </Text>
            )}
          </label>
        </Text>
        <br />
        <Text>{indiJournalInput2}</Text>
        <br />
        <Text weight={700}>
          {indiJournalTemplate === 1 ? (
            <Text>
              Main insights and takeaways from session: including possible
              actions and follow ups
            </Text>
          ) : (
            <Text>
              My main insights and takeaways from session: including possible
              actions and follow ups
            </Text>
          )}
        </Text>
        <br />
        <Text>{indiJournalInput3}</Text>
        <br />
        <div
          style={{
            width: 700,
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Image src={pic1} alt="journal" className="consultation" />
        </div>
        <Button variant="light" onClick={(e) => navigate(-1)}>
          Back to Dashboard
        </Button>
      </Card>
    </Container>
  );
}
