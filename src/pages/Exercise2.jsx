import { useState } from "react";
import Box from "../components/Box";
import Title from "../components/Title";

import { generateExerciseSet } from "../utils/Exercise2Utils";

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

  const handleAnswer = (e) => {
    const index = Number(e.target.value);
    const answerObject = allAnswers[index];
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

  function formatDirection(direction) {
    const directionMap = {
      rightUp: "Rechts Op",
      rightDown: "Rechts Neer",
      leftUp: "Links Op",
      leftDown: "Links Neer",
    };
    return directionMap[direction] || direction;
  }

  function formatColor(color) {
    const colorMap = {
      black: "Zwart",
      white: "Wit",
    };
    return colorMap[color] || color;
  }

  // function isCorrect(answer) {
  //   return (
  //     JSON.stringify(answer.directions) ===
  //       JSON.stringify(correctAnswer.directions) &&
  //     JSON.stringify(answer.colors) === JSON.stringify(correctAnswer.colors)
  //   );
  // }

  return (
    <Box as="section">
      <div>
        <Title>Exercise 2</Title>
      </div>
      <div className="flex flex-col justify-center p-4">
        <div className="flex flex-col justify-center p-1">
          <p className="text-center">
            {`${formatDirection(
              correctAnswer.directions[0]
            )} BOVEN ${formatDirection(correctAnswer.directions[1])}`}
          </p>
          <br />
          <p className="text-center">{`${formatColor(
            correctAnswer.colors[0]
          )} BOVEN ${formatColor(correctAnswer.colors[1])}`}</p>
        </div>
        <div className="flex justify-center p-4">
          <div className="grid grid-cols-3 grid-rows-2">
            {allAnswers.map((item, key) => {
              return (
                <div key={key} className="flex flex-col justify-center p-1">
                  <div className="flex flex-col items-center gap-2 text-4xl">
                    {item.icons[0]}
                    {item.icons[1]}
                  </div>
                  <div className="flex justify-center text-2xl">
                    <button value={key} onClick={handleAnswer} className="p-2">
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {feedback && (
          <div className="text-center mt-4 font-bold">
            <span>{feedback}</span>
          </div>
        )}
      </div>
    </Box>
  );
}
