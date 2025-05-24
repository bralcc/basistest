import React, { useMemo, useState } from "react";
import Box from "../components/Box";
import Title from "../components/Title";
import {
  constructCorrectAnswer,
  constructRandomAnswers,
} from "../utils/Exercise2Utils";

export default function Exercise2() {
  const correctAnswer = useMemo(() => constructCorrectAnswer(), []);
  const randomAnswers = useMemo(
    () => constructRandomAnswers(5, correctAnswer),
    [correctAnswer]
  );

  const allAnswers = useMemo(() => {
    const answers = [...randomAnswers];
    const correctIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(correctIndex, 0, correctAnswer);
    return answers;
  }, [randomAnswers, correctAnswer]);

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
            {allAnswers.map((item, key) => {
              // const isCorrect =
              //   JSON.stringify(item.directions) ===
              //     JSON.stringify(correctAnswer.directions) &&
              //   JSON.stringify(item.colors) ===
              //     JSON.stringify(correctAnswer.colors);
              return (
                <div key={key}>
                  <div>{item.directions.join(", ")}</div>
                  <div>
                    <button>X</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Box>
  );
}
