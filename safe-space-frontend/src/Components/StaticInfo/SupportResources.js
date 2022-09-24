import React from 'react';

import { Button, Card, Text, Title, Grid, Container } from '@mantine/core';

import NavBar from '../NavBar';
import Footer from '../Footer';

export default function SupportResources() {
  return (
    <div>
      <NavBar />
      SupportResources <h2>Crisis Resources</h2>
      <br />
      <h4>These resources are for crisis situations.</h4>
      <Container size="xl" px="xs">
        <Grid>
          <Grid.Col span={4}>
            <Card shadow="sm" p="md">
              <Text weight={500} size="lg" mt="md">
                Emergency medical services
              </Text>
              <Text size="sm" color="dimmed">
                If you or someone you know is in immediate harm, call emergency
                medical services at 995 or approach the A&E department of your
                nearest hospital.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" p="md">
              <Text weight={500} size="lg" mt="md">
                Suicide prevention and crisis helplines
              </Text>
              <Text size="sm" color="dimmed">
                Samaritans of Singapore (SOS): WhatsApp 9151 1767 for support,
                or call their helpline at 1767.
                <br />
                <br /> National CARE Hotline: 1800 202 6868.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" p="md">
              <Text weight={500} size="lg" mt="md">
                Mental health emergency helpline
              </Text>
              <Text size="sm" color="dimmed">
                Institute of Mental Health (IMH) helpline: 6389 2222.
                <br />
                <br /> Singapore Association for Mental Health helpline: 1800
                283 7019.
                <br />
                <br />
                TOUCH Community Services helpline for youth counselling
                services: 1800 377 2252.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
