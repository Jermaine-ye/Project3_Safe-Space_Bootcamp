import React, { useEffect, useState } from "react";
import axios from "axios";
import { storage } from "../DB/firebase";
import { BACKEND_URL } from "../constants";
import {
  // getStorage,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

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
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [description, setDiscription] = useState("");
  const { user } = useAuth0();
  const [currentUser, setCurrentUser] = useState(user);

  const navigate = useNavigate();

  const setUser = () => {
    setCurrentUser(user);
  };

  // essentially needed to update specfic client.
  useEffect(() => {
    setUser();
  }, []);

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
      gender: gender,
      age: age,
      description: description,
      maritalStatus: MaritalStatus,
      photoLink: imageUrl,
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
        <textarea
          className="text-box"
          name="phoneNumber"
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
        <select name="age" value={age} onChange={(e) => setAge(e.target.value)}>
          <option value={""}>Choose your age range</option>
          <option value={"20 to 29 years old"}>20 to 29 years old</option>
          <option value={"30 to 39 years old"}>30 to 39 years old</option>
          <option value={"40 to 49 years old"}>40 to 49 years old</option>
          <option value={"50 to 59 years old"}>50 to 59 years old</option>
        </select>
        <label>Marital Status</label>
        <select
          name="MaritalStatus"
          value={MaritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
        >
          <option value={""}>State your relationship status</option>
          <option value={"Single"}>Single</option>
          <option value={"Married"}>Married</option>
        </select>
        <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
          placeholder="Tell us about you???"
        />
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
    </div>
  );
}
