import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Text, Title } from "@mantine/core";
import { BACKEND_URL } from "../constants.js";
import { useAuth } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function CalendarModal(props) {
  console.log(props.item);
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    }
  }, [user]);

  const { id, end, start, title, type } = props.item;

  const userOfEvent = props.item.user;

  const endTime = end.toString();
  const startTime = start.toString();

  const { updateClientInfo, updateTherapistInfo } = useAuth();
  // getting the specific user/therapist and their IDs respectively.
  const getOwnInfoForClient = async () => {
    const response = await axios.get(`${BACKEND_URL}/clients/${user.email}`);

    updateClientInfo(response.data);
  };

  const getOwnInfoForTherapist = async () => {
    const response = await axios.get(`${BACKEND_URL}/therapists/${user.email}`);
    updateTherapistInfo(response.data);
  };

  const handleClose = () => {
    props.setModalVisible(false);
  };

  const handleCancel = async () => {
    if (type === "appt") {
      const response = await axios.delete(`${BACKEND_URL}/appointments/${id}`);

      console.log(response.data);

      if (user && user[`https://any-namespace/roles`].length !== 0) {
        getOwnInfoForTherapist();

        //TO FIX THIS ROUTE LATER
        navigate("../therapist/calendardash");
      } else {
        getOwnInfoForClient();

        //TO FIX THIS ROUTE LATER
        navigate("../../therapist/calendardash");
      }

      props.setModalVisible(false);
    } else {
      console.log(type);

      const response = await axios.delete(`${BACKEND_URL}/therapists/${id}`);

      console.log(response.data);

      getOwnInfoForTherapist();

      //TO FIX THIS ROUTE LATER
      navigate("../therapist/calendardash");

      props.setModalVisible(false);
    }
  };

  const handleViewJournal = () => {
    const journalId = id;
    navigate(`../journals/${journalId}`);
  };

  return (
    <>
      <div>CalendarModal</div>
      <div key={id}>
        <button onClick={handleClose}>Go back to Full Calendar</button>
        <h4> {title}</h4>
        <h5>Start: {startTime}</h5>
        <h5>End: {endTime}</h5>
        {type === "journal" ? (
          <>
            <button
              onClick={() => handleViewJournal()}
              // onClick={() => setCreateNew(!createNew)}
            >
              See Your Journal{" "}
            </button>
          </>
        ) : null}
        {type === "appt" ? (
          <>
            <button onClick={() => handleCancel()}>
              Cancel this appointment{" "}
            </button>
          </>
        ) : null}
        {type === "blocked date" && userOfEvent === "therapist" ? (
          <>
            <button onClick={() => handleCancel()}>
              Cancel this blocked date{" "}
            </button>
          </>
        ) : null}
      </div>
    </>
  );
}
