import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

function Question({ questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer }) {
  return (
    <div id="question">
      <QuestionTimer
        // za kazdym razem gdy tworozny jest komponent to dzieki key poprzedni jest niszczony, czyli w tym przypadku za kazdym razem gdy zmieniamy pytanie
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers answers={answers} selectedAnswer={selectedAnswer} answerState={answerState} onSelect={onSelectAnswer} />
    </div>
  );
}

export default Question;
