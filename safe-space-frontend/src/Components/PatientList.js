import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Group,
} from "@mantine/core";

// similar to sighting exercises
export default function PatientList() {
  const [patientsList, setPatientsList] = useState([]);
  const navigate = useNavigate();

  const { user } = useAuth0();
  const [clientList, setClientList] = useState();
  const [clientDetails, setClientDetails] = useState({});

  let finalList;

  // const ClientListPreview = () => {

  // };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/therapists/clients/${user.email}`)
      .then((response) => {
        setClientList(response.data);
      });
  }, []);

  // useEffect(() => {
  //   console.log(clientList);

  //   if (clientList && clientList.length !== 0) {
  //     ClientListPreview();
  //   }

  //   // Only run this effect on component mount
  // }, [clientList]);

  if (clientList && clientList.length !== 0) {
    finalList = clientList.map((clientInfo) => {
      console.log(clientInfo);

      return (
        <div key={clientInfo.client.id}>
          <Link
            to={`/therapist/patients/${clientInfo.client.id}`}
            key={clientInfo.client.id}
          >
            <Card shadow="sm" p="lg" radius="md" withBorder>
              {clientInfo.client.id}

              <Text weight={500}>
                {clientInfo.client.firstName}
                {` `}
                {clientInfo.client.lastName}
              </Text>

              <Text size="sm" color="dimmed">
                Patient Infomation
              </Text>

              <Text size="sm" color="dimmed">
                Journal Log
              </Text>
              <Text size="sm" color="dimmed">
                Appointment Memo
              </Text>
            </Card>
          </Link>
        </div>
        //   <li>
        //     <Link
        //       to={`/therapists/clients/${clientInfo.client.id}`}
        //       key={clientInfo.client.id}
        //     >
        //       {/*set the body of the link */}
        //       <Card style={{ width: "18rem" }} key={clientInfo.client.id}>
        //         <Card.Body>
        //           {/*replace all placeholders with imported data */}
        //           <Card.Title>
        //             {clientInfo.client.firstName} and {clientInfo.client.lastName}
        //           </Card.Title>
        //           <Card.Text>Has the patient checked today?</Card.Text>
        //           <input type="checkbox" name="checkedin" />
        //           <Card.Text>Journal Submitted?</Card.Text>
        //           <input type="checkbox" name="submitted" />
        //           <Card.Text>Log ID</Card.Text>
        //           {/*axios.get client ID and params */}
        //           <Card.Link>Journal Log</Card.Link>
        //           <Card.Link>Appointment Memo</Card.Link>
        //         </Card.Body>
        //       </Card>
        //     </Link>
        //   </li>
      );
    });
  }
  return (
    <div>
      <Container>
        <h2>PatientList</h2>

        {clientList && clientList.length !== 0 ? <ul>{finalList}</ul> : null}

        <Link to="/">Home</Link>
      </Container>
    </div>
  );
}
