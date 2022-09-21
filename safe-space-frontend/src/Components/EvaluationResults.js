import React, { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext";
import { BACKEND_URL } from "../constants";
import {
  useNavigate,
  useParams,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";

export default function EvaluationResults() {
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  const { updateClientData } = useAuth();
  //put state here and render out the results...
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Client logging in!");
    loginWithRedirect();
  };

  const updateClient = async (user) => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    const response = await axios.put(
      `${BACKEND_URL}/clients`,
      {
        //refer BE controller
        email: user.email,
        password: user.password,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    await updateClientData(response.data);
    //  navigate("/index");
  };

  useEffect(() => {
    if (isAuthenticated) {
      updateClient(user);
    } else {
      console.log("not logged in");
    }
  }, [isAuthenticated]);

  return (
    <div>
      Evaluation Results
      {/* Display the results here! */}
      <button>Submit Results!</button>
    </div>
  );
}
