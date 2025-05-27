import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import { generateExercise } from "../utils/Exercise3Utils";

export default function Exercise3() {
  const [step, setStep] = useState("step1");
  const [feedback, setFeedback] = useState("");
  const [exercise, setExercise] = useState(generateExercise());

  const startExercise = () => {
    setExercise(generateExercise());
    setStep("step1");
    setFeedback("");
    setTimeout(() => {
      setStep("step2");
    }, 2000);
  };

  useEffect(() => {
    startExercise();
  }, []);

  const handleAnswer = (e) => {
    setStep("feedback");
    parseInt(e.target.value) === exercise.matches
      ? setFeedback("Correct")
      : setFeedback("Incorrect");
    setTimeout(() => {
      startExercise();
    }, 1000);
  };

  return (
    <Box as="section">
      {step === "step1" && (
        <div className="flex flex-col justify-center gap-2">
          <div className="text-center text-2xl">
            <h1>REGELS</h1>
          </div>
          <div className="flex justify-center gap-x-2">
            {exercise.categories.map((cat, key) => (
              <span key={key}>{cat.name}</span>
            ))}
          </div>
        </div>
      )}
      {step === "step2" && (
        <div className="flex flex-row flex-auto justify-center gap-4">
          <div className="flex flex-col flex-auto items-center gap-2">
            <h2>Woorden</h2>
            <div className="flex gap-4 font-bold">
              {exercise.words.map((word, key) => (
                <span key={key}>{word}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-auto items-center">
            <h2>Overeenkomsten</h2>
            <div className="flex flex-row gap-2">
              {[0, 1, 2, 3].map((num) => (
                <button
                  key={num}
                  value={num}
                  className="p-3 bg-accent hover:bg-cyan-800"
                  onClick={handleAnswer}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {step === "feedback" && (
        <div>
          <h2>Feedback</h2>
          <div>{feedback}</div>
        </div>
      )}
    </Box>
  );
}
