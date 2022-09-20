import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function EvaluationFormPreference() {
  const questions = [
    {
      questionText: "State your preferred language.",
      answerOptions: [
        { answerText: "English and Chinese", isCorrect: true },
        { answerText: "English and Tamil", isCorrect: false },
        { answerText: "English and Malay", isCorrect: false },
      ],
    },
    {
      questionText: "What is your preferred gender of the therapist?",
      answerOptions: [
        { answerText: "Male", isCorrect: true },
        { answerText: "Female", isCorrect: false },
      ],
    },
    {
      questionText: "Indicate your religion if any.",
      answerOptions: [
        { answerText: "No Preference", isCorrect: true },
        { answerText: "Christianity", isCorrect: false },
        { answerText: "Buddhism", isCorrect: true },
        { answerText: "Muslim", isCorrect: false },
        { answerText: "Hindu", isCorrect: true },
      ],
    },
    {
      questionText:
        "What is the age of the therapist you are comfortable with.",
      answerOptions: [
        { answerText: "20 to 29 years old", isCorrect: true },
        { answerText: "30 to 39 years old", isCorrect: false },
        { answerText: "40 to 49 years old", isCorrect: true },
        { answerText: "50 to 59 years old", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = async () => {
    // if (isCorrect) {
    //   // setState here
    // }
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
          <button onClick={() => handleAnswerOptionClick()}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}
