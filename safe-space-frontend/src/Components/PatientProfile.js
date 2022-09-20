import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { BACKEND_URL } from "../constants.js";

export default function PatientProfile() {
  const [patientId, setPatientId] = useState();
  const [listing, setListing] = useState({});

  useEffect(() => {
    // If there is a patientId, retrieve the listing data
    if (patientId) {
      axios
        .get(`${BACKEND_URL}/therapists/clients/${patientId}`)
        .then((response) => {
          setListing(response.data);
        });
    }
    // Only run this effect on change to patientId
  }, [patientId]);

  const params = useParams();
  if (patientId !== params.patientId) {
    setPatientId(params.patientId);
  }

  // Store a new JSX element for each property in listing details
  const listingDetails = [];
  if (listing) {
    for (const key in listing) {
      listingDetails.push(
        <Card.Text key={key}>{`${key}: ${listing[key]}`}</Card.Text>
      );
    }
  }

  return (
    <div>
      <Card bg="dark">
        <Card.Body>{listingDetails}</Card.Body>
      </Card>
      {/* <Link to="/">Home</Link> */}
    </div>
  );
}
