import React, { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout); // czas na odpowiedz

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout); // po uplynieciu okreslonego czasu zostanie wywolana funkcja onTimeout

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    // aktualizuje wartosc w progressBar
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    }; //cleanup function, zostanie wywolane zanim wykona powyzszy kod
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} className={mode}></progress>;
}
