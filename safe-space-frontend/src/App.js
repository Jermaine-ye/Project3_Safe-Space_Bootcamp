import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { storage } from "./DB/firebase.js";
import {
  // getStorage,
  getDownloadURL,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";
import { useAuth0 } from "@auth0/auth0-react";

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
import About from "./Components/StaticInfo/About";
import Advice from "./Components/StaticInfo/Advice";
import FAQ from "./Components/StaticInfo/FAQ";
import Services from "./Components/StaticInfo/Services";
import SupportResources from "./Components/StaticInfo/SupportResources";
import CalendarDashboard from "./Components/CalendarDashboard";
import { AuthProvider } from "./Components/AuthContext";

const CLIENT_IMAGE_FOLDER_NAME = "client images";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          {/* Route that provides base app UI */}
          {/* Route that renders home content */}
          <Route path="/" element={<LandingPage />} />
          {/* Route that renders about,advice,services,FAQ,Support page */}
          <Route path="/about" element={<About />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<SupportResources />} />
          {/* here we want to do auth0 functions, check authentication only when user clicks log in or sign up button. We tag the isAuthenticated to the onclick of the buttons. BUT WE NEED TO THINK OF HOW TO REDIRECT THEM PROPERLY. Probably useNavigate hook, check isAuthtenticated on useEffect, if authtenticated, grab the user as an async await function. Then use the user.role to redirect them to either client or therapist portal. */}
          <Route path="/client/" element={<DashboardClientScreen />}>
            {/* Route that renders all journal listings of client on client's portal */}
            <Route path="/client/journals" element={<JournalList />} />
            {/* Route that renders all journal listings of client on client's portal */}
            <Route
              path="/client/journals/:journalId"
              element={<JournalSingle />}
            />
            {/* Route that renders new journal form of client on client's portal */}
            <Route
              path="/client/journal/:journalId/new"
              element={<JournalForm />}
            />

            {/* Route that renders full calendar of client on client's portal */}
            <Route path="/client/calendar" element={<CalendarFull />} />
            {/* Route that renders info of therapist on client's portal */}
            <Route path="/client/therapist" element={<TherapistInfo />} />
          </Route>
          {/* Route that renders therapist dashboard */}
          <Route path="/therapist/" element={<DashboardTherapistScreen />} />
          {/* Route that renders full calendar of therapist on therapists's portal */}
          <Route
            path="/therapist/calendardash"
            element={<CalendarDashboard />}
          />
          {/* Route that renders indiv profile of patient on therapists's portal */}
          <Route path="/therapist/calendar" element={<CalendarFull />} />
          {/* Route that renders indiv profile of patient on therapists's portal */}
          <Route
            path="/therapist/patients/:clientId"
            element={<PatientProfile />}
          />{" "}
          {/* Route that renders appt history for the indiv patient on therapists's portal */}
          <Route
            path="/therapist/patients/:clientId/history"
            element={<PrevApptHistory />}
          />{" "}
          {/* Route that renders assigning of journal template to indiv patient on therapists's portal */}
          <Route
            path="/therapist/patients/:clientId/newjournal"
            element={<JournalAssignment />}
          />
          {/* Route that renders indiv journal done by indiv patient on therapists's portal */}
          <Route
            path="/therapist/patients/:clientId/journal/:journalId"
            element={<JournalSingle />}
          />{" "}
          {/* Route that renders indiv memo by therapist(past & present) abt the indiv patient on therapists's portal */}
          <Route
            path="/therapist/patients/:clientId/memos/:memoId"
            element={<MemoSingle />}
          />{" "}
          {/* Route that renders blank new memo for the indiv patient on therapists's portal */}
          <Route
            path="/therapist/patients/:clientId/newmemo"
            element={<MemoForm />}
          />{" "}
          {/* Route that matches all other paths */}
          <Route path="*" element={"Nothing here!"} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
