import React, { useEffect, useState } from "react";
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
import { Card, Button } from "react-bootstrap";

export default function EvaluationResults() {
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();
  const {
    updateClientData,
    updateYourTherapist,
    speciality,
    agePreference,
    language,
    religion,
    gender,
    clientInfo,
  } = useAuth();
  //put state here and render out the results...
  // const [clientSpeciality, setClientSpeciality] = useState();
  // const [clientAgePreference, setClientAgePreference] = useState("");
  // const [clientLanguage, setClientLanguage] = useState();
  // const [clientReligion, setClientReligion] = useState();
  // const [clientGenderPreference, setClientGenderPreference] = useState();
  const [assignedTherapists, setAssignedTherapists] = useState([]);
  const [allTherapists, setAllTherapists] = useState([]);

  const navigate = useNavigate();

  const updateClient = async (user) => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });

    if (user[`https://any-namespace/roles`].length === 0) {
      const response = await axios.post(
        `${BACKEND_URL}/clients/newClient`,
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
    }
    // navigate("/index");
  };

  const matchTherapist = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });

    const response = await axios.post(
      `${BACKEND_URL}/clients/therapists`,
      {
        specializationID: speciality,
        ageId: agePreference,
        religionId: religion,
        gender: gender,
        languageId: language,
        clientId: clientInfo.id,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const therapistRes = await axios.get(
      `${BACKEND_URL}/clients/${user.email}`
    );
    console.log(therapistRes.data.therapists);
    setAssignedTherapists(therapistRes.data.therapists);

    // setState from Context for user who have no signed in
    // updateYourTherapist(assignedTherapists);
  };

  useEffect(() => {
    if (isAuthenticated) {
      // updateClient(user);
    } else {
      // loginWithRedirect();
      // matchTherapist();
      // updateYourTherapist(assignedTherapists);
      //
      console.log("not logged in");
    }
    matchTherapist();

    console.log(
      `speciality`,
      speciality,
      `agePref`,
      agePreference,
      `language`,
      language,
      `religion`,
      religion,
      `gender preference`,
      gender
    );
  }, [user, speciality, agePreference, language, religion, gender]);

  //ON SUBMIT TO SET THERAPIST FOR CLIENT AND UPDATE NECESSARY INFO
  const ChoosenTherapist = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.value);
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });

    const response = await axios.put(
      `${BACKEND_URL}/clients/`,
      {
        emailClient: user.email,
        firstName: clientInfo.firstName,
        lastName: clientInfo.lastName,
        phoneNumber: clientInfo.phoneNumber,
        photoLink: clientInfo.photoLink,
        ageClient: clientInfo.age,
        gender: clientInfo.gender,
        maritalStatus: clientInfo.maritalStatus,
        // eval
        therapistConfirmed: true,
        specializationId: speciality,
        genderPreference: gender,
        ageId: agePreference,
        languageId: language,
        religionId: religion,
        dailymood: null,
        description: null,
        active: true,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const responseTwo = await axios.put(
      `${BACKEND_URL}/clients/clientTherapist`,
      {
        chosenTherapist: true,
        endedAt: null,
        feedback: null,
        //how do you deconstructure then based on user's choice?

        therapistID: e.target.value,
        clientID: clientInfo.id,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    // navigate("/client/");
  };

  const displayAllTherapists = assignedTherapists.map((elem) => {
    return (
      <Card key={elem.id}>
        <Card.Body>
          <Card.Title>{`${elem.firstName} ${elem.lastName}`}</Card.Title>
          {/* <img
            src={`${elem.photoLink}`}
            alt={`${elem.photoLink}`}
            className="img-thumbnail"
          /> */}
          <Card.Text>{elem.gender}</Card.Text>
          <Card.Text>{elem.educationQualification}</Card.Text>
          <Button variant="primary" value={elem.id} onClick={ChoosenTherapist}>
            Pick Me
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      Evaluation Results
      {/* Display the results here! */}
      {displayAllTherapists}
      <Link to="/">Home</Link>
    </div>
  );
}
