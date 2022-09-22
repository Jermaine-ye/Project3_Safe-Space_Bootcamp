import React from "react";
import axios from "axios";
import { Button, Card, Text, Title } from "@mantine/core";
import {
  useNavigate,
  useParams,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import { BACKEND_URL } from "../constants";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useAuth } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  // const { updateClientInfo, currentUser, updateTherapistInfo } = useAuth();
  // const [emailClient, setEmailClient] = useState();
  // const [emailTherapist, setEmailTherapist] = useState();

  // useEffect(() => {
  //   setEmailClient(currentUser.email);
  //   setEmailTherapist(currentUser.email);

  //   if (isAuthenticated) {
  //     updateClient(user);
  //     console.log(user);
  //     console.log(currentUser.email);
  //     console.log(user[`https://any-namespace/roles`].length === 0);
  //     console.log(emailClient, emailTherapist);
  //     if (user[`https://any-namespace/roles`].length === 0) {
  //       let response = axios.get(`${BACKEND_URL}/clients`, {
  //         emailClient: emailClient,
  //       });
  //       console.log(response);
  //       updateClientInfo(response.data);
  //     } else {
  //       let response = axios.get(`${BACKEND_URL}/therapists`, {
  //         emailTherapist: emailTherapist,
  //       });
  //       updateTherapistInfo(response.data);
  //       console.log("not logged in");
  //     }
  //   }
  // }, [isAuthenticated]);

  return (
    <div>
      <NavBar />
      <h1>LandingPage</h1>
      <Link to="/particulars">personal particulars form</Link>
      <br />
      <Link to="/evaluation/1">evaluation form preference</Link>
      <br />
      <Link to="/evaluation/2">evaluation form speciality</Link>
      <br />
      <Link to="/evaluation/results"> evaluation results</Link>
      <br />
      <Link to="/therapist/patients/profile/"> patientProfile</Link>
      <br />
      <Link to="/therapist/patients/"> patient list</Link>
      <br />
      <Link to="/therapist/upcoming"> patient upcoming</Link>
      <br />
      <Link to="/auth"> test PrivateRoutes</Link>
      <br />
      <Link to="/authclient"> test PrivateRoutesClient</Link>
      <br />
      <Link to="/therapist/patients/profile/"> To Therapist DashBoard</Link>
      <Footer />
    </div>
  );
}
