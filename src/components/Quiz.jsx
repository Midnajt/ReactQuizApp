import React from "react";
import { useState, useCallback } from "react";
// useCallback zapobiega ponownegmu renderowaniu komponentu we wskazanych momentach
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import quizCompleteImg from "../assets/quiz-complete.png";

function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1; // const zwieksza sie przy kazdej dodanej odpowiedzi
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length; // sprawdza czy odpowiedzielismy na wszystkie pytania

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 1000 * 2);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question key={activeQuestionIndex} questionText={QUESTIONS[activeQuestionIndex].text} answers={QUESTIONS[activeQuestionIndex].answers} answerState={answerState} selectedAnswer={userAnswers[userAnswers.length - 1]} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnswer} />
    </div>
  );
}

export default Quiz;
