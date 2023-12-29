import React, { useState } from "react";

function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUsersAnswers] = useState([]);

  return <p>Currently active question</p>;
}

export default Quiz;
