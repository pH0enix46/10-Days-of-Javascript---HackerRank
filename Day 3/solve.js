// // //

"use strict";

// 1ST QUESTION --SOLVE ✅ ✅
function getSecondLargest(nums) {
  // ⏺ remove duplicates
  const uniqueNums = [...new Set(nums)];
  console.log(uniqueNums);

  // ⏺ descending order
  uniqueNums.sort((a, b) => b - a);
  console.log(uniqueNums);

  // ⏺ return the second largest number
  return uniqueNums[1];
}
console.log(getSecondLargest([2, 3, 6, 6, 5]));
// ⛔️ ⛔️

// 2ND QUESTION --SOLVE ✅ ✅
function reverseString(s) {
  try {
    const reversed = s.split("").reverse().join("");
    console.log(reversed);
  } catch (err) {
    console.log(err.message);
    console.log(s);
  }
}
reverseString("1234");
reverseString(1234);
// ⛔️ ⛔️

// 3RD QUESTION --SOLVE ✅ ✅
function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a === 0) {
    throw new Error("Zero Error");
  } else {
    throw new Error("Negative Error");
  }
}

const input = [2, 0, -5];
input.forEach((num) => {
  try {
    console.log(isPositive(num));
  } catch (err) {
    console.log(err.message);
  }
});
// ⛔️ ⛔️
