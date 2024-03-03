// EXAMPLE 1 - Check if a Number is not Greater than 0 in JavaScript

const num = -5;

if (num <= 0) {
  // 👇️ this runs
  console.log('✅ number is not greater than 0');
} else {
  console.log('⛔️ number is greater than 0');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Define a reusable function

// function isNotGreaterThanZero(num) {
//   return num <= 0;
// }

// console.log(isNotGreaterThanZero(0)); // 👉️ true
// console.log(isNotGreaterThanZero(5)); // 👉️ false
// console.log(isNotGreaterThanZero(-10)); // 👉️ true

// if (isNotGreaterThanZero(-5)) {
//   // 👇 this runs
//   console.log('The number is not greater than zero');
// } else {
//   console.log('The number is greater than zero');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Number is not Greater than 0 using logical NOT (!) operator

// const num = -5;

// if (!(num > 0)) {
//   // 👇️ this runs
//   console.log('✅ number is not greater than 0');
// } else {
//   console.log('⛔️ number is greater than 0');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Define a reusable function

// const num = -5;

// function isNotGreaterThanZero(num) {
//   return !(num > 0);
// }

// console.log(isNotGreaterThanZero(0)); // 👉️ true
// console.log(isNotGreaterThanZero(5)); // 👉️ false
// console.log(isNotGreaterThanZero(-10)); // 👉️ true

// if (isNotGreaterThanZero(-5)) {
//   // 👇 this runs
//   console.log('The number is not greater than zero');
// } else {
//   console.log('The number is greater than zero');
// }
