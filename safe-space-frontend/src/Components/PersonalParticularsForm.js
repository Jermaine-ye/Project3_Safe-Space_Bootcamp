import React, { useEffect, useState } from "react";
import axios from "axios";
import { storage } from "../DB/firebase";
import { BACKEND_URL } from "../constants";
import NavBar from "./NavBar";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Card,
  Title,
  Container,
  NativeSelect,
  FileInput,
  Textarea,
  NumberInput,
} from "@mantine/core";

export default function PersonalParticularsForm() {
  const [fileInputValue, setFileInputValue] = useState("");
  const [fileInputFile, setFileInputFile] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const navigate = useNavigate();

  // essentially needed to validate logged in client.
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [user]);

  const CLIENT_IMAGE_FOLDER_NAME = "client images";
  const uploadImage = async (e, file, user) => {
    e.preventDefault();
    const storageRefInstance = storageRef(
      storage,
      `${CLIENT_IMAGE_FOLDER_NAME}/${fileInputFile.name}`
    );
    const imageUrl = uploadBytes(storageRefInstance, fileInputFile)
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        setFileInputValue(url);
        return url;
      });
    return imageUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = await uploadImage(e);

    await axios.put(`${BACKEND_URL}/clients`, {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      photoLink: imageUrl,
      ageClient: age,
      gender: gender,
      maritalStatus: maritalStatus,
      therapistConfirmed: false,
      specializationId: null,
      genderPreference: null,
      ageId: null,
      languageId: null,
      religionId: null,
      dailymood: null,
      description: null,
      active: true,
      emailClient: user.email,
    });
    navigate("/evaluation/1");
  };

  return (
    <div className="Page-body">
      <NavBar />
      <div className="Content-container">
        <div className="Personal-Particulars-div">
          <br />
          <Title color="blue" order={3} weight={500} align="center">
            Personal Particulars Form
          </Title>
          <br />
          <Container className="Content-body" size="xs" px="xs">
            <Card
              className="Personal-Particulars"
              radius="md"
              shadow="sm"
              p="md"
            >
              <form onSubmit={handleSubmit}>
                <Textarea
                  variant="filled"
                  label="First Name"
                  placeholder="Please enter your first name"
                  withAsterisk
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br />

                <Textarea
                  variant="filled"
                  label="Last Name"
                  placeholder="Please enter your last name"
                  withAsterisk
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br />

                <NumberInput
                  variant="filled"
                  placeholder="Enter your phone number"
                  label="Phone Number"
                  withAsterisk
                  onChange={setPhoneNumber}
                />
                <br />

                <NativeSelect
                  variant="filled"
                  data={[
                    { value: null, label: "Choose one" },
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                  label="Gender"
                  placeholder="Pick your gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                <br />

                <NumberInput
                  variant="filled"
                  placeholder="Enter your age"
                  label="Age"
                  withAsterisk
                  value={age}
                  onChange={setAge}
                />
                <br />

                <NativeSelect
                  variant="filled"
                  data={[
                    { value: null, label: "State your relationship status" },
                    { value: "Single", label: "Single" },
                    { value: "Married", label: "Married" },
                  ]}
                  label="Marital Status"
                  placeholder="State your relationship status"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
                <br />

                <FileInput
                  variant="filled"
                  placeholder="pick file"
                  label="Upload your Profile Photo"
                  withAsterisk
                  value={fileInputFile}
                  onChange={setFileInputFile}
                />
                <br />
                <br />
                <div className="btn">
                  <button>Submit</button>
                </div>
                <br />
              </form>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
}
