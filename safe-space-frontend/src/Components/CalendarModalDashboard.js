import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Text, Title } from "@mantine/core";
import { BACKEND_URL } from "../constants.js";
import { useAuth } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function CalendarModalDashboard(props) {
  console.log(props.item);
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    }
  }, [user]);

  const { id, end, start, title, type } = props.item;

  const endTime = end.toString();
  const startTime = start.toString();

  const handleClose = () => {
    props.setModalVisible(false);
  };

  return (
    <>
      <div>CalendarModal</div>
      <div key={id}>
        <button onClick={handleClose}>Go back to Dashboard</button>
        <h4> {title}</h4>
        <h5>Start: {startTime}</h5>
        <h5>End: {endTime}</h5>
      </div>
    </>
  );
}
