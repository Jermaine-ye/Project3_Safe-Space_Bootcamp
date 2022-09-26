import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Image,
  Avatar,
} from "@mantine/core";

import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";

import PatientProfile from "./PatientProfile.js";
import TherapistInfo from "./TherapistInfo";
import CalendarFull from "./CalendarFull.js";
import CalendarDashboard from "./CalendarDashboard";

export default function SidebarTherapist() {
  const [therapistId, setTherapistId] = useState();
  const [clientId, setClientId] = useState();
  const [therapistDetails, setTherapistDetails] = useState({});
  const [therapisttFirstName, setTherapistFirstName] = useState("");
  const [therapistLastName, setTherapistLastName] = useState("");
  const [therapistPhoto, setTherapistPhoto] = useState("");
  const [template, setTemplate] = useState();

  const { user, logout } = useAuth0();

  const navigate = useNavigate();

  const { user, logout } = useAuth0();
  const { clientInfo, currentUser, therapistInfo } = useAuth();

  useEffect(() => {
    console.log(`in effect`);
    console.log(user);
    console.log("Therapist Info:", therapistInfo);
    setTherapistPhoto(therapistInfo.photoLink);
    setTherapistFirstName(therapistInfo.firstName);

    if (therapistId) {
      axios.get(`${BACKEND_URL}/clients/key/${clientId}`).then((response) => {
        setTherapistDetails(response.data);
        console.log("client Details: ", response.data);
      });
    }
    console.log(therapistDetails);
  }, [therapistId]);

  const params = useParams();
  if (therapistId !== params.clientId) {
    setTherapistId(params.clientId);
  }

  return (
    <div className="Page-body">
      <Grid grow>
        {/* <Container className="SideBar-Content-body" size="xl" px="xs"> */}

        <Card className="Side-bar" radius="md" shadow="sm" p="md">
          <Image
            className="SideBar-profile-pic"
            // width={300}
            radius="xl"
            src={therapistPhoto}
            alt="User Profile"
          />
          <br />
          <Title size={30} color="White">
            Welcome {therapisttFirstName}
          </Title>

          <div className="Sidebar-a">
            <Link to="/">Home</Link>
            <br />
            <br />

            <Link to="/therapist/patients/">Client List</Link>
            <br />
            <br />
            <Link to="/therapist/support">Support</Link>
            <br />
            <br />
          </div>
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
        </Card>
        {/* </Container> */}
        {/* <Outlet /> */}
      </Grid>
      ;
    </div>
  );
}
