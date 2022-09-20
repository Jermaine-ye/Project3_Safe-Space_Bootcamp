import React from "react";
import { storage } from "../DB/firebase";
import {
  // getStorage,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";

const CLIENT_IMAGE_FOLDER_NAME = "client images";

export default function PersonalParticularsForm() {
  return (
    <div>
      <h2>PersonalParticularsForm</h2>
      <form>
        <label>Name:</label>
        <textarea className="text-box" name="name" placeholder="First Name" />
        <textarea className="text-box" name="name" placeholder="Last Name" />
        <label>Phone Number:</label>
        <textarea
          className="text-box"
          name="phoneNumber"
          placeholder="enter your contact number."
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
      </form>
    </div>
  );
}
