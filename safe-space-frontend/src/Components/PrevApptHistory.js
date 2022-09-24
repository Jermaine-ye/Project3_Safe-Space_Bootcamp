import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BACKEND_URL } from "../constants.js";
import { useAuth } from "./AuthContext";
import axios from "axios";

export default function PrevApptHistory() {
  const { user, isAuthenticated } = useAuth0();
  const [indivClientEmail, setIndivClientEmail] = useState("");
  const [indivClientInfo, setIndivClientInfo] = useState("");

  let { clientId } = useParams();
  const { therapistInfo } = useAuth();
  console.log(clientId);

  const { clients } = therapistInfo;

  useEffect(() => {
    if (isAuthenticated) {
      clients.forEach((client) => {
        const clientID = client.id;
        const clientEmail = client.email;

        if (clientID === clientId) {
          setIndivClientEmail(clientEmail);
        }
      });

      getClientInfo();
    }
  }, [user, indivClientEmail]);

  let allAppointments;

  const getClientInfo = async () => {
    let clientInfoResponse = await axios.get(
      `${BACKEND_URL}/clients/${indivClientEmail}`
    );

    setIndivClientInfo(clientInfoResponse.data);
    //appointments is an array of objects
    const { appointments } = clientInfoResponse.data;

    allAppointments = appointments.map((appointment) => {
      const { id, startDatetime, endDatetime, therapist } = appointments;

      const { firstName, lastName } = therapist;
      const startEvent = new Date(startDatetime);
      const endEvent = new Date(endDatetime);
      const startTime = startEvent.toLocaleDateString();
      const endTime = endEvent.toLocaleDateString();

      return (
        <li key={id}>
          <h4>
            APPOINTMENT {id} from {startTime} to {endTime} with Therapist{" "}
            {firstName} {lastName}
          </h4>
        </li>
      );
    });
  };

  return (
    <>
      <div>PrevApptHistory</div>
      {indivClientInfo && indivClientInfo.length > 0 ? (
        <div>
          <ul>{allAppointments}</ul>
        </div>
      ) : null}
    </>
  );
}
