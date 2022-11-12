import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
// USE THIS TO STORE STATES.
export function AuthProvider({ children }) {
  //set user data that you are going to pass down to different componenet.
  const [currentUser, setCurrentUser] = useState([]);
  const [clientInfo, setClientInfo] = useState([]);
  const [therapistInfo, setTherapistInfo] = useState([]);
  const [template, setTemplate] = useState(0);
  const [currentUserEmail, setCurrentUserEmail] = useState([]);
  //reset this to true when you finish editing the files

  // states for evaluation form. PUT request all at results page
  const [speciality, setSpeciality] = useState(1);
  const [agePreference, setAgePreference] = useState(1);
  const [language, setLanguage] = useState(1);
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState(1);

  // function required to setState in other components
  const updateClientData = (data) => {
    setCurrentUser(data);
  };

  const updateClientInfo = (data) => {
    setClientInfo(data);
  };

  const updateTherapistInfo = (data) => {
    setTherapistInfo(data);
  };

  const updateSpeciality = (info) => {
    setSpeciality(info);
  };

  const updateAgePreference = (info) => {
    setAgePreference(info);
  };

  const updateLanguage = (info) => {
    setLanguage(info);
  };

  const updateGender = (info) => {
    setGender(info);
  };

  const updateReligion = (info) => {
    setReligion(info);
  };

  const updateTemplate = (data) => {
    setTemplate(data);
  };

  const updateClientEmail = (data) => {
    setCurrentUserEmail(data);
  };
  // States and Functions that are passed down and USE by ALL components.
  const value = {
    updateClientData,
    updateSpeciality,
    updateAgePreference,
    updateLanguage,
    updateGender,
    updateReligion,
    updateClientInfo,
    updateTherapistInfo,
    updateTemplate,
    updateClientEmail,
    currentUser,
    speciality,
    agePreference,
    language,
    gender,
    religion,
    clientInfo,
    therapistInfo,
    template,
    currentUserEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
