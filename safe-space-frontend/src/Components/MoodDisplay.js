import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "./AuthContext.js";
import angry from "../images/angry.png";
import crying from "../images/sad.png";
import happy from "../images/smiling-face.png";
import sad from "../images/frown.png";
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Group,
  Image,
  Radio,
} from "@mantine/core";

export default function MoodDisplay() {
  const { clientInfo } = useAuth();
  const [value, setValue] = useState(1);
  // const [dailymood, setDailymood] = useState('1');
  //put request to change the daily mood icon everytime

  //unable to do put request, need to check the router/controller for it.
  const handleSubmit = (e) => {
    // e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
    const id = e.target.value;

    const newObj = { dailymood: id, emailClient: clientInfo.email };

    axios
      .put(`${BACKEND_URL}/clients/`, newObj)
      .then((res) => {
        // setDailymood('');
        setValue("");

        console.log("resdata:", res.data);
        console.log("Mood Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="Mood-display" onChange={handleSubmit}>
      <Radio.Group
        // className="Mood-radio"
        value={value}
        onChange={(e) => handleSubmit(e)}
        name="DailyMood"
        label="How are you feeling today?"
        description="select mood for the day"
      >
        <Radio
          value="1"
          label=<img src={happy} alt="" width="35" height="35" />
        />
        <Radio
          value="2"
          label=<img src={sad} alt="" width="35" height="35" />
        />
        <Radio
          value="3"
          label=<img src={crying} alt="" width="35" height="35" onChange=" " />
        />
        <Radio
          value="4"
          label=<img src={angry} alt="" width="35" height="35" />
        />
      </Radio.Group>
    </form>
  );
}
