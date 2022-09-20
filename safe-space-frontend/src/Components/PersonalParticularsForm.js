import React, { useState } from "react";
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

const CLIENT_IMAGE_FOLDER_NAME = "client images";

export default function PersonalParticularsForm() {
  const [fileInputValue, setFileInputValue] = useState("");
  const [fileInputFile, setFileInputFile] = useState(null);
  const [currImages, setCurrImages] = useState([]);

  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    console.log(fileInputFile, fileInputValue);
    const storageRefInstance = storageRef(
      storage,
      `${CLIENT_IMAGE_FOLDER_NAME}/${fileInputFile.name}`
    );

    const imageUrl = uploadBytes(storageRefInstance, fileInputFile)
      .then(async (snapshot) => {
        //set alert
        alert("Uploaded File!");
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        console.log(url);
        setFileInputValue(url);
        return url;
      });
    return imageUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = await sendData(e);
    console.log(imageUrl);

    await axios.put(`${BACKEND_URL}/clients`, {
      photoLink: imageUrl,
    });
    navigate("/client/");
  };

  return (
    <div>
      <h2>PersonalParticularsForm</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <textarea className="text-box" name="name" placeholder="First Name" />
        <textarea className="text-box" name="name" placeholder="Last Name" />
        <label>Phone Number:</label>
        <textarea
          className="text-box"
          name="phoneNumber"
          placeholder="Please enter your contact number."
        />
        <label>Gender:</label>
        <select>
          <option>State your gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label>Age:</label>
        <select>
          <option>20 to 29 years old</option>
          <option>30 to 39 years old</option>
          <option>40 to 49 years old</option>
          <option>50 to 59 years old</option>
        </select>
        <label>Marital Status</label>
        <select>
          <option>State your relationship status</option>
          <option>Single</option>
          <option>Married</option>
        </select>
        <label>Preferred Thrapist Gender</label>
        <select>
          <option>Which are you more comfortable with!</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label>Description????</label>
        <textarea
          className="text-box"
          name="name"
          placeholder="Tell us about you???"
        />
        <label>
          Upload your profile images here!
          <input
            className="uploadImageButton"
            type="file"
            value={fileInputValue}
            onChange={(e) => {
              console.log(e.target.files[0].name);
              setFileInputFile(e.target.files[0]);
              setFileInputValue(e.target.value);
            }}
          />
          <button onClick={(e) => sendData(e)} className="uploadbtn">
            Upload!
          </button>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
