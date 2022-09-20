import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { useAuth0 } from "@auth0/auth0-react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
// USE THIS TO STORE STATES.
export function AuthProvider({ children }) {
  //set user data that you are going to pass down to different componenet.
  const [currentUser, setCurrentUser] = useState();
  //reset this to true when you finish editing the files
  const [loading, setLoading] = useState(false);
  // set it in app.js (to conditionally render the pages according to the admin status)
  const [admin, setAdmin] = useState(false);
  // states for evaluation form. PUT request all at results page
  const [speciality, setSpeciality] = useState("");
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");

  // function required to setState in other components
  const updateClientData = (data) => {
    console.log(`updated client info`, data);
    setCurrentUser(data);
  };

  const updateSpeciality = (info) => {
    console.log(`updated client's speciality`, info);
    setSpeciality(info);
  };

  const updateAge = (info) => {
    console.log(`updated client's age preference`, info);
    setAge(info);
  };

  const updateLanguage = (info) => {
    console.log(`updated client's language preference`, info);
    setLanguage(info);
  };

  const updateGender = (info) => {
    console.log(`updated client's gender preference`, info);
    setGender(info);
  };

  const updateReligion = (info) => {
    console.log(`updated client's religion preference`, info);
    setReligion(info);
  };

  // States and Functions that are passed down and USE by ALL components.
  const value = {
    updateClientData,
    updateSpeciality,
    updateAge,
    updateLanguage,
    updateGender,
    updateReligion,
    currentUser,
    speciality,
    age,
    language,
    gender,
    religion,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
