import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Text, Title } from "@mantine/core";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";
// import { DatePicker } from "@mantine/dates";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BACKEND_URL } from "../constants.js";
import { useAuth } from "./AuthContext";

export default function CalendarDashboard() {
  const localizer = momentLocalizer(moment);

  const [currUser, setCurrUser] = useState({});
  const [allTherapistInfo, setAllTherapistInfo] = useState([]);
  const [currTherapist, setCurrTherapist] = useState({});

  const [therapistBlockedDate, setTherapistBlockedDate] = useState([]);
  const [therapistAppts, setTherapistAppts] = useState([]);

  //allEvents are to be an array of objects.
  const [allEvents, setAllEvents] = useState([]);

  // const [emailTherapist, setEmailTherapist] = useState({});

  const { loginWithRedirect, user, isAuthenticated, getIdTokenClaims } =
    useAuth0();

  const { currentUser, clientInfo, therapistInfo } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      if (user && user[`https://any-namespace/roles`].length !== 0) {
        //this is therapist acct
        //so get all blocked dates and appts
        //blocked dates can be gotten from therapistinfo usecontext
        //get all appts from appointments controller
        getAllTherapistCalendar();
      }

      if (user && user[`https://any-namespace/roles`].length === 0) {
        getCurrTherapistInfo();
        getAllTherapistBlockedDates();
      }
    } else {
      loginWithRedirect();
    }
  }, [user, therapistBlockedDate]);

  const getCurrTherapistInfo = async () => {
    let emailClient = currUser.email;
    let response = await axios.get(`${BACKEND_URL}/clients/`, emailClient);
    setAllTherapistInfo(response.data.therapists);

    const currTherapistObj = allTherapistInfo.filter(
      (therapist) => therapist.client_therapists.endedAt === null
    );

    setCurrTherapist(currTherapistObj);
  };

  const getAllTherapistCalendar = async () => {
    if (user && user[`https://any-namespace/roles`].length !== 0) {
      let apptResponse = await axios.get(
        `${BACKEND_URL}/appointments/${therapistInfo.id}`
      );
    }
  };

  const getAllTherapistBlockedDates = async () => {
    let emailTherapist;
    if (currUser["https://any-namespace/roles"][0] === "Admin") {
      emailTherapist = currUser.email;
    } else {
      // axios.get(`${BACKEND_URL}/clients/`, emailClient).then((response) => {
      //   emailTherapist = response.data.therapists[0].email;
      // });
      emailTherapist = currTherapist.email;
    }

    let blockedDatesResponse = await axios.get(
      `${BACKEND_URL}/therapists/`,
      emailTherapist
    );
    //blockedDatesResponse will be an object of the therapist with key: blockeddates, value : array of objects.

    setTherapistBlockedDate(blockedDatesResponse.data.blockeddates);
  };

  const MyCalendar = (props) => (
    <div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );

  return (
    <div>
      CalendarDashboard
      {currUser &&
      Object.keys(currUser).length !== 0 &&
      currUser["https://any-namespace/roles"][0] === "Admin" ? (
        <div>THERAPIST CALENDAR</div>
      ) : (
        <div>CLIENT CALENDAR</div>
      )}
    </div>
  );
}
