import React, { createContext } from "react";
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
// import { AuthContext } from "../App";
import sslogo from "../images/sslogo.png";

export default function NavBar() {
  // const hello = useContext(AuthContext);

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

    if (user[`https://any-namespace/roles`].length === 0) {
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
    }
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
      console.log(`Client info response 0`, response.data);
      updateClientInfo(response.data);
    } else {
      const response = await axios.get(
        `${BACKEND_URL}/therapists/${user.email}`
      );
      updateTherapistInfo(response.data);
    }
  };

  // const getAllClient = async () => {
  //   const response = await axios.get(`${BACKEND_URL}/clients`);
  //   console.log(response.data);
  //   setAllClients(response.data);
  //   // findClient();
  // };

  // const findClient = () => {
  //   allClients.forEach((client) => {
  //     let { email } = client;
  //     if (allEmails.length === 0) {
  //       setAllEmail([email]);
  //     } else {
  //       setAllEmail([...allEmails, email]);
  //     }
  //   });
  // };

  // const doesNotContain = (index, list) => {
  //   var i;
  //   for (i = 0; i < list.length; i++) {
  //     if (list[i].email === index) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  // if(allEmails.length <= allClient.length &&  doesNotContain(allEmails, allClients)) {
  //  findClient()
  // }

  useEffect(() => {
    console.log(`in effect`);
    console.log(isAuthenticated);

    // getAllClient();
    // if (
    //   allEmails.length <= allClients.length &&
    //   doesNotContain(allEmails, allClients)
    // ) {
    //   findClient();
    //}
    if (isAuthenticated) {
      console.log(`running`);
      getAllInfo();
      // updateClient();
    }
  }, [user]);

  // const toClient = user[`https://any-namespace/roles`].length === 0;

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
            <Link to="/">Home</Link>
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
          {/* <Grid.Col>
            {toClient ? (
              <button onCick={() => navigate("/client/")}>
                clientdashboard
              </button>
            ) : (
              <button onCick={() => navigate("/therapist/")}>
                therapistdashboard
              </button>
            )}
          </Grid.Col> */}
        </Grid>
      </Container>
    </div>
  );
}
