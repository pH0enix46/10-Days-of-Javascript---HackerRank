// // //

"use strict";

// 1ST QUESTION --SOLVE ✅ ✅
function regexVar() {
  /*
   * Regular expression explanation:
   * ^  - Start of string
   * ( [aeiou] ) - Capturing group that matches any vowel (a, e, i, o, u)
   * .* - Matches any number of characters in between
   * \1 - Ensures the last character matches the first vowel (backreference)
   * $ - End of string
   */
  let re = /^([aeiou]).*\1$/;

  return re;
}
console.log(regexVar().test("bcd"));
console.log(regexVar().test("abcd"));
console.log(regexVar().test("abcda"));
console.log(regexVar().test("abcdo"));
console.log(regexVar().test("aeia"));
// ⏺ test() is js method/function is used to check if a string matches a regular expression or not
// ⛔️ ⛔️

// 2ND QUESTION --SOLVE ✅ ✅
function regexVar() {
  /*
   * Matches strings starting with "Mr.", "Mrs.", "Ms.", "Dr.", "Er." prefixes
   * \. → Ensures there is a dot (.) right after the prefix
   * [a-zA-Z]+ → Ensures only alphabetic letters come after the prefix
   * $ → Ensures the string ends after the valid name
   */
  let re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;

  return re;
}
const re = regexVar();
console.log(re.test("Mr.X"));
console.log(re.test("Mrs.Y"));
console.log(re.test("Dr#Joseph"));
console.log(re.test("Dr.Joseph"));
console.log(re.test("Er .Abc"));
console.log(re.test("ms.l"));
// ⛔️ ⛔️

// 3RD QUESTION --SOLVE ✅ ✅
function regexVar() {
  /*
   * The regex \d+ matches one or more digits
   * The global flag `g` ensures all matches are found
   */
  let re = /\d+/g;

  return re;
}
let ree = regexVar();
let str = "102, 1948948 and 1.3 and 4.5 and 7gd6";
console.log(str.match(ree));
// ⏺ match() is a JS method/function used to retrieve all matches of a regular expression in a string
// ⛔️ ⛔️
