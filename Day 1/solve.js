// // //

"use strict";

// 1ST QUESTION --SOLVE ✅ ✅
function getArea(length, width) {
  let area;
  area = length * width;
  return area;
}
console.log(getArea(3, 4.5));

function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);
  return perimeter;
}
console.log(getPerimeter(3, 4.5));
// ⛔️ ⛔️

// 2ND QUESTION --SOLVE ✅ ✅
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // ⏺ we know the factorial of 0 or 1 is always 1
  }
  return n * factorial(n - 1); // ⏺ it keeps reducing n by 1 with each recursive call. like 4*3*2*1
}
console.log(factorial(4)); // Output: 24
// ⛔️ ⛔️

// 3RD QUESTION --SOLVE ✅ ✅
function circle(radius) {
  const PI = Math.PI;
  const r = radius;

  const area = PI * Math.pow(r, 2); // ⏺ area: π * r^2
  const perimeter = 2 * PI * r; // / ⏺ perimeter formula: 2 * π * r

  console.log(area);
  console.log(perimeter);
}
circle(2.6);
// ⛔️ ⛔️
