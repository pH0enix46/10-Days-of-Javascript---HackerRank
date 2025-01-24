// // //

"use strict";

// 1ST QUESTION --SOLVE ✅ ✅
function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    area: a * b,
    perimeter: 2 * (a + b),
  };
}
const rect = Rectangle(4, 5);
console.log(rect.length);
console.log(rect.width);
console.log(rect.area);
console.log(rect.perimeter);
// ⛔️ ⛔️

// 2ND QUESTION --SOLVE ✅ ✅
function getCount(objects) {
  let count = 0;

  for (let i = 0; i < objects.length; i++) {
    // ⏺ LOGIC: check how many objects x and y properties are equal
    if (objects[i].x === objects[i].y) {
      count++; // ⏺ if true, increment the count
    }
  }

  return count;
}

const objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];
console.log(getCount(objects));
// ⛔️ ⛔️

// 3RD QUESTION --SOLVE ✅ ✅
class Polygon {
  constructor(lengths) {
    this.lengths = lengths;
  }

  perimeter() {
    // console.log(this.lengths);
    return this.lengths.reduce((a, b) => a + b, 0);
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
// ⛔️ ⛔️
