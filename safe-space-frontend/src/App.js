import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { storage } from "./DB/firebase.js";
import {
  // getStorage,
  getDownloadURL,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";
import { useAuth0 } from "@auth0/auth0-react";

const CLIENT_IMAGE_FOLDER_NAME = "client images";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
