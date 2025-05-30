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


function constructStatements(data) {
  const object = pickRandomObject(data);
  const [a, b, c] = pickUniqueRandomWords(object);
  const askLargest = Math.random() < 0.5;

  // Randomly pick a comparison pattern: both "<", both ">", or mixed
  const patterns = [
    ["<", "<"],
    [">", ">"],
    ["<", ">"],
    [">", "<"],
  ];
  const [comp1, comp2] = patterns[generateRandomNumber(patterns.length)];

  // Get the comparison texts from the object
  const comp1Text =
    comp1 === "<" ? object.comparisons[0][1] : object.comparisons[1][1];
  const comp2Text =
    comp2 === "<" ? object.comparisons[0][1] : object.comparisons[1][1];

  // Build the statements
  const statements = [`${a} ${comp1Text} ${b}`, `${b} ${comp2Text} ${c}`];

  // Deduce the order using a score system
  const scores = { [a]: 0, [b]: 0, [c]: 0 };
  // a ? b
  if (comp1 === ">") {
    scores[a]++;
    scores[b]--;
  } else {
    scores[a]--;
    scores[b]++;  
  }
  // b ? c
  if (comp2 === ">") {
    scores[b]++;
    scores[c]--;
  } else {
    scores[b]--;
    scores[c]++;
  }
  // Sort by score
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  let answer;
  if (askLargest) {
    answer = sorted[0][0];
  } else {
    answer = sorted[2][0];
  }
  const question = `Wat is ${questionWordMap(object, askLargest)}?`;
  return { statements, question, answer };
}

// Example usage:
const exercise = constructStatements(data);
console.log(exercise.statements);
console.log(exercise.question);
console.log("Answer:", exercise.answer);
