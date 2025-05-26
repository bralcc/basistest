import React, { useState } from "react";
import Box from "../components/Box";
import Title from "../components/Title";
import {
  constructCorrectAnswer,
  constructRandomAnswers,
} from "../utils/Exercise2Utils";

function generateExerciseSet() {
  const correct = constructCorrectAnswer();
  const randomAnswers = constructRandomAnswers(5, correct);
  const answers = [...randomAnswers];
  const correctIndex = Math.floor(Math.random() * (answers.length + 1));
  answers.splice(correctIndex, 0, correct);
  return { correctAnswer: correct, allAnswers: answers };
}

export default function Exercise2() {
  const [{ correctAnswer, allAnswers }, setExercise] =
    useState(generateExerciseSet);
  const [feedback, setFeedback] = useState("");

  function isSameAnswer(a, b) {
    return (
      JSON.stringify(a.directions) === JSON.stringify(b.directions) &&
      JSON.stringify(a.colors) === JSON.stringify(b.colors)
    );
  }

  const handleAnswer = (event) => {
    const answerObject = JSON.parse(event.target.value);
    if (isSameAnswer(answerObject, correctAnswer)) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect.");
    }
    setTimeout(() => {
      setExercise(generateExerciseSet());
      setFeedback("");
    }, 1000);
  };

  return (
    <Box as="section">
      <div>
        <Title>Exercise 2</Title>
      </div>
      <div className="flex flex-col justify-center p-4">
        <div className="flex flex-col justify-center p-1">
          <p className="text-center">
            {`${correctAnswer.directions[0]} ABOVE ${correctAnswer.directions[1]}`}
          </p>
          <br />
          <p className="text-center">{`${correctAnswer.colors[0]} ABOVE ${correctAnswer.colors[1]}`}</p>
        </div>
        <div className="flex justify-center p-4">
          <div className="grid grid-cols-3 grid-rows-2">
            {allAnswers.map((item, key) => (
              <div key={key}>
                <div>{item.directions.join(", ")}</div>
                <div>
                  <button value={JSON.stringify(item)} onClick={handleAnswer}>
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {feedback && (
          <div className="text-center mt-4 font-bold">{feedback}</div>
        )}
      </div>
    </Box>
  );
}
