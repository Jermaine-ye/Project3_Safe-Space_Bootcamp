import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import LandingPage from './Components/LandingPage';
import EvaluationScreen from './Screens/EvaluationScreen';
import EvaluationFormPreference from './Components/EvaluationFormPreference';
import EvaluationFormSpecialty from './Components/EvaluationFormSpecialty';
import EvaluationResults from './Components/EvaluationResults';
import DashboardClientScreen from './Screens/DashboardClientScreen';
import DashboardTherapistScreen from './Screens/DashboardTherapistScreen';
import JournalList from './Components/JournalList';
import JournalSingle from './Components/JournalSingle';
import JournalForm from './Components/JournalForm';
import PersonalParticularsForm from './Components/PersonalParticularsForm';
import CalendarFull from './Components/CalendarFull';
import TherapistInfo from './Components/TherapistInfo';
import MemoForm from './Components/MemoForm';
import MemoSingle from './Components/MemoSingle';
import JournalAssignment from './Components/JournalAssignment';
import PrevApptHistory from './Components/PrevApptHistory';
import PatientProfile from './Components/PatientProfile';
import About from './Components/StaticInfo/About';
import Advice from './Components/StaticInfo/Advice';
import FAQ from './Components/StaticInfo/FAQ';
import Services from './Components/StaticInfo/Services';
import SupportResources from './Components/StaticInfo/SupportResources';

import { Auth0Provider } from '@auth0/auth0-react';
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
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
          <Route index element={<LandingPage />} />

          <Route path="/index" element={<LandingPage />} />
          {/* Route that renders about,advice,services,FAQ,Support page */}
          <Route path="/about" element={<About />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<SupportResources />} />

          {/* Route that renders evaluation screen */}
          <Route path="/evaluation" element={<EvaluationScreen />}>
            {/* Route that renders evaluation form */}
            <Route
              path="/evaluation/1"
              element={<EvaluationFormPreference />}
            />
            {/* Route that renders evaluation form */}
            <Route path="/evaluation/2" element={<EvaluationFormSpecialty />} />
            {/* Route that renders evaluation results */}
          </Route>
          <Route path="/evaluation/results" element={<EvaluationResults />} />
          {/* Route that renders evaluation results */}
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
          {/* Route that renders therapist dashboard */}
          <Route path="/therapist/" element={<DashboardTherapistScreen />} />
          {/* Route that renders full calendar of therapist on therapists's portal */}
          <Route path="/therapist/calendar" element={<CalendarFull />} />
          {/* Route that renders indiv profile of patient on therapists's portal */}
          <Route
            path="/therapist/patients/:clientId"
            element={<PatientProfile />}
          />
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

          {/* Route that matches all other paths */}
          <Route path="*" element={'Nothing here!'} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
