import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";
import { Container } from "@mantine/core";

export default function PatientDashboard() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});
  const [template, setTemplate] = useState();

  const navigate = useNavigate();

  const { user } = useAuth0();

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);

    if (clientId) {
      axios
        .get(`${BACKEND_URL}/clients/key/${params.clientId}`)
        .then((response) => {
          setClientDetails(response.data);
        });
    }
    console.log(clientDetails);
  }, [clientId]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  return (
    <div>
      <h2>Hello World</h2>
      <img
        src={`${clientDetails.photoLink}`}
        alt={`${clientDetails.photoLink}`}
      />
      <h4>
        Patient Name: {clientDetails.firstName}
        {clientDetails.lastName}
      </h4>

      <button value={template}>Set Journal Template</button>
      <select>
        {/*set value once you know and setstate in select. axios.put after. */}
        <option>Select a Template</option>
        <option>Template one</option>
        <option>Template two</option>
      </select>

      <Container>
        <p>Age:{clientDetails.ageClient}</p>
        <p>Gender:{clientDetails.gender}</p>
        <p>Phone Number:{clientDetails.phoneNumber}</p>
        <p>Email:{clientDetails.email}</p>
        <p>Marital Status:{clientDetails.maritalStatus}</p>
        <br />
        {/*Information from memo?*/}
      </Container>

      <button>Deactivate</button>
      <button>Patient Apppointment Log</button>
      <button
        onClick={() => navigate(`/therapist/patients/${clientId}/newmemo`)}
      >
        Memo Form Creation
      </button>
      <button
        onClick={() => navigate(`/therapist/patients/${clientId}/newjournal`)}
      >
        Memo List for this patient
      </button>
      <button onClick={(e) => navigate(-1)}>back</button>
    </div>
  );
}
