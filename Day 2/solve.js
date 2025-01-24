// // //

"use strict";

// 1ST QUESTION --SOLVE ✅ ✅
function getGrade(score) {
  let grade;

  // ⏺ we have to use the && operator to combine the two conditions
  if (score > 25 && score <= 30) {
    grade = "A";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else if (score >= 0 && score <= 5) {
    grade = "F";
  }
  return grade;
}
console.log(getGrade(11));
// ⛔️ ⛔️

// 2ND QUESTION --SOLVE ✅ ✅
function getLetter(s) {
  let letter;
  const firstChar = s.charAt(0).toLowerCase(); // ⏺ charAt() method/function that returns the character at a specified index in a string
  // console.log(firstChar);

  if (["a", "e", "i", "o", "u"].includes(firstChar)) {
    letter = "A";
  } else if (["b", "c", "d", "f", "g"].includes(firstChar)) {
    letter = "B";
  } else if (["h", "j", "k", "l", "m"].includes(firstChar)) {
    letter = "C";
  } else {
    letter = "D";
  }

  return letter;
}
console.log(getLetter("adfgt"));
// ⛔️ ⛔️

// 3RD QUESTION --SOLVE ✅ ✅
function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  let vowelChars = "";
  let consonantChars = "";

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (vowels.includes(char)) {
      vowelChars += char + "\n";
    } else {
      consonantChars += char + "\n";
    }
  }

  console.log(`vowels:\n${vowelChars}consonants:\n${consonantChars}`);
}
vowelsAndConsonants("javascriptloops");
// ⛔️ ⛔️
