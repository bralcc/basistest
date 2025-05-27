import categories from "../data/Exercise3Data.js";

export function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function pickRandomCategories(categories, maxTimes = 3) {
  const pickedCategories = [];

  for (let i = 0; i < maxTimes; i++) {
    const randomIndex = randomNumber(categories.length);
    pickedCategories.push(categories[randomIndex]);
  }
  return pickedCategories;
}

export function pickRandomWordsWithMatchProbability(
  categories,
  pickedCategories,
  matchProbability = 0.5
) {
  // Iterate over picked categories using map
  return pickedCategories.map((category) => {
    if (Math.random() < matchProbability) {
      // Pick a word from the matching category IF the random number is under probability
      const words = category.words;
      return words[randomNumber(words.length)];
    } else {
      // Pick a word from a random other category
      let otherCategories = categories.filter(
        (cat) => cat.id !== category.id && cat.words.length > 0
      );
      if (otherCategories.length === 0) otherCategories = categories;
      const randomCat = otherCategories[randomNumber(otherCategories.length)];
      const words = randomCat.words;
      return words[randomNumber(words.length)];
    }
  });
}

export function checkWordMatchesCategory(pickedWords, pickedCategories) {
  let matches = 0;
  pickedWords.forEach((word, key) => {
    const categoryToSearch = pickedCategories[key];
    if (categoryToSearch.words.includes(word)) {
      matches++;
    }
  });
  return matches;
}

export function generateExercise() {
  const randomlyPickedCategories = pickRandomCategories(categories, 3);
  const randomlyPickedWords = pickRandomWordsWithMatchProbability(
    categories,
    randomlyPickedCategories,
    0.4 // 40% match probability
  );

  const matches = checkWordMatchesCategory(
    randomlyPickedWords,
    randomlyPickedCategories
  );
  return {
    words: randomlyPickedWords,
    categories: randomlyPickedCategories,
    matches: matches,
  };
}
