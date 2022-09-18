import React from 'react';
import { Text, Title, Container, Grid, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import sslogo from '../images/sslogo.png';

export default function Footer() {
  return (
    <div>
      <Container fluid="true" className="Footer-container">
        <Container className="Footer-wrap" size="md" px="xs">
          <Grid>
            <Grid.Col span="auto">
              <Image
                src={sslogo}
                alt="safe space logo"
                className="Footer-logo"
              />
            </Grid.Col>
            <Grid.Col span="auto">
              <Link to="/index">Home</Link> <br />
              <br />
              <Link to="/about">About Us</Link> <br />
              <br />
              <Link to="/advice">Advice</Link>
            </Grid.Col>

            <Grid.Col span="auto">
              <Link to="/faq">FAQ</Link>
              <br />
              <br />
              <Link to="/services">Services</Link> <br />
              <br />
              <Link to="/support">Support Resources</Link>
            </Grid.Col>

            <Grid.Col span="auto">
              <Text size="sm">
                Contact@safespace.com <br />
                +65922220000
                <br />
                <hr />
                <Title order={6}>Counselling Hours (SGT)</Title> Mon - Sun, 7.00
                AM - 11.00 PM <br />
                <Title order={6}> Corporate Office Hours (SGT)</Title> Mon -
                Fri, 9.30 AM - 6 PM (excl public holidays)
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
        <hr />
        <Text color="dimmed">© 2022 Safe Space Pte Ltd</Text>
      </Container>
    </div>
  );
}
