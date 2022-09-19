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

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <h1>LandingPage</h1>

      <Footer />
    </div>
  );
}
