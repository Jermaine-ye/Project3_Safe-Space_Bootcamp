import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Group,
} from "@mantine/core";

export default function JournalList() {
  // const [journalList, setJournalList] = useState([]);
  // const navigate = useNavigate();
  // const { user, clientInfo } = useAuth0();

  // useEffect(() => {
  //   axios
  //     .get(`${BACKEND_URL}/journals/${clientInfo.email}`)
  //     .then((response) => {
  //       setJournalList(response.data);
  //     });
  //   console.log(clientInfo);
  //   console.log(journalList);
  // }, []);

  return <div>JournalList</div>;
}
