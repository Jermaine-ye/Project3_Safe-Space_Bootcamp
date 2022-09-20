import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";

// similar to sighting exercises
export default function PatientList() {
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/therapists/clients`).then((response) => {
      setPatientsList(response.data);
    });
    // Only run this effect on component mount
  }, []);

  const patientListPreview = patientsList.map((list) => {
    return (
      <Link to={`/therapists/clients/${list.id}`} key={list.id}>
        {/*set the body of the link */}
      </Link>
    );
  });

  return (
    <div>
      <h2>PatientList</h2>
      {patientListPreview}
    </div>
  );
}
