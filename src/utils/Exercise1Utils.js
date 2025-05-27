const operators = ["+", "-", "*", "/"];

export function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

export function generateRandomOperator() {
    return operators[Math.floor(Math.random() * operators.length)];
}

export function evaluateExpression(num1, operator, num2) {
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

export function generateOperations() {
    return {
        operation1: `${generateRandomNumber()} ${generateRandomOperator()} ${generateRandomNumber()}`,
        operation2: `${generateRandomNumber()} ${generateRandomOperator()} ${generateRandomNumber()}`,
    };
}

export function getHighestOperation(operations) {
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
