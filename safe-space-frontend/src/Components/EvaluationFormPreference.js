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

import { BACKEND_URL } from "../constants.js";
export default function EvaluationFormPreference() {
  const navigate = useNavigate();

  const { updateAge, updateLanguage, updateGender, updateReligion } = useAuth();

  const questions = [
    {
      questionText: "State your preferred language.",
      answerOptions: [
        { answerText: "English and Chinese", value: "1", isClicked: true },
        { answerText: "English and Tamil", value: "2", isClicked: true },
        { answerText: "English and Malay", value: "3", isClicked: true },
      ],
    },
    {
      questionText: "What is your preferred gender of the therapist?",
      answerOptions: [
        { answerText: "Male", value: "male", isClicked: true },
        { answerText: "Female", value: "female", isClicked: true },
      ],
    },
    {
      questionText: "Indicate your religion if any.",
      answerOptions: [
        { answerText: "No Preference", value: "1", isClicked: true },
        { answerText: "Christianity", value: "2", isClicked: true },
        { answerText: "Buddhism", value: "3", isClicked: true },
        { answerText: "Islam", value: "4", isClicked: true },
        { answerText: "Hinduism", value: "5", isClicked: true },
      ],
    },
    {
      questionText:
        "What is the age of the therapist you are comfortable with.",
      answerOptions: [
        { answerText: "20 to 29 years old", value: "1", isClicked: true },
        { answerText: "30 to 39 years old", value: "2", isClicked: true },
        { answerText: "40 to 49 years old", value: "3", isClicked: true },
        { answerText: "50 to 59 years old", value: "4", isClicked: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = async (isClicked) => {
    if (isClicked) {
      // setState here
      if (questions[currentQuestion] === 1) {
        updateLanguage(
          questions[currentQuestion].answerOptions[currentQuestion].value
        );
      } else if (questions[currentQuestion] === 2) {
        updateGender(
          questions[currentQuestion].answerOptions[currentQuestion].value
        );
      } else if (questions[currentQuestion] === 3) {
        updateReligion(
          questions[currentQuestion].answerOptions[currentQuestion].value
        );
      } else if (questions[currentQuestion] === 4) {
        updateAge(
          questions[currentQuestion].answerOptions[currentQuestion].value
        );
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // alert(`You have reach the end of the evaluation. We see that you have not made a choice. Please contact us if you need future assistance!`)
      // navigate("/evaluation/2")
    }
  };

  return (
    <div>
      <h2>EvaluationFormPreference</h2>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button
            onClick={() => handleAnswerOptionClick(answerOption.isClicked)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}
