/*
1. Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present. */

function stringReverse(str) {
  let newString = "";
  // Get array of words to loop through each individual word
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    // If less than 5, return word, else reverse word
    if (words[i].length <= 4) {
      newString += words[i] + " ";
    } else {
      newString += words[i].split("").reverse().join("") + " ";
    }
  }
  return newString;
}

console.log(stringReverse("hello I am doing well today"));
