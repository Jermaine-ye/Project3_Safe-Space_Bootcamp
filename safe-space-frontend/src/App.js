import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import MemoList from "./Components/MemoList";
import JournalAssignment from "./Components/JournalAssignment";
import PatientProfile from "./Components/PatientProfile";
import About from "./Components/StaticInfo/About";
import Advice from "./Components/StaticInfo/Advice";
import FAQ from "./Components/StaticInfo/FAQ";
import Services from "./Components/StaticInfo/Services";
import SupportResources from "./Components/StaticInfo/SupportResources";
import PatientList from "./Components/PatientList";
import JournalListTherapist from "./Components/JournalListTherapist";
import { AuthProvider } from "./Components/AuthContext";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRoutesClient from "./PrivateRoutesClient";
import ClientProfile from "./Components/ClientProfile";
import SidebarClient from "./Components/SidebarClient";
import SidebarTherapist from "./Components/SidebarTherapist";
import Support from "./Components/Support";
import CalendarDashboard from "./Components/CalendarDashboard";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<PrivateRoutes />} />
          <Route path="/authclient" element={<PrivateRoutesClient />} />
          <Route path="/about" element={<About />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<SupportResources />} />
          <Route
            path="/client/journals/:journalId"
            element={<JournalSingle />}
          />

          <Route path="/evaluation" element={<EvaluationScreen />}>
            <Route
              path="/evaluation/1"
              element={<EvaluationFormPreference />}
            />
            <Route path="/evaluation/2" element={<EvaluationFormSpecialty />} />
            <Route path="/evaluation/results" element={<EvaluationResults />} />
          </Route>
          <Route path="/particulars" element={<PersonalParticularsForm />} />
          <Route path="/client/" element={<DashboardClientScreen />}>
            <Route path="/client/sidebar" element={<SidebarClient />} />
            <Route path="/client/:clientId" element={<ClientProfile />} />
            <Route path="/client/calendar" element={<CalendarFull />} />
            <Route path="/client/dashboard" element={<CalendarDashboard />} />
            {/* Route that renders info of therapist on client's portal */}
            <Route path="/client/therapist" element={<TherapistInfo />} />
            <Route path="/client/:client/journals" element={<JournalList />} />
            <Route path="/client/newjournal" element={<JournalForm />} />
          </Route>
          <Route path="/therapist/" element={<DashboardTherapistScreen />}>
            <Route path="/therapist/support" element={<Support />} />
            <Route path="/therapist/sidebar" element={<SidebarTherapist />} />
            <Route path="/therapist/calendar" element={<CalendarFull />} />
            <Route
              path="/therapist/dashboard"
              element={<CalendarDashboard />}
            />
            <Route
              path="/therapist/patients/:clientId"
              element={<PatientProfile />}
            />
            <Route path="/therapist/patients/" element={<PatientList />} />
            <Route
              path="/therapist/patients/:clientId/newjournal"
              element={<JournalAssignment />}
            />
            <Route
              path="/therapist/:clientId/journals/"
              element={<JournalListTherapist />}
            />
            <Route
              path="/therapist/patients/:clientId/memos/:memoId"
              element={<MemoSingle />}
            />
            <Route
              path="/therapist/patients/:clientId/newmemo"
              element={<MemoForm />}
            />
            <Route
              path="/therapist/patients/:clientId/allmemo"
              element={<MemoList />}
            />
          </Route>
          <Route path="*" element={"Nothing here!"} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
