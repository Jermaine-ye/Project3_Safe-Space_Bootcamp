import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import LandingPage from "./Components/LandingPage";
import EvaluationScreen from "./Screens/EvaluationScreen";
import EvaluationFormPreference from "./Components/EvaluationFormPreference";
import EvaluationFormSpecialty from "./Components/EvaluationFormSpecialty";
import EvaluationResults from "./Components/EvaluationResults";
import DashboardClientScreen from "./Screens/DashboardClientScreen";
import DashboardTherapistScreen from "./Screens/DashboardTherapistScreen";
import JournalList from "./Components/JournalList";
import JournalSingle from "./Components/JournalSingle";
import JournalForm from "./Components/JournalForm";
import PersonalParticularsForm from "./Components/PersonalParticularsForm";
import CalendarFull from "./Components/CalendarFull";
import TherapistInfo from "./Components/TherapistInfo";
import MemoForm from "./Components/MemoForm";
import MemoSingle from "./Components/MemoSingle";
import JournalAssignment from "./Components/JournalAssignment";
import PrevApptHistory from "./Components/PrevApptHistory";
import PatientProfile from "./Components/PatientProfile";

import { Auth0Provider } from "@auth0/auth0-react";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={process.env.REACT_APP_REDIRECT}
    audience={process.env.REACT_APP_AUDIENCE}
    scope={process.env.REACT_APP_SCOPE}
  >
    <BrowserRouter>
      <Routes>
        {/* Route that provides base app UI */}
        <Route path="/" element={<App />}>
          {/* Route that renders home content */}
          {/* here we want to do auth0 functions, check authentication only when user clicks log in or sign up button. We tag the isAuthenticated to the onclick of the buttons. BUT WE NEED TO THINK OF HOW TO REDIRECT THEM PROPERLY. Probably useNavigate hook, check isAuthtenticated on useEffect, if authtenticated, grab the user as an async await function. Then use the user.role to redirect them to either client or therapist portal. */}
          {/* <Route path="/index" element={<LandingPage />} /> */}
          {/* Route that renders evaluation screen */}
          {/* <Route path="/evaluation" element={<EvaluationScreen />}> */}
          {/* Route that renders evaluation form */}
          {/* <Route
              path="/evaluation/1"
              element={<EvaluationFormPreference />}
            /> */}
          {/* Route that renders evaluation form */}
          {/* <Route path="/evaluation/2" element={<EvaluationFormSpecialty />} /> */}
          {/* </Route> */}
          {/* Route that renders evaluation results */}
          {/* here we want to do auth0 functions, check authentication @ evaluation results. BUT WE NEED TO THINK OF HOW TO REDIRECT THEM PROPERLY. THROW BACK TO LANDING PAGE. DO SAME THING. THROW THEM TO CLIENT PORTAL. */}
          {/* <Route path="/evaluation/results" element={<EvaluationResults />} /> */}
          {/* Route that renders particulars form */}
          {/* <Route path="/particulars" element={<PersonalParticularsForm />} /> */}
          {/* Route that renders clientdashboard screen */}
          {/* <Route path="/client/" element={<DashboardClientScreen />}> */}
          {/* Route that renders all journal listings of client on client's portal */}
          {/* <Route
              path="/client/journals"
              element={<JournalList />}
            /> */}
          {/* Route that renders all journal listings of client on client's portal */}
          {/* <Route
              path="/client/journals/:journalId"
              element={<JournalSingle />}
            /> */}
          {/* Route that renders new journal form of client on client's portal */}
          {/* <Route
              path="/client/journal/new"
              element={<JournalForm />}
            /> */}
          {/* Route that renders full calendar of client on client's portal */}
          {/* <Route
              path="/client/calendar"
              element={<CalendarFull />}
            /> */}
          {/* Route that renders info of therapist on client's portal */}
          {/* <Route
              path="/client/therapist"
              element={<TherapistInfo />}
            />
          </Route> */}
          {/* Route that renders therapist dashboard */}
          {/* <Route
            path="/therapist/:therapistId/"
            element={<DashboardTherapistScreen />}
          /> */}
          {/* Route that renders full calendar of therapist on therapists's portal */}
          {/* <Route
            path="/therapist/:therapistId/calendar"
            element={<CalendarFull />}
          /> */}
          {/* Route that renders indiv profile of patient on therapists's portal */}
          {/* <Route
            path="/therapist/:therapistId/patients/:clientId"
            element={<PatientProfile />}
          /> */}
          {/* Route that renders appt history for the indiv patient on therapists's portal */}
          {/* <Route
            path="/therapist/:therapistId/patients/:clientId/history"
            element={<PrevApptHistory />}
          /> */}
          {/* Route that renders assigning of journal template to indiv patient on therapists's portal */}
          {/* <Route
            path="/therapist/:therapistId/patients/:clientId/newjournal"
            element={<JournalAssignment />}
          /> */}
          {/* Route that renders indiv journal done by indiv patient on therapists's portal */}
          {/* <Route
            path="/therapist/:therapistId/patients/:clientId/journal/:journalId"
            element={<JournalSingle />}
          /> */}
          {/* Route that renders indiv memo by therapist(past & present) abt the indiv patient on therapists's portal */}
          {/* <Route
            path="/therapist/:therapistId/patients/:clientId/memos/:memoId"
            element={<MemoSingle />}
          /> */}
          {/* Route that renders blank new memo for the indiv patient on therapists's portal */}
          {/* <Route
            path="/therapist/:therapistId/patients/:clientId/newmemo"
            element={<MemoForm />}
          /> */}

          {/* Route that matches all other paths */}
          <Route path="*" element={"Nothing here!"} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
