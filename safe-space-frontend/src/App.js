import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
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
import PatientList from "./Components/PatientList";
import PatientsUpcoming from "./Components/PatientsUpcoming";
import { AuthProvider } from "./Components/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRoutesClient from "./PrivateRoutesClient";

// export const AuthContext = createContext();

export default function App() {
  // const [currentUser, setCurrentUser] = useState([]);
  // const [clientInfo, setClientInfo] = useState([]);
  // const [therapistInfo, setTherapistInfo] = useState();
  // //reset this to true when you finish editing the files
  // const [loading, setLoading] = useState(false);

  // // states for evaluation form. PUT request all at results page
  // const [speciality, setSpeciality] = useState(1);
  // const [age, setAge] = useState("");
  // const [language, setLanguage] = useState(1);
  // const [gender, setGender] = useState(1);
  // const [religion, setReligion] = useState(1);

  const navigate = useNavigate();
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  // const updateClientData = (data) => {
  //   console.log(`updated client info for ID`, data);
  //   setCurrentUser(data);
  // };

  // const updateClientInfo = (data) => {
  //   console.log(`updated client info`, data);
  //   setClientInfo(data);
  // };

  // const updateTherapistInfo = (data) => {
  //   console.log(`updated therapist info`, data);
  //   setTherapistInfo(data);
  // };

  // const updateSpeciality = (info) => {
  //   console.log(`updated client's speciality`, info);
  //   setSpeciality(info);
  // };

  // const updateAge = (info) => {
  //   console.log(`updated client's age preference`, info);
  //   setAge(info);
  // };

  // const updateLanguage = (info) => {
  //   console.log(`updated client's language preference`, info);
  //   setLanguage(info);
  // };

  // const updateGender = (info) => {
  //   console.log(`updated client's gender preference`, info);
  //   setGender(info);
  // };

  // const updateReligion = (info) => {
  //   console.log(`updated client's religion preference`, info);
  //   setReligion(info);
  // };

  // // States and Functions that are passed down and USE by ALL components.
  // const value = {
  //   updateClientData,
  //   updateSpeciality,
  //   updateAge,
  //   updateLanguage,
  //   updateGender,
  //   updateReligion,
  //   updateClientInfo,
  //   updateTherapistInfo,
  //   currentUser,
  //   speciality,
  //   age,
  //   language,
  //   gender,
  //   religion,
  //   clientInfo,
  //   therapistInfo,
  // };
  // <AuthContext.Provider value={value}> <AuthContext.Provider>
  // =============================================================
  // useEffect(() => {
  //   console.log(user);
  //   setIsAdmin(user[`https://any-namespace/roles`]);
  // }, []);

  return (
    <AuthProvider>
      <div className="App">
        {/* Placeholder for ease of use */}
        <button
          onClick={() => {
            logout();
          }}
        >
          LOG OUT
        </button>

        <Routes>
          {/* check for admin boolean and render client and therapist pages according.  */}
          <Route path="/" element={<LandingPage />} />
          {/*testing the privateRoutes */}
          <Route path="/auth" element={<PrivateRoutes />} />
          <Route path="/authclient" element={<PrivateRoutesClient />} />
          {/* Route that renders about,advice,services,FAQ,Support page */}
          <Route path="/about" element={<About />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<SupportResources />} />
          {/* ===========================================================================CLIENT PORTAL============================================================================================ */}
          {/* SET PRIVATE ROUTES FOR CLIENT */}
          {/* SET OUTLETS FOR SCREENS. */}
          <Route element={<PrivateRoutesClient />}>
            <Route path="/evaluation" element={<EvaluationScreen />}>
              {/* Route that renders evaluation form */}
              <Route
                path="/evaluation/1"
                element={<EvaluationFormPreference />}
              />
              {/* Route that renders evaluation form */}
              <Route
                path="/evaluation/2"
                element={<EvaluationFormSpecialty />}
              />
              {/* Route that renders evaluation results */}
              <Route
                path="/evaluation/results"
                element={<EvaluationResults />}
              />
              {/* Route that renders evaluation results */}
            </Route>
            <Route path="/particulars" element={<PersonalParticularsForm />} />
            {/* Route that renders clientdashboard screen */}

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
          </Route>
          {/* SET PRIVATE ROUTES FOR CLIENT */}
          {/* ===========================================================================THERAPIST PORTAL============================================================================================ */}
          {/* SET PRIVATE ROUTES FOR THERAPIST */}
          {/* SET OUTLETS FOR SCREENS. */}
          <Route element={<PrivateRoutes />}>
            {/* Route that renders therapist dashboard */}
            <Route path="/therapist/" element={<DashboardTherapistScreen />} />
            {/* Route that renders full calendar of therapist on therapists's portal */}
            <Route path="/therapist/calendar" element={<CalendarFull />} />
            {/* Route that renders indiv profile of patient on therapists's portal */}
            <Route
              path="/therapist/patients/profile/"
              element={<PatientProfile />}
            />
            {/* List of patients that are assigned to the current therapist */}
            <Route path="/therapist/patients/" element={<PatientList />} />
            {/*may just be a component to the dashboard  */}
            <Route path="/therapist/upcoming" element={<PatientsUpcoming />} />
            {/* Route that renders appt history for the indiv patient on therapists's portal */}
            <Route
              path="/therapist/patients/:clientId/history"
              element={<PrevApptHistory />}
            />
            {/* Route that renders assigning of journal template to indiv patient on therapists's portal */}
            <Route
              path="/therapist/patients/:clientId/newjournal"
              element={<JournalAssignment />}
            />
            {/* Route that renders new Journal template form of client on therapist portal ?? but if there's already a therapist assignment component?? */}
            {/* <Route
            path="/therapist/:clientId/journal/new"
            element={<JournalTemplate />}
            /> */}
            {/* Route that renders indiv journal done by indiv patient on therapists's portal */}
            <Route
              path="/therapist/patients/:clientId/journal/:journalId"
              element={<JournalSingle />}
            />
            {/* Route that renders indiv memo by therapist(past & present) abt the indiv patient on therapists's portal */}
            <Route
              path="/therapist/patients/:clientId/memos/:memoId"
              element={<MemoSingle />}
            />
            {/* Route that renders blank new memo for the indiv patient on therapists's portal */}
            <Route
              path="/therapist/patients/:clientId/newmemo"
              element={<MemoForm />}
            />
          </Route>
          {/* SET PRIVATE ROUTES FOR THERAPIST */}

          {/* Route that matches all other paths */}
          <Route path="*" element={"Nothing here!"} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
