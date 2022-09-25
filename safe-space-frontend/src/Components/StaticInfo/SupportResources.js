import React from 'react';
import pic1 from '../../images/illustration/11098.jpg';

import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Image,
} from '@mantine/core';
import { IconHeartHandshake } from '@tabler/icons';

import NavBar from '../NavBar';
import Footer from '../Footer';

export default function SupportResources() {
  return (
    <div className="Page-body ">
      <NavBar />
      <div className="Content-container">
        <Container className="Content-body" size="lg" px="xs">
          <br />
          <Title color="blue" order={2} weight={500} align="center">
            Crisis Resources
          </Title>
          <br />
          <Title color="red" order={4} weight={500} align="center">
            These resources are for crisis situations.
          </Title>

          <Grid>
            <Grid.Col span={4}>
              <Card shadow="sm" p="md">
                <Text weight={500} size="lg" mt="md">
                  Emergency medical services
                </Text>
                <br />
                <Text size="sm" color="dimmed">
                  If you or someone you know is in immediate harm, call
                  emergency medical services at 995 or approach the A&E
                  department of your nearest hospital.
                  <br />
                  <br />
                  <IconHeartHandshake size={25} />
                  <br />
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card shadow="sm" p="md">
                <Text weight={500} size="lg" mt="md">
                  Suicide prevention and crisis helplines
                </Text>
                <br />
                <Text size="sm" color="dimmed">
                  Samaritans of Singapore (SOS): WhatsApp 9151 1767 for support,
                  or call their helpline at 1767.
                  <br />
                  <br /> National CARE Hotline: 1800 202 6868.
                  <br />
                  <IconHeartHandshake size={25} />
                  <br />
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card shadow="sm" p="md">
                <Text weight={500} size="lg" mt="md">
                  Mental health emergency helpline
                </Text>
                <br />
                <Text size="sm" color="dimmed">
                  Institute of Mental Health (IMH) helpline: 6389 2222.
                  <br /> Singapore Association for Mental Health helpline: 1800
                  283 7019.
                  <br />
                  TOUCH Community Services helpline for youth counselling
                  services: 1800 377 2252.
                </Text>
              </Card>
            </Grid.Col>
          </Grid>

          <div
            style={{
              width: 500,
              marginTop: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 'auto',
            }}
          >
            <Image src={pic1} alt="forumtipsicon" className="consultation" />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
