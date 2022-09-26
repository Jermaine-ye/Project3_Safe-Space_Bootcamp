import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './EvaluationFormPref.css';
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
} from '@mantine/core';

export default function EvaluationFormSpecialty() {
  const navigate = useNavigate();

  const { updateSpeciality } = useAuth();

  const questions = [
    {
      questionText: 'Are you facing drug addiction problems?',
      answerOptions: [
        { answerText: 'Yes', isCorrect: true, specialization: 1 },
        { answerText: 'No', isCorrect: false },
      ],
    },
    {
      questionText:
        'Are you facing issues with your marriage life or relationship with your loved ones?',
      answerOptions: [
        { answerText: 'Yes', isCorrect: true, specialization: 2 },
        { answerText: 'No', isCorrect: false },
      ],
    },
    {
      questionText:
        'Do you find yourself being often anxious that you are unable to perform normal daily tasks?',
      answerOptions: [
        {
          answerText: 'Yes',
          isCorrect: true,
          specialization: 3,
        },
        { answerText: 'No', isCorrect: false },
      ],
    },
    {
      questionText: 'Do you often feel worthless or hopeless?',
      answerOptions: [
        {
          answerText: 'Yes',
          isCorrect: true,
          specialization: 4,
        },
        { answerText: 'No', isCorrect: false },
      ],
    },
    {
      questionText:
        'Are you eating irregularly that you are experiencing rapid weight loss?',
      answerOptions: [
        {
          answerText: 'Yes',
          isCorrect: true,
          specialization: 5,
        },
        { answerText: 'No', isCorrect: false },
      ],
    },
    {
      questionText:
        'Do you have obsessive thoughts of self harm or hurting others close to you and struggle to control these thoughts?',
      answerOptions: [
        {
          answerText: 'Yes',
          isCorrect: true,
          specialization: '6',
        },
        { answerText: 'No', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const makeSpeciality = (specialization) => {
    updateSpeciality(specialization);
  };

  const handleAnswerOptionClick = async (isCorrect, e) => {
    if (isCorrect) {
      // setState here
      console.log(questions);
      console.log(questions.answerOptions);
      console.log(
        questions[currentQuestion].answerOptions[e.target.name].specialization
      );
      console.log(e);
      makeSpeciality(
        questions[currentQuestion].answerOptions[e.target.name].specialization
      );
      // nav to results page
      navigate('/evaluation/results');
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // alert(`You have reach the end of the evaluation. We see that you have not made a choice. Please contact us if you need future assistance!`)
    }
  };

  return (
    <div className="align">
      <Container size="md" px="xs">
        <Card className="Eval-form" shadow="sm" p="lg" radius="md" withBorder>
          <br />
          <br />
          <Title order={2} weight={500} align="center">
            Evaluation Form Specialty
          </Title>
          <br />
          <br />
          <div className="app">
            <div className="question-section">
              <div className="question-count">
                <Text align="center" size="md">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </Text>
              </div>
              <Text align="center" size="md">
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </Text>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    className="buttonForm"
                    name={index}
                    onClick={(e) =>
                      handleAnswerOptionClick(answerOption.isCorrect, e)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
