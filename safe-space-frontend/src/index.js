import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import About from "./Components/StaticInfo/About";
import Advice from "./Components/StaticInfo/Advice";
import FAQ from "./Components/StaticInfo/FAQ";
import Services from "./Components/StaticInfo/Services";
import SupportResources from "./Components/StaticInfo/SupportResources";

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
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
