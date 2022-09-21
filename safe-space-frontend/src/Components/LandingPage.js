import React from "react";
import axios from "axios";
import { Button, Card, Text, Title } from "@mantine/core";
import {
  useNavigate,
  useParams,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import { BACKEND_URL } from "../constants";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  const {
    logout,
    loginWithRedirect,
    user,
    isAuthenticated,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <h1>LandingPage</h1>
      {/* <button
        onClick={() => logout({ returnTo: process.env.REACT_APP_REDIRECT })}
      >
        Logout
      </button> */}
      <Footer />
    </div>
  );
}
