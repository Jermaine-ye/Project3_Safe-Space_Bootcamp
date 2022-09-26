import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const [clientId, setClientId] = useState();
  const navigate = useNavigate();

  const { user } = useAuth0();
  const [memoList, setMemoList] = useState([]);
  const [memoDetails, setMemoDetails] = useState({});
  const [clientDetails, setClientDetails] = useState("");

  let finalList;

  // const ClientListPreview = () => {

  // };

  useEffect(() => {
    console.log(`running`);
    console.log(clientId);
    if (clientId) {
      axios.get(`${BACKEND_URL}/memos/${clientId}`).then((response) => {
        setMemoList(response.data);
      });
    }

    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails(response.data);
        console.log(response.data);
      });
    }
  }, []);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }
  // useEffect(() => {
  //   console.log(clientList);

  //   if (clientList && clientList.length !== 0) {
  //     ClientListPreview();
  //   }

  //   // Only run this effect on component mount
  // }, [clientList]);

  if (memoList && memoList.length !== 0) {
    finalList = memoList.map((memoInfo) => {
      console.log(memoInfo);

      return (
        <div>
          <Container>
            <Link
              to={`/therapist/patients/${clientId}/memos/${memoInfo.id}`}
              key={memoInfo.id}
            >
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Text size="sm">
                  ID:
                  {memoInfo.id}
                </Text>
                <Text>
                  {clientDetails.firstName}

                  {clientDetails.lastName}
                </Text>
                <Text>details:{memoInfo.generalInput}</Text>
                <Text size="sm" color="dimmed">
                  memo date:
                  {memoInfo.updatedAt}
                </Text>
              </Card>
            </Link>
          </Container>
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
      <h2>Memo List</h2>

      {memoList && memoList.length !== 0 ? <ul>{finalList}</ul> : null}

      <Link to={`/therapist/patients/${clientId}`}>Back to Profile</Link>
    </div>
  );
}
