// // //

"use strict";

// 1ST QUESTION --SOLVE ✅ ✅
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

// console.log(Rectangle);

class Square extends Rectangle {
  constructor(a) {
    // ⏺ pass the same value for width and height to the Rectangle constructor
    super(a, a);
  }
}

const rect = new Rectangle(3, 4);
console.log(rect.area());
const square = new Square(3);
console.log(square.area());
// ⛔️ ⛔️

// 2ND QUESTION --SOLVE ✅ ✅
function modifyArray(nums) {
  // ⏺ even(জোড়) odd(বিজোড়)
  console.log(nums.map((num) => num % 2 === 0));
  return nums.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
}
console.log(modifyArray([1, 2, 3, 4, 5]));
// ⛔️ ⛔️
