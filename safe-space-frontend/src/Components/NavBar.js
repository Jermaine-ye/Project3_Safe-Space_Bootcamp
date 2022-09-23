import React, { createContext } from 'react';
import axios from 'axios';
import {
  Button,
  Card,
  Text,
  Title,
  Image,
  Container,
  Grid,
} from '@mantine/core';
import {
  useNavigate,
  useParams,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { BACKEND_URL } from '../constants';
import { useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { useAuth0 } from '@auth0/auth0-react';
// import { AuthContext } from "../App";
import sslogo from '../images/sslogo.png';

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
    console.log('Client logging in!');
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

  // // getting the specific user/therapist and their IDs respectively.
  // const getAllInfo = async () => {
  //   // await updateClient(user);

  //   //from auth0
  //   console.log(user);
  //   //from authContext
  //   console.log(user[`https://any-namespace/roles`].length === 0);

  //   if (user[`https://any-namespace/roles`].length === 0) {
  //     const response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);
  //     console.log(`Client info response 0`, response.data);
  //     updateClientInfo(response.data);

  //     let allTher = response.data.therapists;
  //     console.log(allTher);
  //     let currTher;
  //     allTher.forEach((ther) => {
  //       const { id, client_therapists, firstName, lastName, email } = ther;
  //       const { chosenTherapist, endedAt } = client_therapists;

  //       if (chosenTherapist && endedAt === null) {
  //         currTher = {
  //           id: id,
  //           name: `${firstName} ${lastName}`,
  //           email: email,
  //         };
  //         console.log(currTher);
  //       }
  //     });

  //     const therResponse = await axios.get(
  //       `${BACKEND_URL}/therapists/${currTher.email}`
  //     );
  //     updateTherapistInfo(therResponse.data);
  //   } else {
  //     const response = await axios.get(
  //       `${BACKEND_URL}/therapists/${user.email}`
  //     );
  //     updateTherapistInfo(response.data);
  //   }
  // };

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

      let allTher;
      let currTher;

      if (response.data.therapists.length !== 0) {
        allTher = response.data.therapists;
        console.log(allTher);
        allTher.forEach((ther) => {
          const { id, client_therapists, firstName, lastName, email } = ther;
          const { chosenTherapist, endedAt } = client_therapists;

          if (chosenTherapist && endedAt === null) {
            currTher = {
              id: id,
              name: `${firstName} ${lastName}`,
              email: email,
            };
            console.log(currTher);
          }
        });
        const therResponse = await axios.get(
          `${BACKEND_URL}/therapists/${currTher.email}`
        );
        updateTherapistInfo(therResponse.data);
      }
    } else {
      const response = await axios.get(
        `${BACKEND_URL}/therapists/${user.email}`
      );
      updateTherapistInfo(response.data);
    }
  };

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

  return (
    <div>
      <Container align="center" className="Nav-bar" fluid="true">
        <Grid className="Nav-bar-wrapper" align="center">
          <Grid.Col span={'auto'}>
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
            <Link to="/advice">Advice</Link>
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
            <Link to="/therapist/calendardash">Calendar Dashboard</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <Link to="/client/therapist">Therapist Info for Client</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <Link to="/therapist/patients/indiv/history">PrevApptHistory</Link>
          </Grid.Col>
          <Grid.Col span="auto">
            <Link to="/client/">Client Side bar</Link>
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

        <Link to="/client/journal/:journalId/new">Journal</Link>
        <br />
        <Link to="/client/journals/:journalId">Journal Single</Link>
        <br />
        <Link to="/client/journals">Journal List</Link>
        <br />
        <Link to="/therapist/patients/:clientId/newmemo">Memo Form</Link>
        <br />
        <Link to="/therapist/patients/:clientId/memos/:memoId">
          Memo Single
        </Link>
        <br />
      </Container>
    </div>
  );
}
