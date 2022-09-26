import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { BACKEND_URL } from '../constants.js';
import { useAuth } from './AuthContext';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Image,
  Avatar,
} from '@mantine/core';

export default function TherapistInfo() {
  //This component is only for the client's portal.

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const { clientInfo, therapistInfo } = useAuth();

  const {
    ageId,
    description,
    educationQualification,
    email,
    firstName,
    lastName,
    gender,
    languageId,
    photoLink,
    religionId,
    yearsOfPractice,
  } = therapistInfo;

  let language;
  if (languageId === 1) {
    language = 'English and Chinese';
  } else if (languageId === 2) {
    language = 'English and Tamil';
  } else if (languageId === 3) {
    language = 'English and Malay';
  }
  let religion;
  if (religionId === 1) {
    religion = 'No Preference';
  } else if (religionId === 2) {
    religion = 'Christianity';
  } else if (religionId === 3) {
    religion = 'Buddhism';
  } else if (religionId === 4) {
    religion = 'Islam';
  } else if (religionId === 5) {
    religion = 'Hinduism';
  }

  console.log(therapistInfo);

  const handleClick = () => {
    alert(
      'We are sorry to hear that you would like to change your current therapist. We have received your request and will respond to you in 3 working days. Thank you for your patience.'
    );
  };

  return (
    <div>
      <Card withBorder shadow="sm" radius="md">
        <div
          style={{
            width: 400,

            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Image
            src={photoLink}
            alt={photoLink}
            className="Current Therapist"
          />
        </div>
        {/* <img src={photoLink} alt="Current Therapist" width="500" height="600" /> */}
        <br />
        <h4>
          {firstName} {lastName}
        </h4>
        <h4>{gender}</h4>
        <h4>Proficient in: {language}</h4>
        <h4>Religion: {religion}</h4>
        <h4>Years of practice: {yearsOfPractice} years</h4>
        <h4>Educational Qualification: {educationQualification}</h4>
        <h4>Email: {email}</h4>
        <br />

        <p>{description}</p>
        <button onClick={() => handleClick()}>
          Request to change therapist
        </button>
      </Card>
    </div>
  );
}
