import React, { useState } from "react";
import Box from "../components/Box";
import Title from "../components/Title";
import Button from "../components/Button";
import {
  generateRandomNumber,
  generateRandomOperator,
  evaluateExpression,
  generateOperations,
  getHighestOperation,
} from "../utils/Exercise1Utils";

export default function Exercise1() {
  const [operations, setOperations] = useState({});
  const [step, setStep] = useState("start"); // start, show1, show2, choose, feedback
  const [currentOp, setCurrentOp] = useState(0);
  const [highestKey, setHighestKey] = useState("");
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [feedback, setFeedback] = useState("");

  function startExercise() {
    setTries(0);
    setScore(0);
    showExercise();
  }

  function showExercise() {
    if (tries < 10) {
      const ops = generateOperations();
      setOperations(ops);
      setHighestKey(getHighestOperation(ops));
      setStep("show1");
      setCurrentOp(0);
      setFeedback("");
      setTimeout(() => {
        setStep("show2");
        setCurrentOp(1);
        setTimeout(() => {
          setStep("choose");
        }, 1000);
      }, 1000);
    } else {
      setStep("score");
    }
  }

  function handleChoice(choice) {
    let correct = false;
    if (choice === "first" && highestKey === "operation1") correct = true;
    else if (choice === "second" && highestKey === "operation2") correct = true;
    else if (choice === "equal" && highestKey === "equal") correct = true;

    setFeedback(correct ? "Correct!" : "Incorrect.");
    setScore((s) => (correct ? s + 1 : s));
    setTries((t) => t + 1);
    setStep("feedback");
    setTimeout(() => {
      showExercise();
    }, 1000);
  }

  function nextRound() {
    startExercise();
  }

  return (
    <Box as="main" className="bg-background text-text p-4">
      <Title className="text-center mb-6">Getalvaardigheidstest</Title>
      {step === "start" && (
        <div>
          <h2>Doel</h2>
          <p className="mb-2">
            Dit is een oefening om te meten hoe snel en correct iemand
            opdrachten met getallen uit het hoofd kan uitvoeren.
          </p>
          <h2>Omschrijving</h2>
          <p>
            Er wordt een eerste rekenopgave getoond. Bereken de uitkomst uit het
            hoofd en onthoud de uitkomst. Op het volgende scherm wordt een
            tweede rekenopgave getoond. Bereken en onthoud ook de uitkomst van
            deze opgave. Op het derde en laatste scherm moet je aanduiden welke
            uitkomst de GROOTSTE is, of aanduiden als de uitkomst GELIJK is.
            Indien de bovenste lijn groter is, markeer dan B. Indien de onderste
            lijn groter is, markeer dan O. Indien beide uitkomsten gelijk zijn,
            markeer dan G. Bestudeer nu eerst voorbeeld 1 (Scherm 1, Scherm 2,
            Scherm 3 en Oplossing). Doe daarna hetzelfde voor voorbeeld 2 en
            eindig met voorbeeld 3.
          </p>
        </div>
      )}

      <div className="flex flex-col justify-center items-center">
        {["show1", "show2", "choose"].includes(step) && (
          <p className="my-2">Tries: {tries}</p>
        )}
        {step === "start" && (
          <Box className="my-6">
            <Button
              variant="contained"
              className="w-full"
              onClick={startExercise}
            >
              Start
            </Button>
          </Box>
        )}
        {step === "show1" && (
          <Box>
            <p>Operation 1: {operations.operation1}</p>
          </Box>
        )}
        {step === "show2" && (
          <Box>
            <p>Operation 2: {operations.operation2}</p>
          </Box>
        )}
        {step === "choose" && (
          <Box className="flex-row justify-center gap-4">
            <Button variant="outlined" onClick={() => handleChoice("first")}>
              B
            </Button>
            <Button variant="outlined" onClick={() => handleChoice("second")}>
              O
            </Button>
            <Button variant="outlined" onClick={() => handleChoice("equal")}>
              G
            </Button>
          </Box>
        )}
        {step === "feedback" && (
          <Box>
            <p>{feedback}</p>
          </Box>
        )}
        {step === "score" && (
          <Box>
            <p className="mb-2">Your score is: {score}</p>
            <Button variant="outlined" onClick={nextRound}>
              Go Again
            </Button>
          </Box>
        )}
      </div>
    </Box>
  );
}
