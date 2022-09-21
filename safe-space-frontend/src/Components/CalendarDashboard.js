import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import CalendarModal from "./CalendarModal";

export default function CalendarDashboard() {
  const localizer = momentLocalizer(moment);
  const [selected, setSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleSelected = (event) => {
    setModalVisible(true);
    setSelected(event);
    console.log("this is running");
    const { id, type, user } = event;
    console.log(event);
    console.log(selected);
    // if (type === "appt" && user === "client") {
    // } else if (type === "appt" && user === "therapist") {
    // } else if (type === "blocked date") {
    // } else if (type === "journal") {
    // }

    // //event is an object with values of start, end, etc.
    // //if i can get the id of this event, i can then useNavigate to navigate them to the relevant links
    // console.info("[handleSelected - event]", event);
  };

  // const [allTherapistInfo, setAllTherapistInfo] = useState([]);
  const [currTherapist, setCurrTherapist] = useState({});

  const [therapistBlockedDate, setTherapistBlockedDate] = useState([]);
  const [therapistAppts, setTherapistAppts] = useState([]);
  const [clientJournals, setClientJournals] = useState([]);

  //allEvents are to be an array of objects.
  const [allEvents, setAllEvents] = useState([]);

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const { clientInfo, therapistInfo } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      if (user && user[`https://any-namespace/roles`].length !== 0) {
        console.log(therapistInfo);
        //this is therapist acct
        //so get all blocked dates and appts
        //blocked dates can be gotten from therapistinfo usecontext
        getOwnBlockedDate();

        //get all appts from appointments controller
        getAllTherapistApptCalendar();
      }

      if (user && user[`https://any-namespace/roles`].length === 0) {
        //this is the client acct
        console.log(clientInfo);
        //get all appts and prev journal entries of the client. Can get from clientInfo!
        getClientApptsJournals();
      }
    }
  }, [user]);

  const getClientApptsJournals = async () => {
    console.log(clientInfo);
    const { appointments, journalentries, therapists } = clientInfo;

    let currTherapistInfo = await therapists.forEach((therapist) => {
      if (
        therapist.client_therapists.chosenTherapist &&
        therapist.client_therapists.endedAt === null
      ) {
        setCurrTherapist(therapist.email);
        return therapist;
      }
    });

    console.log(currTherapistInfo);

    appointments.forEach((data) => {
      const startTime = data.startDatetime;
      const endTime = data.endDatetime;
      const therapistID = data.therapistId;
      const { firstName, lastName } = data.therapist;
      const apptID = data.id;

      const newObject = {
        id: apptID,
        type: "appt",
        user: "client",
        title: `Appointment with therapist ${firstName} ${lastName}`,
        start: new Date(startTime),
        end: new Date(endTime),
      };

      if (therapistAppts.length !== 0) {
        setTherapistAppts([...therapistAppts, newObject]);
      } else {
        setTherapistAppts([newObject]);
      }

      if (allEvents.length !== 0) {
        setAllEvents([...allEvents, newObject]);
      } else {
        setAllEvents([newObject]);
      }
    });

    journalentries.forEach((data) => {
      const startTime = data.dueBy;
      const endTime = data.dueBy;
      const therapistID = data.therapistId;
      const { firstName, lastName } = data.therapist;
      const journalID = data.id;

      const newObject = {
        id: journalID,
        type: "journal",
        user: "client",
        title: `Journal under therapist ${firstName} ${lastName}`,
        start: new Date(startTime),
        end: new Date(endTime),
      };

      if (clientJournals.length !== 0) {
        setClientJournals([...clientJournals, newObject]);
      } else {
        setClientJournals([newObject]);
      }
      if (allEvents.length !== 0) {
        setAllEvents([...allEvents, newObject]);
      } else {
        setAllEvents([newObject]);
      }
    });
  };

  const getOwnBlockedDate = () => {
    const { blockeddates } = therapistInfo;
    console.log(therapistInfo);

    blockeddates.forEach((blockDate) => {
      const date = blockDate.date;
      const ID = blockDate.id;
      console.log(date);

      const newObject = {
        id: ID,
        type: "blocked date",
        title: "Blocked Date",
        user: "therapist",
        start: new Date(date),
        end: new Date(date),
      };

      if (therapistBlockedDate.length !== 0) {
        setTherapistBlockedDate([...therapistBlockedDate, newObject]);
      } else {
        setTherapistBlockedDate([newObject]);
      }
      if (allEvents.length !== 0) {
        setAllEvents([...allEvents, newObject]);
      } else {
        setAllEvents([newObject]);
      }
    });

    // setTherapistBlockedDate(therapistInfo.blockeddates);
  };

  const getAllTherapistApptCalendar = async () => {
    console.log(therapistInfo);
    const { id } = therapistInfo;
    let apptDatesResponse = await axios.get(
      `${BACKEND_URL}/appointments/therapist/${id}`
    );
    let apptDates = await apptDatesResponse.data;

    apptDates.forEach((date) => {
      console.log(date);
      const startTime = new Date(date.startDatetime);
      const endTime = new Date(date.endDatetime);
      const clientID = date.clientId;
      const { firstName, lastName } = date.client;
      const apptID = date.id;

      const newObject = {
        id: apptID,
        type: "appt",
        user: "therapist",
        title: `Appointment with patient ${firstName} ${lastName}`,
        start: startTime,
        end: endTime,
      };

      if (therapistAppts.length !== 0) {
        setTherapistAppts([...therapistAppts, newObject]);
      } else {
        setTherapistAppts([newObject]);
      }
      if (allEvents.length !== 0) {
        setAllEvents([...allEvents, newObject]);
      } else {
        setAllEvents([newObject]);
      }
    });
  };

  //allEvents are to be an array of objects.
  // const allEvents = [
  //   {
  //     title: "Blocked Date",
  //     user: "therapist",
  //     start: "2022-09-20 10:56:13.488 +0900",
  //     end: "2022-09-20 10:56:13.488 +0900",
  //   },
  //   {
  //     title: "Blocked Date2",
  //     user: "therapist",
  //     start: "2022-09-20 10:56:13.488 +0900",
  //     end: "2022-09-20 10:56:13.488 +0900",
  //   },
  // ];

  // const MyCalendar = (props) => (
  //   <div>
  //     <Calendar
  //       localizer={localizer}
  //       events={allEvents}
  //       startAccessor="start"
  //       endAccessor="end"
  //       selected={selected}
  //       onSelectEvent={handleSelected}
  //       style={{ height: 500 }}
  //     />
  //   </div>
  // );

  // const getAllTherapistBlockedDates = async () => {
  //   let emailTherapist = currTherapist.email;

  //   let blockedDatesResponse = await axios.get(
  //     `${BACKEND_URL}/therapists/${emailTherapist}`
  //   );
  //   //blockedDatesResponse will be an object of the therapist with key: blockeddates, value : array of objects.

  //   let blockedDates = blockedDatesResponse.data.blockeddates;

  //   blockedDates.forEach((blockDate) => {
  //     const date = blockDate.date;
  //     console.log(date);

  //     const newObject = {
  //       title: "Blocked Date",
  //       start: date,
  //       end: date,
  //     };

  //     if (therapistBlockedDate.length !== 0) {
  //       setTherapistBlockedDate([...therapistBlockedDate, newObject]);
  //     } else {
  //       setTherapistBlockedDate([newObject]);
  //     }
  //   });
  // };

  //  let apptDatesResponse = await axios.get(
  //   `${BACKEND_URL}/appointments/therapist/${currTherapistInfo.id}`
  // );
  // let apptDates = await apptDatesResponse.data;

  // apptDates.forEach((date) => {
  //   const startTime = date.startDatetime;
  //   const endTime = date.endDatetime;
  //   const { firstName, lastName } = currTherapistInfo;

  //   const newObject = {
  //     title: `Appointment with ${firstName} ${lastName}`,
  //     start: startTime,
  //     end: endTime,
  //   };

  //   if (therapistAppts.length !== 0) {
  //     setTherapistAppts([...therapistAppts, newObject]);
  //   } else {
  //     setTherapistAppts([newObject]);
  //   }
  // });

  return (
    <div>
      CalendarDashboard
      {user && user[`https://any-namespace/roles`].length !== 0 ? (
        <>
          <div>THERAPIST CALENDAR</div>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            selected={selected}
            onSelectEvent={handleSelected}
            style={{ height: 500 }}
          />
        </>
      ) : (
        <>
          <div>CLIENT CALENDAR</div>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            selected={selected}
            onSelectEvent={handleSelected}
            style={{ height: 500 }}
          />
        </>
      )}
      {modalVisible ? <CalendarModal item={selected} /> : null}
    </div>
  );
}

//
//so get all appts of the current therapist.
//get all blocked dates of the current therapist.
// const getCurrTherapistApptsBlockedDates = async () => {
//   const { therapists } = clientInfo;

//   // setAllTherapistInfo(therapists);

//   let currTherapistInfo = await therapists.forEach((therapist) => {
//     if (
//       therapist.client_therapists.chosenTherapist &&
//       therapist.client_therapists.endedAt === null
//     ) {
//       setCurrTherapist(therapist.email);
//       return therapist;
//     }
//   });

//   console.log(currTherapistInfo);

//   let blockedDatesResponse = await axios.get(
//     `${BACKEND_URL}/therapists/${currTherapistInfo.email}`
//   );

//   //blockedDatesResponse will be an object of the therapist with key: blockeddates, value : array of objects.

//   let apptDatesResponse = await axios.get(
//     `${BACKEND_URL}/appointments/therapist/${currTherapistInfo.id}`
//   );

//   let blockedDates = await blockedDatesResponse.data.blockeddates;
//   let apptDates = await apptDatesResponse.data;

//   blockedDates.forEach((blockDate) => {
//     const date = blockDate.date;
//     const ID = blockDate.id;

//     console.log(date);

//     const newObject = {
//       blockedDateID: ID,
//       title: "Therapist Blocked Date",
//       start: date,
//       end: date,
//     };

//     if (therapistBlockedDate.length !== 0) {
//       setTherapistBlockedDate([...therapistBlockedDate, newObject]);
//     } else {
//       setTherapistBlockedDate([newObject]);
//     }
//   });

//   apptDates.forEach((date) => {
//     const startTime = date.startDatetime;
//     const endTime = date.endDatetime;
//     const { firstName, lastName } = currTherapistInfo;

//     const newObject = {
//       title: `Appointment with ${firstName} ${lastName}`,
//       start: startTime,
//       end: endTime,
//     };

//     if (therapistAppts.length !== 0) {
//       setTherapistAppts([...therapistAppts, newObject]);
//     } else {
//       setTherapistAppts([newObject]);
//     }
//   });
// };
