/*
1. Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present. */

// function stringReverse(str) {
//   let newString = "";
//   // Get array of words to loop through each individual word
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     // If less than 5, return word, else reverse word
//     if (words[i].length <= 4) {
//       newString += words[i] + " ";
//     } else {
//       newString += words[i].split("").reverse().join("") + " ";
//     }
//   }
//   return newString;
// }

// console.log(stringReverse("hello I am doing well today"));

/*
2. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

function isPangram(string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Separate string into an array
  let newString = string.toLowerCase().split("");
  // Iterate through alphabet and return false if string doesn't include letter
  for (const letter of alphabet) {
    for (let i = 0; i < newString.length; i++) {
      if (!newString.includes(letter)) {
        return false;
      }
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
