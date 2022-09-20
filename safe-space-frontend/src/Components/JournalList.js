import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { user } from '@auth0/auth0-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Form,
  Input,
  Textarea,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { BACKEND_URL } from '../constants.js';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { useAuth0 } from '@auth0/auth0-react';
const params = useParams();

export default function JournalList() {
  const [journalListings, setJournalListings] = useState([]);

  const getJournalListings = async () => {
    const data = await axios.get(`${BACKEND_URL}/journals/${params.clientId}`);
    console.log(data);
    setJournalListings(data.data);
  };

  useEffect(() => {
    getJournalListings();
  }, []);

  // const journalList = journalListings.map((listing,index) => (

  // ))

  return <div>{JournalList}</div>;
}
