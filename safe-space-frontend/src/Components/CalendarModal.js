import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants.js";
import { useAuth } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function CalendarModal(props) {
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
      await axios.delete(`${BACKEND_URL}/appointments/${id}`);
      if (user && user[`https://any-namespace/roles`].length !== 0) {
        getOwnInfoForTherapist();
        navigate("../../therapist/dashboard");
      } else {
        getOwnInfoForClient();
        navigate("../../client/dashboard");
      }

      props.setModalVisible(false);
    } else {
      await axios.delete(`${BACKEND_URL}/therapists/${id}`);

      getOwnInfoForTherapist();

      navigate("../../therapist/dashboard");

      props.setModalVisible(false);
    }
  };

  const handleViewJournal = () => {
    const journalId = id;
    navigate(`../journals/${journalId}`);
  };

  return (
    <>
      <div key={id}>
        <button onClick={handleClose}>Go back to Full Calendar</button>
        <h4> {title}</h4>
        <h5>Start: {startTime}</h5>
        <h5>End: {endTime}</h5>
        {type === "journal" ? (
          <>
            <button onClick={() => handleViewJournal()}>
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
