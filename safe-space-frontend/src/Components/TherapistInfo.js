import React from "react";
import { useAuth } from "./AuthContext";
import { Card, Text, Image } from "@mantine/core";

export default function TherapistInfo() {
  //This component is only for the client's portal.

  const { therapistInfo } = useAuth();

  const {
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
    language = "English and Chinese";
  } else if (languageId === 2) {
    language = "English and Tamil";
  } else if (languageId === 3) {
    language = "English and Malay";
  }
  let religion;
  if (religionId === 1) {
    religion = "No Preference";
  } else if (religionId === 2) {
    religion = "Christianity";
  } else if (religionId === 3) {
    religion = "Buddhism";
  } else if (religionId === 4) {
    religion = "Islam";
  } else if (religionId === 5) {
    religion = "Hinduism";
  }

  const handleClick = () => {
    alert(
      "We are sorry to hear that you would like to change your current therapist. We have received your request and will respond to you in 3 working days. Thank you for your patience."
    );
  };

  return (
    <div>
      <Card withBorder shadow="sm" radius="md">
        <div
          style={{
            width: 200,

            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Image
            src={photoLink}
            alt={photoLink}
            className="Current Therapist"
          />
        </div>
        <br />
        <Text size={20} weight={700}>
          {firstName} {lastName}
        </Text>
        <br />
        <Text>{gender}</Text>
        <Text weight={700}>Proficient in:</Text> <Text>{language}</Text>
        <Text weight={700}>Religion: </Text>
        <Text>{religion}</Text>
        <Text weight={700}>Years of practice:</Text>{" "}
        <Text>{yearsOfPractice} years</Text>
        <Text weight={700}>Educational Qualification: </Text>
        <Text>{educationQualification}</Text>
        <Text weight={700}>Email:</Text>
        <Text> {email}</Text>
        <br />
        <p>{description}</p>
        <button onClick={() => handleClick()}>
          Request to change therapist
        </button>
      </Card>
    </div>
  );
}
