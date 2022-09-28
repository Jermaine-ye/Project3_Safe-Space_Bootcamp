import axios from "axios";
import React, { useState, useEffect } from "react";
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
import { useAuth0 } from "@auth0/auth0-react";
import angry from "../images/angry.png";
import crying from "../images/sad.png";
import happy from "../images/smiling-face.png";
import sad from "../images/frown.png";
import { useAuth } from "./AuthContext";

const MemoForm = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [clientId, setClientId] = useState("");
  const [generalInput, setGeneralInput] = useState("");
  const [behaviorInput, setBehaviorInput] = useState("");
  const [contenttherapyInput, setContenttherapyInput] = useState("");
  const [therapeuticintInput, setTherapeuticintInput] = useState("");
  const [diagnosesInput, setDiagnosesInput] = useState("");
  const [instructionsInput, setInstructionsInput] = useState("");
  const [riskfactorsInput, setRiskfactorsInput] = useState("");
  const [clientDetails, setClientDetails] = useState("");
  const [clientFirstName, setClientFirstName] = useState("");
  const [clientLastName, setClientLastName] = useState("");
  const [clientMood, setClientMood] = useState("");
  const navigate = useNavigate();
  const { therapistInfo } = useAuth();

  // const callApi = async () => {
  //   // let response = await axios.get(`${BACKEND_URL}/clients/jon@snow.com`);

  //   // should be getting info from the therapist side instead of the client??
  //   let response = await axios.get(`${BACKEND_URL}/${c.email}`);
  //   // let response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);
  //   // it should be ${emailClient}
  //   console.log('user detailed information: ', response.data);
  //   console.log('clientId: ', response.data.id);
  //   setclientId(response.data.id);
  //   setClientFirstName(response.data.firstName);
  //   setClientLastName(response.data.lastName);
  //   setPatientMood(response.data.dailymood);
  //   setTherapistId(response.data.therapists[0].id);
  //   console.log(response.data.therapists[0].id);
  // };

  const allClients = therapistInfo.clients;

  // const currentClient = allClients.forEach((elem) => {
  //   const elemClientID = elem.id;
  //   if (elemClientID === params.id) {
  //     setCurrClient(elem);
  //   }
  // });

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);

    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails("clientres.data: ", response.data);
        console.log("clientdetails: ", response.data.dailymood);
        setClientMood(response.data.dailymood);
        setClientFirstName(response.data.firstName);
        setClientLastName(response.data.lastName);
      });
    }
  }, [clientId]);

  const moodIcon = (input) => {
    console.log("checkmood: ", clientDetails.patientMood);
    switch (input) {
      case 1:
        return <img src={happy} alt="" width="50" height="50" />;

      case 2:
        return <img src={sad} alt="" width="50" height="50" />;

      case 3:
        return <img src={crying} alt="" width="50" height="50" />;

      case 4:
        return <img src={angry} alt="" width="50" height="50" />;

      default:
        return null;
    }
  };
  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    //back end route is different from BE route.
    //check what type of data you want get access first then check index.js app.use (all the way below to see the relatvent router to grab the get/put etc)

    // memo/${:clientId}/${:memoId}
    // not front end route like what u have done below!!!
    // should be getting info from the therapist side instead of the client??
    console.log(clientId);
    axios
      .post(`${BACKEND_URL}/memos/${clientId}`, {
        therapistId: therapistInfo.id,
        generalInput,
        behaviorInput,
        contenttherapyInput,
        therapeuticintInput,
        diagnosesInput,
        instructionsInput,
        riskfactorsInput,
      })
      .then((res) => {
        setGeneralInput("");
        setBehaviorInput("");
        setContenttherapyInput("");
        setTherapeuticintInput("");
        setDiagnosesInput("");
        setInstructionsInput("");
        setRiskfactorsInput("");

        console.log("resdata:", res.data);
        console.log("Memo Submit Success!!");
        navigate(
          `/therapist/patients/${res.data.clientId}/memos/${res.data.id}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container size="md" px="xs">
      <Card withBorder shadow="sm" radius="md">
        <form onSubmit={handleSubmit}>
          <br />
          <Text weight={700}>Memo Entry</Text>
          <br />
          <br />
          <Text weight={700}>Date: {new Date().toLocaleDateString()}</Text>

          <br />
          <br />

          <Text weight={700}>
            {" "}
            Patient Name: {clientFirstName} {clientLastName}
          </Text>

          <br />
          <br />

          <Text weight={700}>General Notes:</Text>
          <Textarea
            name="general"
            placeholder="brief details of patient."
            value={generalInput}
            onChange={(event) => setGeneralInput(event.currentTarget.value)}
          />
          <br />
          <Text weight={700}>Behaviour Observations:</Text>
          <Textarea
            name="behavior"
            value={behaviorInput}
            onChange={(event) => setBehaviorInput(event.currentTarget.value)}
          />
          <br />
          <Text weight={700}>Content of Today's Therapy:</Text>
          <Textarea
            name="content"
            value={contenttherapyInput}
            onChange={(event) =>
              setContenttherapyInput(event.currentTarget.value)
            }
          />
          <br />
          <Text weight={700}>Any Therapeutic Intervention Needed?</Text>
          <Textarea
            name="therapeutic"
            value={therapeuticintInput}
            onChange={(event) =>
              setTherapeuticintInput(event.currentTarget.value)
            }
          />
          <br />
          <Text weight={700}>Diagnoses:</Text>
          <Textarea
            name="diagnoses"
            value={diagnosesInput}
            onChange={(event) => setDiagnosesInput(event.currentTarget.value)}
          />
          <br />

          <Text weight={700}>Instructions/Recommendations/Plans</Text>
          <Textarea
            name="instructions"
            value={instructionsInput}
            onChange={(event) =>
              setInstructionsInput(event.currentTarget.value)
            }
          />
          <br />
          <Text weight={700}>Notes and Risk Factors:</Text>
          <Textarea
            name="risk"
            value={riskfactorsInput}
            onChange={(event) => setRiskfactorsInput(event.currentTarget.value)}
          />

          <br />
          <Button variant="light" type="submit">
            Submit
          </Button>
        </form>
      </Card>
      <Button variant="light" onClick={(e) => navigate(-1)}>
        Back to Patient Profile
      </Button>
    </Container>
  );
};

export default MemoForm;
