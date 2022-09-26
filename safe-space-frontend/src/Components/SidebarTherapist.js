import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Card, Text, Title, Grid, Container } from "@mantine/core";

import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";

import PatientProfile from "./PatientProfile.js";
import TherapistInfo from "./TherapistInfo";
import CalendarFull from "./CalendarFull.js";
import CalendarDashboard from "./CalendarDashboard";

export default function SidebarTherapist() {
  const [clientId, setClientId] = useState();
  const [clientDetails, setClientDetails] = useState({});
  const [template, setTemplate] = useState();

  const { user, logout } = useAuth0();

  const navigate = useNavigate();

  const { clientInfo, currentUser } = useAuth();

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);

    if (clientId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setClientDetails(response.data);
        console.log("client Details: ", response.data);
      });
    }
    console.log(clientDetails);
  }, [clientId]);

  const params = useParams();
  if (clientId !== params.clientId) {
    setClientId(params.clientId);
  }

  return (
    <div className="Page-body">
      SidebarTherapist
      <Container className="Content-body" size="md" px="xs">
        <Link to="/therapist/patients/">Client List</Link>
        <br />
        <br />
        <Link to="/therapist/support">Support</Link>
        <br />
        <br />
        <Button
          className="Sidebar-logout-btn"
          variant="light"
          onClick={() => {
            logout();
            navigate("/index");
          }}
        >
          LOG OUT
        </Button>
      </Container>
    </div>
  );
}
