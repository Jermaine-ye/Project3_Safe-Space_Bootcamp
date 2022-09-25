import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Button, Card, Text, Title } from '@mantine/core';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Select from 'react-select';
import moment from 'moment';
import { useAuth0 } from '@auth0/auth0-react';
// import { DatePicker } from "@mantine/dates";
// import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BACKEND_URL } from '../constants.js';
import { useAuth } from './AuthContext';
import CalendarModalDashboard from './CalendarModalDashboard';

export default function CalendarDashboard() {
  const localizer = momentLocalizer(moment);
  const [selected, setSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const [currTherapist, setCurrTherapist] = useState({});

  const [therapistBlockedDate, setTherapistBlockedDate] = useState([]);
  const [therapistAppts, setTherapistAppts] = useState([]);
  const [clientJournals, setClientJournals] = useState([]);
  const [apptDates, setApptDates] = useState([]);
  const [selectedClient, setSelectedClient] = useState([]);

  //allEvents are to be an array of objects.
  const [allEvents, setAllEvents] = useState([]);
  const [newMadeAppt, setNewMadeAppt] = useState();
  const [newBlockedDate, setNewBlockedDate] = useState();

  const [createNew, setCreateNew] = useState(false);
  const [createBlocked, setCreateBlocked] = useState(false);

  const [newEvent, setNewEvent] = useState({
    start: new Date(),
    end: new Date(),
    title: '',
    type: 'appt',
    therapistId: 0,
    clientId: 0,
  });

  const [newBlocked, setNewBlocked] = useState({
    start: new Date(),
    end: new Date(),
    title: 'Blocked Date',
    type: 'blocked date',
    therapistId: 0,
  });

  let currTher;

  console.log(newEvent);
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
        // if (
        //   therapistAppts.length <= apptDates.length ||
        //   therapistBlockedDate <= therapistInfo.blockeddates.length
        // ) {
        //   getOwnBlockedDate();
        // }
        getOwnBlockedDateAppts();
        //get all appts from appointments controller
        // getAllTherapistApptCalendar();
        console.log(therapistBlockedDate);

        console.log(allEvents);
      }

      if (user && user[`https://any-namespace/roles`].length === 0) {
        //this is the client acct
        console.log(clientInfo);
        console.log(therapistInfo);

        //get all appts and prev journal entries of the client. Can get from clientInfo!
        getClientApptsJournals();
      }
    }
  }, [
    user,
    therapistAppts,
    therapistBlockedDate,
    clientJournals,
    newMadeAppt,
    clientInfo,
    therapistInfo,
  ]);

  if (user && user[`https://any-namespace/roles`].length === 0) {
    let allTher = clientInfo.therapists;
    allTher.forEach((ther) => {
      const { id, client_therapists, firstName, lastName, email } = ther;
      const { chosenTherapist, endedAt } = client_therapists;

      if (chosenTherapist && endedAt === null) {
        currTher = { id: id, name: `${firstName} ${lastName}`, email: email };
        console.log(currTher);
      }
    });
  }

  const handleSelected = (event) => {
    setModalVisible(true);
    setSelected(event);
    console.log('this is running');
    const { id, type, user } = event;
  };

  const handleNavigateFull = (event) => {
    console.log(event);
    //TO CHANGE TO CORRECT ROUTE LATER.
    if (user[`https://any-namespace/roles`].length !== 0) {
      navigate('../therapist/calendar');
    } else {
      navigate('../client/calendar');
    }
  };

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

    await appointments.forEach((data) => {
      const startTime = data.startDatetime;
      const endTime = data.endDatetime;
      const therapistID = data.therapistId;
      const { firstName, lastName } = data.therapist;
      const apptID = data.id;

      const newObject = {
        id: apptID,
        type: 'appt',
        user: 'client',
        title: `Appointment with therapist ${firstName} ${lastName}`,
        start: new Date(startTime),
        end: new Date(endTime),
      };

      if (therapistAppts.length !== 0) {
        const index = therapistAppts.findIndex((element) => {
          if (element.id === newObject.id) {
            return true;
          }
          return false;
        });

        if (index === -1) {
          setTherapistAppts([...therapistAppts, newObject]);
        }
      } else {
        setTherapistAppts([newObject]);
      }
    });

    await journalentries.forEach((data) => {
      let endDate;
      if (data.input1.length !== 0) {
        endDate = new Date(data.updatedAt);
      } else {
        endDate = new Date(data.dueBy);
      }

      const startDate = new Date(endDate.getTime() - 3600000);
      // const startDate = new Date(endDate.getTime() - 86400000);
      const therapistID = data.therapistId;
      const { firstName, lastName } = data.therapist;
      const journalID = data.id;

      const newObject = {
        id: journalID,
        type: 'journal',
        user: 'client',
        title: `Journal under therapist ${firstName} ${lastName}`,
        start: startDate,
        end: endDate,
        allday: true,
      };

      if (clientJournals.length !== 0) {
        const index = clientJournals.findIndex((element) => {
          if (element.id === newObject.id) {
            return true;
          }
          return false;
        });

        if (index === -1) {
          setClientJournals([...clientJournals, newObject]);
        }
      } else {
        setClientJournals([newObject]);
      }
    });

    const { blockeddates, id } = therapistInfo;
    console.log(therapistInfo);

    await blockeddates.forEach((blockDate) => {
      const startDate = new Date(blockDate.date);
      // const endDate = new Date(blockDate.date);
      const endDate = new Date(startDate.getTime() + 86400000);
      const ID = blockDate.id;
      console.log(startDate);

      const newObject = {
        id: ID,
        type: 'blocked date',
        title: `THERAPIST UNAVALIABLE - ${therapistInfo.firstName} ${therapistInfo.lastName}`,
        user: 'client',
        start: startDate,
        end: endDate,
      };

      console.log(newObject);

      if (therapistBlockedDate.length !== 0) {
        // console.log(therapistBlockedDate.indexOf(newObject));

        const index = therapistBlockedDate.findIndex((element) => {
          if (element.id === newObject.id) {
            return true;
          }
          return false;
        });

        if (index === -1) {
          setTherapistBlockedDate([...therapistBlockedDate, newObject]);
        }
      } else {
        setTherapistBlockedDate([newObject]);
      }
    });

    setAllEvents([
      ...clientJournals,
      ...therapistAppts,
      ...therapistBlockedDate,
    ]);
  };

  const getOwnBlockedDateAppts = async () => {
    const { blockeddates, id } = therapistInfo;
    console.log(therapistInfo);

    await blockeddates.forEach((blockDate) => {
      const startDate = new Date(blockDate.date);
      // const endDate = new Date(blockDate.date);
      const endDate = new Date(startDate.getTime() + 86400000);
      const ID = blockDate.id;
      console.log(startDate);

      const newObject = {
        id: ID,
        type: 'blocked date',
        title: 'Blocked Date',
        user: 'therapist',
        start: startDate,
        end: endDate,
      };

      console.log(newObject);

      if (therapistBlockedDate.length !== 0) {
        const index = therapistBlockedDate.findIndex((element) => {
          if (element.id === newObject.id) {
            return true;
          }
          return false;
        });

        if (index === -1) {
          setTherapistBlockedDate([...therapistBlockedDate, newObject]);
        }
      } else {
        setTherapistBlockedDate([newObject]);
        // setAllEvents([newObject]);
      }
    });

    let apptDatesResponse = await axios.get(
      `${BACKEND_URL}/appointments/therapist/${id}`
    );
    let apptDates = await apptDatesResponse.data;

    setApptDates(apptDates);

    await apptDates.forEach((date) => {
      console.log(date);
      const startTime = new Date(date.startDatetime);
      const endTime = new Date(date.endDatetime);
      const clientID = date.clientId;
      const { firstName, lastName } = date.client;
      const apptID = date.id;

      const newObject = {
        id: apptID,
        type: 'appt',
        user: 'therapist',
        title: `Appointment with patient ${firstName} ${lastName}`,
        start: startTime,
        end: endTime,
      };

      //if newObject is the same as what is in the therapistAppts, i dont want to push it. or if the appt id is the same.

      if (therapistAppts.length !== 0) {
        const index = therapistAppts.findIndex((element) => {
          if (element.id === newObject.id) {
            return true;
          }
          return false;
        });

        if (index === -1) {
          setTherapistAppts([...therapistAppts, newObject]);
          // setAllEvents([...allEvents, newObject]);
        }
      } else {
        setTherapistAppts([newObject]);
        // setAllEvents([newObject]);
      }
    });

    setAllEvents([...therapistAppts, ...therapistBlockedDate]);
    console.log(allEvents);
    // setTherapistBlockedDate(therapistInfo.blockeddates);
  };

  let clientOptions = [];

  if (therapistInfo && therapistInfo.clients !== []) {
    const { clients } = therapistInfo;

    clients.map((client) => {
      const { id, firstName, lastName } = client;

      const newClientOption = {
        value: id,
        label: `${firstName} ${lastName}`,
      };
      clientOptions.push(newClientOption);

      return clientOptions;
    });
  }

  const handleSelectChange = (e, i) => {
    if (i.action === 'select-option') {
      setSelectedClient(e);
      setNewEvent({
        ...newEvent,
        clientId: e.value,
        therapistId: therapistInfo.id,
      });
    } else if (i.action === 'clear') {
      setSelectedClient([]);
      setNewEvent({ ...newEvent, clientId: 0 });
    }
  };

  const handleSubmit = async () => {
    if (user && user[`https://any-namespace/roles`].length !== 0) {
      const { start, end } = newEvent;

      let newObj = {
        startDatetime: start,
        endDatetime: end,
        therapistId: therapistInfo.id,
        clientId: selectedClient.value,
      };

      console.log(newObj);

      let response = await axios.post(`${BACKEND_URL}/appointments`, newObj);

      console.log(response);

      const { id, startDatetime, endDatetime } = response.data;

      const newApptEvent = {
        id: id,
        type: 'appt',
        user: 'therapist',
        title: `Appointment with patient ${selectedClient.label}`,
        start: new Date(startDatetime),
        end: new Date(endDatetime),
      };

      getOwnInfoForTherapist();
      setNewMadeAppt(newApptEvent);
      setCreateNew(false);
    } else {
      const { start, end } = newEvent;

      let newObj = {
        startDatetime: start,
        endDatetime: end,
        therapistId: currTher.id,
        clientId: clientInfo.id,
      };

      console.log(newObj);
      let response = await axios.post(`${BACKEND_URL}/appointments`, newObj);

      console.log(response);

      const { id, startDatetime, endDatetime } = response.data;

      const newApptEvent = {
        id: id,
        type: 'appt',
        user: 'client',
        title: `Appointment with therapist ${currTher.name}`,
        start: new Date(startDatetime),
        end: new Date(endDatetime),
      };

      getOwnInfoForClient();

      setNewMadeAppt(newApptEvent);
      setCreateNew(false);

      //       const newApptEvent = {

      //         title,
      //         therapistId: currTher.id,
      //         clientId: clientInfo.id,
      //       };

      // console.log(newApptEvent);
      // setAllEvents([...allEvents, newApptEvent]);
    }
  };

  const handleBlockedSubmit = async () => {
    const { start } = newBlocked;

    let newObj = {
      date: start,
      therapistId: therapistInfo.id,
    };

    console.log(newObj);

    let response = await axios.post(
      `${BACKEND_URL}/therapists/blockeddate`,
      newObj
    );

    console.log(response);

    const { id, date } = response.data;
    const blockDate = date;
    const startDate = new Date(blockDate);
    const endDate = new Date(startDate.getTime() + 86400000);

    const newBlockedEvent = {
      id: id,
      type: 'blocked date',
      user: 'therapist',
      title: `Blocked Date`,
      start: startDate,
      end: endDate,
    };

    getOwnInfoForTherapist();
    setNewBlockedDate(newBlockedEvent);
    setCreateBlocked(false);
  };

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

  return (
    <div>
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
            defaultView="week"
            toolbar={false}
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
            defaultView="week"
            toolbar={false}
          />
        </>
      )}
      {modalVisible ? (
        <CalendarModalDashboard
          item={selected}
          setModalVisible={setModalVisible}
        />
      ) : null}
      <br />
      <br />
      <button onClick={() => handleNavigateFull()}>See Full Calendar </button>
      <button onClick={() => setCreateNew(!createNew)}>
        + Create Appointment{' '}
      </button>
      {user && user[`https://any-namespace/roles`].length !== 0 ? (
        <>
          <button onClick={() => setCreateBlocked(!createBlocked)}>
            + Create Blocked Date{' '}
          </button>

          {createBlocked ? (
            <>
              <h4>Create New Blocked Date</h4>
              <DateTimePicker
                placeholderText="Start Date and Time"
                value={newBlocked.start}
                // selected={newBlocked.start}
                onChange={(start) => setNewBlocked({ ...newBlocked, start })}
              />
              <DateTimePicker
                placeholderText="End Date and Time"
                value={newBlocked.end}
                // selected={newBlocked.end}
                onChange={(end) => setNewBlocked({ ...newBlocked, end })}
              />
              <button onClick={() => handleBlockedSubmit()}>
                Submit Blocked Date
              </button>
            </>
          ) : null}
        </>
      ) : null}
      {createNew ? (
        <>
          <h4>Create New Appointment</h4>
          {user && user[`https://any-namespace/roles`].length !== 0 ? (
            <>
              <h4>Choose Your Client</h4>
              <Select
                options={clientOptions}
                value={selectedClient}
                onChange={handleSelectChange}
              />
            </>
          ) : null}
          <h4>Choose Your Appointment Time</h4>
          <DateTimePicker
            placeholderText="Start Date and Time"
            value={newEvent.start}
            // selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DateTimePicker
            placeholderText="End Date and Time"
            value={newEvent.end}
            // selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button onClick={() => handleSubmit()}>Submit Appointment</button>
        </>
      ) : null}
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
