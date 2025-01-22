// // //

"use strict";

// 1ST QUESTION --SOLVE ✅ ✅

function greeting(parameterVariable) {
  console.log("Hello, World!");
  console.log(parameterVariable);
}
greeting("Welcome to 10 Days of JavaScript!");

// ⛔️ ⛔️

// 2ND QUESTION --SOLVE ✅ ✅

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";

  // ⏺ LOGIC: we have to convert string type to number type
  console.log(firstInteger + +secondInteger);
  console.log(firstDecimal + +secondDecimal);
  console.log(firstString + secondString);
}

performOperation(
  "12",
  "4.32",
  "is the best place to learn and practice coding!"
);

// ⛔️ ⛔️
