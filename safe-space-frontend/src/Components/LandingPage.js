import React from "react";
import { Card, Text, Title, Image, Container, Grid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";

import pic1 from "../images/illustration/DrawKit Vector Illustration Mental Health 1.png";

export default function LandingPage() {
  const { user } = useAuth0();

  const navigate = useNavigate();
  const DashBoardNav = (event) => {
    console.log(event);

    if (user[`https://any-namespace/roles`].length !== 0) {
      navigate("/therapist/");
    } else if (user[`https://any-namespace/roles`].length === 0) {
      navigate("/client/");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="Landing-page">
      <NavBar />
      <Container>
        <Card>
          <Grid>
            <Grid.Col span={4}>
              <Container className="Landing-text" size="md" px="xs">
                <Text weight={600} align="justify" size="md">
                  <Title color="blue" order={2} weight={600} align="Right">
                    Let Us Give You A
                  </Title>
                  <i>Safe Space</i> is a Singapore-based online counselling
                  platform. We bring together empathetic and passionate mental
                  health professionals into a single space.
                </Text>
              </Container>
            </Grid.Col>
            <Grid.Col span={8}>
              <div
                style={{
                  width: 650,

                  marginLeft: "auto",
                  marginRight: 50,
                }}
              >
                <Image src={pic1} alt="landing page" className="consultation" />
              </div>

              <button
                onClick={() => {
                  navigate("/particulars");
                }}
              >
                Take Our Evaluation Form!
              </button>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      <Footer />

      <br />
    </div>
  );
}
