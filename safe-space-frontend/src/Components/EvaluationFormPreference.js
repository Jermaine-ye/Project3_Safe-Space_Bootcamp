import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Text,
  Title,
  Grid,
  Container,
  Form,
  Input,
  Textarea,
} from "@mantine/core";
import { useAuth } from "./AuthContext.js";
import "./EvaluationFormPref.css";

import { BACKEND_URL } from "../constants.js";
export default function EvaluationFormPreference() {
  const navigate = useNavigate();

  const { updateAgePreference, updateLanguage, updateGender, updateReligion } =
    useAuth();

  const questions = [
    {
      questionText: "State your preferred language.",
      answerOptions: [
        { answerText: "English and Chinese", value: 1, isClicked: true },
        { answerText: "English and Tamil", value: 2, isClicked: true },
        { answerText: "English and Malay", value: 3, isClicked: true },
      ],
    },
    {
      questionText: "What is your preferred gender of the therapist?",
      answerOptions: [
        { answerText: "Male", value: "Male", isClicked: true },
        { answerText: "Female", value: "Female", isClicked: true },
      ],
    },
    {
      questionText: "Indicate your religion if any.",
      answerOptions: [
        { answerText: "No Preference", value: 1, isClicked: true },
        { answerText: "Christianity", value: 2, isClicked: true },
        { answerText: "Buddhism", value: 3, isClicked: true },
        { answerText: "Islam", value: 4, isClicked: true },
        { answerText: "Hinduism", value: 5, isClicked: true },
      ],
    },
    {
      questionText:
        "What is the age of the therapist you are comfortable with.",
      answerOptions: [
        { answerText: "20 to 29 years old", value: 1, isClicked: true },
        { answerText: "30 to 39 years old", value: 2, isClicked: true },
        { answerText: "40 to 49 years old", value: 3, isClicked: true },
        { answerText: "50 to 59 years old", value: 4, isClicked: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = async (isClicked, e) => {
    if (isClicked) {
      console.log(isClicked);
      console.log(`running`);
      console.log(questions);
      console.log(currentQuestion);
      console.log(e);
      console.log(e.target.name);
      // setState here
      if (currentQuestion === 0) {
        console.log(questions);
        updateLanguage(
          questions[currentQuestion].answerOptions[e.target.name].value
        );
      } else if (currentQuestion === 1) {
        updateGender(
          questions[currentQuestion].answerOptions[e.target.name].value
        );
      } else if (currentQuestion === 2) {
        updateReligion(
          questions[currentQuestion].answerOptions[e.target.name].value
        );
      } else if (currentQuestion === 3) {
        updateAgePreference(
          questions[currentQuestion].answerOptions[e.target.name].value
        );
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // alert(`You have reach the end of the evaluation. We see that you have not made a choice. Please contact us if you need future assistance!`)
      navigate("/evaluation/2");
    }
  };

  return (
    <div className="align">
      <Container>
        <h2>EvaluationFormPreference</h2>
        <div className="app">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  className="buttonForm"
                  name={index}
                  onClick={(e) =>
                    handleAnswerOptionClick(answerOption.isClicked, e)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
