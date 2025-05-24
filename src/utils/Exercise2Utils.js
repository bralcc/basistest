const directions = ["rightUp", "rightDown", "leftUp", "leftDown"];
const colors = ["black", "white"];

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
    return {
        directions: chooseDirectionsRandomly(),
        colors: chooseColorsRandomly(),
    };
}

export function constructRandomAnswers(max, correctAnswer) {
    const randomAnswers = [];
    while (randomAnswers.length < max) {
        let randomAnswer = {
            directions: chooseDirectionsRandomly(),
            colors: chooseColorsRandomly(),
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
