import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { storage } from './DB/firebase.js';
import {
  // getStorage,
  getDownloadURL,
  ref as sRef,
  uploadBytes,
} from 'firebase/storage';
import { useAuth0 } from '@auth0/auth0-react';

const CLIENT_IMAGE_FOLDER_NAME = 'client images';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
