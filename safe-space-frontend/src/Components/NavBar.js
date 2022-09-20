import React from 'react';
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

import sslogo from '../images/sslogo.png';

export default function NavBar() {
  const navigate = useNavigate();
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
        </Grid>
      </Container>
    </div>
  );
}
