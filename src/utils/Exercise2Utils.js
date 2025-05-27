import * as Pi from "react-icons/pi";
import React from "react";

const directions = ["rightUp", "rightDown", "leftUp", "leftDown"];
const colors = ["black", "white"];

// Map for direction/color to icon component references
const iconMap = {
    rightUp: {
        black: Pi.PiArrowCircleUpRightFill,
        white: Pi.PiArrowCircleUpRight,
    },
    rightDown: {
        black: Pi.PiArrowCircleDownRightFill,
        white: Pi.PiArrowCircleDownRight,
    },
    leftUp: {
        black: Pi.PiArrowCircleUpLeftFill,
        white: Pi.PiArrowCircleUpLeft,
    },
    leftDown: {
        black: Pi.PiArrowCircleDownLeftFill,
        white: Pi.PiArrowCircleDownLeft,
    },
};

export function getIcons(directions, colors) {
    return [
        React.createElement(iconMap[directions[0]][colors[0]]),
        React.createElement(iconMap[directions[1]][colors[1]]),
    ];
}

export function chooseColorsRandomly() {
    let chosenColors = [];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    chosenColors.push(randomColor);
    // Push the opposite color
    chosenColors.push(randomColor === "white" ? "black" : "white");
    return chosenColors;
}

export function chooseDirectionsRandomly() {
    let chosenDirections = [];
    chosenDirections.push(
        directions[Math.floor(Math.random() * directions.length)]
    );
    chosenDirections.push(
        directions[Math.floor(Math.random() * directions.length)]
    );
    return chosenDirections;
}

export function constructCorrectAnswer() {
    const dirs = chooseDirectionsRandomly();
    const cols = chooseColorsRandomly();
    return {
        directions: dirs,
        colors: cols,
        icons: getIcons(dirs, cols),
    };
}

export function constructRandomAnswers(max, correctAnswer) {
    const randomAnswers = [];
    while (randomAnswers.length < max) {
        const dirs = chooseDirectionsRandomly();
        const cols = chooseColorsRandomly();
        let randomAnswer = {
            directions: dirs,
            colors: cols,
            icons: getIcons(dirs, cols),
        };
        // Ensure random answer is not the same as the correct answer
        const isSame =
            JSON.stringify(randomAnswer.directions) ===
            JSON.stringify(correctAnswer.directions) &&
            JSON.stringify(randomAnswer.colors) ===
            JSON.stringify(correctAnswer.colors);
        if (!isSame) {
            randomAnswers.push(randomAnswer);
        }
        // If same, try again
    }
    return randomAnswers;
}

export function generateExerciseSet() {
    const correct = constructCorrectAnswer();
    const randomAnswers = constructRandomAnswers(5, correct);
    const answers = [...randomAnswers];
    const correctIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(correctIndex, 0, correct);
    return { correctAnswer: correct, allAnswers: answers };
}
