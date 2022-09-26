import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { storage } from '../DB/firebase';
import { BACKEND_URL } from '../constants';
import {
  // getStorage,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from 'firebase/storage';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// import { useAuth } from "./AuthContext";
import { AuthContext } from '../App';
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Group,
  NativeSelect,
  Image,
  FileInput,
  Textarea,
  NumberInput,
  TextInput,
} from '@mantine/core';

const CLIENT_IMAGE_FOLDER_NAME = 'client images';

export default function PersonalParticularsForm() {
  const [fileInputValue, setFileInputValue] = useState('');
  const [fileInputFile, setFileInputFile] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  // const [description, setDiscription] = useState("");
  const { user } = useAuth0();
  const [currentUserr, setCurrentUserr] = useState(user);

  const navigate = useNavigate();

  const setUser = () => {
    setCurrentUserr(user);
  };

  // essentially needed to update specfic client.
  useEffect(() => {
    setUser();
  }, [user]);

  const CLIENT_IMAGE_FOLDER_NAME = 'client images';
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
        console.log(url);
        setFileInputValue(url);
        return url;
      });
    return imageUrl;
  };

  // const sendData = async (e) => {
  //   e.preventDefault();
  //   console.log(fileInputFile, fileInputValue);
  //   const storageRefInstance = storageRef(
  //     storage,
  //     `${CLIENT_IMAGE_FOLDER_NAME}/${fileInputFile.name}`
  //   );

  //   const imageUrl = uploadBytes(storageRefInstance, fileInputFile)
  //     .then(async (snapshot) => {
  //       //set alert
  //       alert("Uploaded File!");
  //       return getDownloadURL(snapshot.ref);
  //     })
  //     .then((url) => {
  //       console.log(url);
  //       setFileInputValue(url);
  //       return url;
  //     });
  //   return imageUrl;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = await uploadImage(e);
    console.log(imageUrl);

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
    navigate('/evaluation/1');
  };

  return (
    <div>
      <Container size="xs" px="xs">
        <Card radius="md" shadow="sm" p="md">
          <Title color="blue" order={3} weight={500} align="center">
            Personal Particulars Form
          </Title>
          <br />
          <Text align="justify" color="dimmed" size="xs">
            We take your privacy and confidentiality seriously. We have built
            state-of-the-art technology, operations, and infrastructure with the
            goal of protecting your privacy and safeguarding the information you
            provide.
          </Text>
          <br />
          <form onSubmit={handleSubmit}>
            {/* <label>Name:</label>
          <textarea
            className="text-box"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          /> */}
            <TextInput
              label="First Name"
              placeholder="Please enter your first name"
              withAsterisk
              value={firstName}
              variant="filled"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            {/* <textarea
            className="text-box"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /> */}
            <TextInput
              label="Last Name"
              placeholder="Please enter your last name"
              withAsterisk
              value={lastName}
              variant="filled"
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            {/* <label>Phone Number:</label>
          <input
            className="text-box"
            name="phoneNumber"
            type="number"
            placeholder="Please enter your contact number."
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          /> */}
            <TextInput
              placeholder="Enter your phone number"
              label="Phone Number"
              variant="filled"
              withAsterisk
              onChange={setPhoneNumber}
            />
            <br />
            {/* <label>Gender:</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value={""}>State your gender</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select> */}
            <NativeSelect
              data={[
                { value: null, label: 'Choose one' },
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
              ]}
              label="Gender"
              variant="filled"
              placeholder="Pick your gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />{' '}
            <br />
            {/* <label>Age:</label>
          <input
            name="age"
            value={age}
            type="number"
            placeholder="Please enter your age."
            onChange={(e) => setAge(e.target.value)}
          /> */}
            <NumberInput
              variant="filled"
              placeholder="Enter your age"
              label="Age"
              withAsterisk
              defaultValue={18}
              value={age}
              onChange={setAge}
            />{' '}
            <br />
            {/* <label>Marital Status</label>
          <select
            name="MaritalStatus"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value={""}>State your relationship status</option>
            <option value={"Single"}>Single</option>
            <option value={"Married"}>Married</option>
          </select> */}
            <NativeSelect
              data={[
                { value: null, label: 'State your relationship status' },
                { value: 'Single', label: 'Single' },
                { value: 'Married', label: 'Married' },
              ]}
              label="Marital Status"
              variant="filled"
              placeholder="State your relationship status"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            />{' '}
            <br />
            {/* <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
          placeholder="Tell us about you???"
        /> */}
            {/* <label>
            Upload your profile images here!
            <input
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setFileInputFile(e.target.files[0]);
                setFileInputValue(e.target.files[0].name);
              }}
            />
            <Button
              variant="light"
              onClick={(e) => uploadImage(e)}
              className="uploadbtn"
            >
              Upload!
            </Button>
          </label> */}
            <FileInput
              placeholder="pick file"
              variant="filled"
              label="Upload your Profile Photo"
              withAsterisk
              value={fileInputFile}
              onChange={setFileInputFile}
            />{' '}
            <br /> <br />
            <Button variant="light" color="pink">
              Submit
            </Button>
          </form>
          <br />
        </Card>
        <br />
        <br />
      </Container>

      {/* <Link to="/">Home</Link> */}

      <Button
        variant="light"
        size="md"
        mt="md"
        radius="md"
        onClick={() => {
          navigate('/');
        }}
      >
        Back to Home
      </Button>
    </div>
  );
}
