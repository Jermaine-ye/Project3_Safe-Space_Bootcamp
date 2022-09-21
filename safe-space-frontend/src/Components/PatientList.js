import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";
import { Container } from "@mantine/core";
import Card from "react-bootstrap/Card";

// similar to sighting exercises
export default function PatientList() {
  const [patientsList, setPatientsList] = useState([]);
  const navigate = useNavigate();

  const { user } = useAuth0();
  const { clientList, setClientList } = useAuth();
  const [clientDetails, setClientDetails] = useState({});

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/therapists/clients/${user.email}`)
      .then((response) => {
        setClientList(response.data);
      });

    // Only run this effect on component mount
  }, []);

  const clientListPreview = clientList.map((clientList) => {
    return (
      <Link to={`/therapists/clients/${clientList.id}`} key={clientList.id}>
        {/*set the body of the link */}
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            {/*replace all placeholders with imported data */}
            <Card.Title>firstName and lastName</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>Has the patient checked today?</Card.Text>
            <input type="checkbox" name="checkedin" />
            <Card.Text>Journal Submitted?</Card.Text>
            <input type="checkbox" name="submitted" />
            <Card.Text>Log ID</Card.Text>
            {/*axios.get client ID and params */}
            <Card.Link href="#">Journal Log</Card.Link>
            <Card.Link href="#">Appointment Memo</Card.Link>
          </Card.Body>
        </Card>
      </Link>
    );
  });

  return (
    <div>
      <h2>PatientList</h2>
      {clientListPreview}
      <button onClick={(e) => navigate(-1)}>back</button>
    </div>
  );
}
