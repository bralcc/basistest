import React, { useState } from "react";
import Box from "../components/Box";
import Title from "../components/Title";

const operators = ["+", "-", "*", "/"];

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function generateRandomOperator() {
  return operators[Math.floor(Math.random() * operators.length)];
}

function evaluateExpression(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : null;
    default:
      return null;
  }
}

function generateOperations() {
  return {
    operation1: `${generateRandomNumber()} ${generateRandomOperator()} ${generateRandomNumber()}`,
    operation2: `${generateRandomNumber()} ${generateRandomOperator()} ${generateRandomNumber()}`,
  };
}

function getHighestOperation(operations) {
  const results = {};
  let highest = -Infinity;
  let highestKey = "";
  let equal = false;

  Object.entries(operations).forEach(([key, op]) => {
    const [num1, operator, num2] = op.split(" ");
    const result = evaluateExpression(Number(num1), operator, Number(num2));
    results[key] = result;
    if (result > highest) {
      highest = result;
      highestKey = key;
      equal = false;
    } else if (result === highest) {
      equal = true;
    }
  });

  if (equal) return "equal";
  return highestKey;
}

export default function Exercise1() {
  const [operations, setOperations] = useState({});
  const [step, setStep] = useState("start"); // start, show1, show2, choose, feedback
  const [currentOp, setCurrentOp] = useState(0);
  const [highestKey, setHighestKey] = useState("");
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [feedback, setFeedback] = useState("");

  function startExercise() {
    const ops = generateOperations();
    setOperations(ops);
    setHighestKey(getHighestOperation(ops));
    setStep("show1");
    setCurrentOp(0);
    setTimeout;
    setFeedback("");
  }

  function nextOperation() {
    if (currentOp < 1) {
      setCurrentOp(currentOp + 1);
      setStep("show2");
    } else {
      setStep("choose");
    }
  }

  function handleChoice(choice) {
    let correct = false;
    if (choice === "first" && highestKey === "operation1") correct = true;
    else if (choice === "second" && highestKey === "operation2") correct = true;
    else if (choice === "equal" && highestKey === "equal") correct = true;

    setFeedback(correct ? "Correct!" : "Incorrect. Try again!");
    setScore((s) => (correct ? s + 1 : s));
    setTries((t) => t + 1);
    setStep("feedback");
  }

  function nextRound() {
    startExercise();
  }

  return (
    <Box as="section">
      <Title>Exercise 1</Title>
      <Box>
        {step === "start" && <button onClick={startExercise}>Start</button>}
        {step === "show1" && (
          <div>
            <p>Operation 1: {operations.operation1}</p>
            <button onClick={nextOperation}>Next</button>
          </div>
        )}
        {step === "show2" && (
          <div>
            <p>Operation 2: {operations.operation2}</p>
            <button onClick={nextOperation}>Choose</button>
          </div>
        )}
        {step === "choose" && (
          <div>
            <button className="px-2" onClick={() => handleChoice("first")}>
              B
            </button>
            <button className="px-2" onClick={() => handleChoice("second")}>
              O
            </button>
            <button className="px-2" onClick={() => handleChoice("equal")}>
              G
            </button>
          </div>
        )}
        {step === "feedback" && (
          <div>
            <p>{feedback}</p>
            <p>
              Score: {score}, Tries: {tries}
            </p>
            <button onClick={nextRound}>Next</button>
          </div>
        )}
      </Box>
    </Box>
  );
}
