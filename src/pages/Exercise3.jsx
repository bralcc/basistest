import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import Title from "../components/Title";
import Button from "../components/Button";
import { generateExercise } from "../utils/Exercise3Utils";

export default function Exercise3() {
  const [step, setStep] = useState("");
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
      {step === "" && (
        <div>
          <Title>Woordgeheugentest</Title>
          <h2>Doel</h2>
          <p>
            Met deze oefening gaan we na of je woorden kunt onthouden en of je
            er daarna goed en snel een opdracht mee kunt uitvoeren.
          </p>
          <br />
          <h2>Omschrijving</h2>
          <p>
            Op het eerste scherm worden drie regels gegeven. Deze regels moet je
            onthouden. Op het tweede scherm worden drie woorden getoond. Je
            vergelijkt (uit het hoofd) de VOLGORDE van de woorden met de
            VOLGORDE van de regels en je bepaalt hoeveel woorden er overeenkomen
            met de regel.
          </p>
          <br />
          <Button variant="contained" onClick={startExercise}>
            Start
          </Button>
        </div>
      )}

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
        <div className="flex flex-col justify-center p-2">
          <h2>Feedback</h2>
          <div>{feedback}</div>
        </div>
      )}
    </Box>
  );
}
