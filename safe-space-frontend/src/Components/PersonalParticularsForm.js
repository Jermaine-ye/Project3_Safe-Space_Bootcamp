import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { storage } from "../DB/firebase";
import { BACKEND_URL } from "../constants";
import {
  // getStorage,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { useNavigate, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { useAuth } from "./AuthContext";
import { AuthContext } from "../App";

const CLIENT_IMAGE_FOLDER_NAME = "client images";

export default function PersonalParticularsForm() {
  const [fileInputValue, setFileInputValue] = useState("");
  const [fileInputFile, setFileInputFile] = useState(null);
  const [currImages, setCurrImages] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
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
    navigate("/client/");
  };

  return (
    <div>
      <h2>PersonalParticularsForm</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <textarea
          className="text-box"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <textarea
          className="text-box"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Phone Number:</label>
        <input
          className="text-box"
          name="phoneNumber"
          type="number"
          placeholder="Please enter your contact number."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>Gender:</label>
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value={""}>State your gender</option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </select>

        <label>Age:</label>
        <input
          name="age"
          value={age}
          type="number"
          placeholder="Please enter your age."
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Marital Status</label>
        <select
          name="MaritalStatus"
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
        >
          <option value={""}>State your relationship status</option>
          <option value={"Single"}>Single</option>
          <option value={"Married"}>Married</option>
        </select>
        {/* <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
          placeholder="Tell us about you???"
        /> */}
        <label>
          Upload your profile images here!
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setFileInputFile(e.target.files[0]);
              setFileInputValue(e.target.files[0].name);
            }}
          />
          {/* <button onClick={(e) => uploadImage(e)} className="uploadbtn">
            Upload!
          </button> */}
        </label>
        <button>Submit</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
}
