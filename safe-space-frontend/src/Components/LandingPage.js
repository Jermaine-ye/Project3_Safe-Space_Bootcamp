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
import { UserContext } from "../App";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useAuth } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import QuoteDisplay from "./QuoteDisplay";
import pic1 from "../images/illustration/DrawKit Vector Illustration Mental Health 1.png";

export default function LandingPage() {
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  const navigate = useNavigate();
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
  const DashBoardNav = (event) => {
    console.log(event);
    //TO CHANGE TO CORRECT ROUTE LATER.
    if (user[`https://any-namespace/roles`].length !== 0) {
      navigate("/therapist/");
    } else if (user[`https://any-namespace/roles`].length === 0) {
      navigate("/client/");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Card>
          <Grid>
            <Grid.Col span={4}>
              <Container className="Landing-text" size="md" px="xs">
                <Text weight={600} align="justify" size="md">
                  {" "}
                  <Title color="blue" order={2} weight={600} align="Right">
                    Let Us Give You A
                  </Title>
                  <i>Safe Space</i> is a Singapore-based online counselling
                  platform. We bring together empathetic and passionate mental
                  health professionals into a single space.
                </Text>
              </Container>
            </Grid.Col>
            <Grid.Col span={6}>
              <div
                style={{
                  width: 650,

                  marginLeft: "auto",
                  marginRight: 50,
                }}
              >
                <Image src={pic1} alt="landing page" className="consultation" />
              </div>

              {/* <Link to="/evaluation/1">Eva</Link> */}

              <button
                onClick={() => {
                  navigate("/particulars");
                }}
              >
                Take Our Evaluation Form!
              </button>
            </Grid.Col>
          </Grid>
          <button
            onClick={() => {
              logout();
            }}
          >
            LOG OUT
          </button>
        </Card>
      </Container>

      <Footer />

      <br />
    </div>
  );
}

/* <h1>LandingPage</h1>
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
      <br /> */
