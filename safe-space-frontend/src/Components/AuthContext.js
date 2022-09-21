import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
// USE THIS TO STORE STATES.
export function AuthProvider({ children }) {
  //set user data that you are going to pass down to different componenet.
  const [currentUser, setCurrentUser] = useState([]);
  const [clientInfo, setClientInfo] = useState();
  const [therapistInfo, setTherapistInfo] = useState();
  //reset this to true when you finish editing the files
  const [loading, setLoading] = useState(false);

  // states for evaluation form. PUT request all at results page
  const [speciality, setSpeciality] = useState(1);
  const [age, setAge] = useState('');
  const [language, setLanguage] = useState(1);
  const [gender, setGender] = useState(1);
  const [religion, setReligion] = useState(1);

  // function required to setState in other components
  const updateClientData = (data) => {
    console.log(`updated client info for ID`, data);
    setCurrentUser(data);
  };

  const updateClientInfo = (data) => {
    console.log(`updated client info`, data);
    setClientInfo(data);
  };

  const updateTherapistInfo = (data) => {
    console.log(`updated therapist info`, data);
    setTherapistInfo(data);
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
    updateClientInfo,
    updateTherapistInfo,
    currentUser,
    speciality,
    age,
    language,
    gender,
    religion,
    clientInfo,
    therapistInfo,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
