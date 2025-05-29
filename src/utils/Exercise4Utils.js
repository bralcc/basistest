import Exercise4Data from "../data/Exercise4Data.js";

const data = Exercise4Data;

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickRandomObject(data) {
  return data[generateRandomNumber(data.length)];
}

function pickUniqueRandomWords(object) {
  return shuffleArray([...object.words]).slice(0, 3);
}

function questionWordMap(object, askLargest) {
  switch (object.id) {
    case 1:
      return askLargest ? "vlugst" : "traagst";
    case 2:
      return askLargest ? "verst" : "dichtst";
    case 3:
      return askLargest ? "verst naar rechts" : "verst naar links";
    case 4:
      return askLargest ? "zwaarst" : "lichtst";
    case 5:
      return askLargest ? "grootst" : "kleinst";
  }
}

function constructRandomComparisonExercise(data) {
  const object = pickRandomObject(data);
  const [a, b, c] = pickUniqueRandomWords(object);
  let randomIndex = generateRandomNumber(1);

  const comp1Text = object.comparisons[randomIndex][1];
  randomIndex = generateRandomNumber(1);

  const comp2Text = object.comparisons[randomIndex][1];
  const askLargest = Math.random() < 0.5;

  let statements = shuffleArray([
    [`${a} ${comp1Text} ${b}`],
    [`${b} ${comp2Text} ${c}`],
  ]);

  // this function is incomplete and only gives a one-sided statement which makes it too easy to answer

  let answer;
  if (askLargest) {
    answer = c;
  } else {
    answer = a;
  }
  const question = `Wat is ${questionWordMap(object, askLargest)}?`;
  return { statements, question, answer };
}

// Example usage:
const exercise = constructRandomComparisonExercise(data);
console.log(exercise.statements.join("\n"));
console.log(exercise.question);
console.log("Answer:", exercise.answer);
