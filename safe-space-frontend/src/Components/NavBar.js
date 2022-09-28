import React, { createContext } from "react";
import axios from "axios";
import { Button, Image, Container, Grid } from "@mantine/core";
import { useNavigate, Link } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import sslogo from "../images/sslogo.png";

export default function NavBar() {
  const { isAuthenticated, user, loginWithRedirect, getAccessTokenSilently } =
    useAuth0();
  const navigate = useNavigate();

  const { updateClientData, updateClientInfo, updateTherapistInfo } = useAuth();

  const handleLogin = async () => {
    console.log("Client logging in!");
    loginWithRedirect();
  };

  const updateClient = async (user) => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });

    if (user[`https://any-namespace/roles`].length === 0) {
      const response = await axios.post(
        `${BACKEND_URL}/clients/newClient`,
        {
          email: user.email,
          password: user.password,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      await updateClientData(response.data);
    }
  };

  const getAllInfo = async () => {
    await updateClient(user);

    console.log(user);

    console.log(user[`https://any-namespace/roles`].length === 0);

    if (user[`https://any-namespace/roles`].length === 0) {
      const response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);

      updateClientInfo(response.data);
      console.log(response.data);
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
        if (currTher) {
          const therResponse = await axios.get(
            `${BACKEND_URL}/therapists/${currTher.email}`
          );
          updateTherapistInfo(therResponse.data);
        }
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

    if (isAuthenticated) {
      console.log(`running`);
      getAllInfo();

      console.log("user:", user);
    }
  }, [user]);

  const DashBoardNav = (event) => {
    console.log(event);

    if (user[`https://any-namespace/roles`].length !== 0) {
      navigate("/therapist/dashboard");
    } else if (user[`https://any-namespace/roles`].length === 0) {
      navigate("/client/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <Container align="center" className="Nav-bar" fluid="true">
        <Grid className="Nav-bar-wrapper" align="center">
          <Grid.Col span={"auto"}>
            <Link to="/">
              <div
                style={{
                  width: 200,
                  marginTop: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "auto",
                }}
              >
                <Image
                  src={sslogo}
                  alt="forumtipsicon"
                  className="consultation"
                />
              </div>
            </Link>
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
            {isAuthenticated !== false ? (
              <Button onClick={() => DashBoardNav()}>To DashBoard</Button>
            ) : (
              <Button onClick={handleLogin}>Login</Button>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
