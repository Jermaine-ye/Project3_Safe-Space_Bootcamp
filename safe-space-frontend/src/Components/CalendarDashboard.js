import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import Select from "react-select";
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";
import DateTimePicker from "react-datetime-picker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BACKEND_URL } from "../constants.js";
import { useAuth } from "./AuthContext";
import CalendarModalDashboard from "./CalendarModalDashboard";

export default function CalendarDashboard() {
  const localizer = momentLocalizer(moment);
  const [selected, setSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

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
    title: "",
    type: "appt",
    therapistId: 0,
    clientId: 0,
  });

  const [newBlocked, setNewBlocked] = useState({
    start: new Date(),
    end: new Date(),
    title: "Blocked Date",
    type: "blocked date",
    therapistId: 0,
  });

  let currTher;

  const { user, isAuthenticated } = useAuth0();

  const { clientInfo, therapistInfo } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      if (user && user[`https://any-namespace/roles`].length !== 0) {
        getOwnBlockedDateAppts();
      }
      if (user && user[`https://any-namespace/roles`].length === 0) {
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
      }
    });
  }

  const handleSelected = (event) => {
    setModalVisible(true);
    setSelected(event);
  };

  const handleNavigateFull = (event) => {
    if (user[`https://any-namespace/roles`].length !== 0) {
      navigate("../calendar");
    } else {
      navigate("../calendar");
    }
  };

  const getClientApptsJournals = async () => {
    const { appointments, journalentries } = clientInfo;

    await appointments.forEach((data) => {
      const startTime = data.startDatetime;
      const endTime = data.endDatetime;
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
      if (data.input1 !== null) {
        endDate = new Date(data.updatedAt);
      } else {
        endDate = new Date(data.dueBy);
      }

      const startDate = new Date(endDate.getTime() - 3600000);
      const { firstName, lastName } = data.therapist;
      const journalID = data.id;

      const newObject = {
        id: journalID,
        type: "journal",
        user: "client",
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

    const { blockeddates } = therapistInfo;

    await blockeddates.forEach((blockDate) => {
      const startDate = new Date(blockDate.date);
      const endDate = new Date(startDate.getTime() + 86400000);
      const ID = blockDate.id;

      const newObject = {
        id: ID,
        type: "blocked date",
        title: `THERAPIST UNAVALIABLE - ${therapistInfo.firstName} ${therapistInfo.lastName}`,
        user: "client",
        start: startDate,
        end: endDate,
      };

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

    await blockeddates.forEach((blockDate) => {
      const startDate = new Date(blockDate.date);
      const endDate = new Date(startDate.getTime() + 86400000);
      const ID = blockDate.id;

      const newObject = {
        id: ID,
        type: "blocked date",
        title: "Blocked Date",
        user: "therapist",
        start: startDate,
        end: endDate,
      };

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
      }
    });

    let apptDatesResponse = await axios.get(
      `${BACKEND_URL}/appointments/therapist/${id}`
    );
    let apptDates = await apptDatesResponse.data;

    setApptDates(apptDates);

    await apptDates.forEach((date) => {
      const startTime = new Date(date.startDatetime);
      const endTime = new Date(date.endDatetime);
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

    setAllEvents([...therapistAppts, ...therapistBlockedDate]);
  };

  let clientOptions = [];

  if (
    user &&
    user[`https://any-namespace/roles`].length !== 0 &&
    therapistInfo &&
    therapistInfo.clients !== []
  ) {
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
    if (i.action === "select-option") {
      setSelectedClient(e);
      setNewEvent({
        ...newEvent,
        clientId: e.value,
        therapistId: therapistInfo.id,
      });
    } else if (i.action === "clear") {
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

      let response = await axios.post(`${BACKEND_URL}/appointments`, newObj);

      const { id, startDatetime, endDatetime } = response.data;

      const newApptEvent = {
        id: id,
        type: "appt",
        user: "therapist",
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

      let response = await axios.post(`${BACKEND_URL}/appointments`, newObj);

      const { id, startDatetime, endDatetime } = response.data;

      const newApptEvent = {
        id: id,
        type: "appt",
        user: "client",
        title: `Appointment with therapist ${currTher.name}`,
        start: new Date(startDatetime),
        end: new Date(endDatetime),
      };

      getOwnInfoForClient();

      setNewMadeAppt(newApptEvent);
      setCreateNew(false);
    }
  };

  const handleBlockedSubmit = async () => {
    const { start } = newBlocked;

    let newObj = {
      date: start,
      therapistId: therapistInfo.id,
    };
    let response = await axios.post(
      `${BACKEND_URL}/therapists/blockeddate`,
      newObj
    );

    const { id, date } = response.data;
    const blockDate = date;
    const startDate = new Date(blockDate);
    const endDate = new Date(startDate.getTime() + 86400000);

    const newBlockedEvent = {
      id: id,
      type: "blocked date",
      user: "therapist",
      title: `Blocked Date`,
      start: startDate,
      end: endDate,
    };

    getOwnInfoForTherapist();
    setNewBlockedDate(newBlockedEvent);
    setCreateBlocked(false);
  };

  const { updateClientInfo, updateTherapistInfo } = useAuth();
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
        + Create Appointment{" "}
      </button>
      {user && user[`https://any-namespace/roles`].length !== 0 ? (
        <>
          <button onClick={() => setCreateBlocked(!createBlocked)}>
            + Create Blocked Date{" "}
          </button>

          {createBlocked ? (
            <>
              <h4>Create New Blocked Date</h4>
              <DateTimePicker
                placeholderText="Start Date and Time"
                value={newBlocked.start}
                onChange={(start) => setNewBlocked({ ...newBlocked, start })}
              />
              <DateTimePicker
                placeholderText="End Date and Time"
                value={newBlocked.end}
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
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
          <DateTimePicker
            placeholderText="End Date and Time"
            value={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          <button onClick={() => handleSubmit()}>Submit Appointment</button>
        </>
      ) : null}
    </div>
  );
}
