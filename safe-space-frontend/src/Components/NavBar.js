import React from "react";
import axios from "axios";
import {
  Button,
  Card,
  Text,
  Title,
  Image,
  Container,
  Grid,
} from "@mantine/core";
import {
  useNavigate,
  useParams,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import { BACKEND_URL } from "../constants";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";

import sslogo from "../images/sslogo.png";

export default function NavBar() {
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  const navigate = useNavigate();
  const {
    updateClientData,
    updateClientInfo,
    currentUser,
    updateTherapistInfo,
  } = useAuth();

  const handleLogin = async () => {
    console.log("Client logging in!");
    loginWithRedirect();
  };

  // update user information once they sign up and login in.
  const updateClient = async (user) => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    const response = await axios.post(
      `${BACKEND_URL}/clients/newClient`,
      {
        //refer BE controller
        email: user.email,
        password: user.password,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    await updateClientData(response.data);

    // navigate("/index");
  };

  // getting the specific user/therapist and their IDs respectively.
  const getAllInfo = async () => {
    await updateClient(user);

    //from auth0
    console.log(user);
    //from authContext
    console.log(user[`https://any-namespace/roles`].length === 0);

    if (user[`https://any-namespace/roles`].length === 0) {
      const response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);

      updateClientInfo(response.data);
    } else {
      const response = await axios.get(
        `${BACKEND_URL}/therapists/${user.email}`
      );
      updateTherapistInfo(response.data);
    }
  };

  useEffect(() => {
    console.log(`in effect`);
    if (isAuthenticated) {
      getAllInfo();
      // updateClient();
    }
  }, []);

  return (
    <div>
      <Container align="center" className="Nav-bar" fluid="true">
        <Grid className="Nav-bar-wrapper" align="center">
          <Grid.Col span={"auto"}>
            <Image
              width={200}
              src={sslogo}
              alt="safe space logo"
              className="Footer-logo"
            />
          </Grid.Col>

          <Grid.Col span="auto">
            <Link to="/index">Home</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <Link to="/about">About Us</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <Link to="/advice">advice</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <Link to="/faq">FAQ</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <Link to="/services">Services</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <Link to="/support">Support Resources</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <button onClick={handleLogin}>Login</button>
          </Grid.Col>
          {/* <Grid.Col span="auto">
            <button onClick={handleSignUp}>Sign Up</button>
          </Grid.Col> */}
        </Grid>
      </Container>
    </div>
  );
}
