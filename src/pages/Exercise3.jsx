import React, { useState } from "react";
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
        <div className="flex flex-col justify-center">
          <div className="text-center text-2xl ring-1 p-1">
            <p>REGELS</p>
          </div>
          <div className="flex justify-center gap-x-2 ring-1 p-1">
            {exercise.categories.map((cat, key) => (
              <span key={key}>{cat.name}</span>
            ))}
          </div>
        </div>
      )}
      {step === "step2" && (
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-row flex-auto items-center">
            <div className="ring-1 p-2 flex-1 text-center">
              <p>WOORDEN</p>
            </div>
            <div className="flex justify-around ring-1 font-bold p-2 flex-1">
              {exercise.words.map((word, key) => (
                <span key={key}>{word}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-row flex-auto items-center">
            <div className="flex-1 text-center">
              <p className="ring-1 p-2">OVEREENKOMSTEN</p>
            </div>
            <div className="flex flex-row flex-1">
              {[0, 1, 2, 3].map((num) => (
                <button
                  key={num}
                  value={num}
                  className="p-2 ring-1 hover:ring-2 flex-1"
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
        <div className="flex flex-col items-center p-2">
          <div>{feedback}</div>
        </div>
      )}
    </Box>
  );
}
