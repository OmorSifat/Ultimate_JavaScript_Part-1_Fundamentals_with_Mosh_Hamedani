// Exercise 01 - Max of two Numbers

// Write a Function that takes two numbers and returns the maximum of the two.

let number = max(5, 10);
console.log(number);

function max(a, b) {
  if (a > b) return a;
  else return b; // 10
}

// or
function max(a, b) {
  return a > b ? a : b; // 10
}
