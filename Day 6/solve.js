// // //

"use strict";

// 1ST QUESTION --SOLVE ✅ ✅
function getDayName(dateString) {
  const date = new Date(dateString);
  console.log(date);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log(date.getDay());
  return dayNames[date.getDay()];
}
console.log(getDayName("10/11/2009"));
console.log(getDayName("11/10/2010"));
// ⛔️ ⛔️
