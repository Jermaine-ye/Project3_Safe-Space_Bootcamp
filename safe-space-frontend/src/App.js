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

const CLIENT_IMAGE_FOLDER_NAME = "client images";

export default function App() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  const handleClick = async () => {
    if (isAuthenticated) {
      console.log(user);
      // setEmail(user.email);
      // Navigate to DashBoard
      // Nav to Evaluation Form if not done (state management)
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Login</button>
      <Outlet />
    </div>
  );
}
