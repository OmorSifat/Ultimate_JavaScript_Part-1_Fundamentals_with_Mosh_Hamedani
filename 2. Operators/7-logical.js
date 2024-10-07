// Logical Operators

// // Logical AND (&&)
// // Returns TRUE if both operands are TRUE
// console.log(true && true); // true
// console.log(true && false); // false

// //Example of logical AND operation
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan); // true

// // Logical OR (||)
// // Returns TRUE if one of the operand is TRUE
// console.log(true || false); // true
// console.log(false || false); // false

// //Example of logical OR operation
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan); // false

// Logical NOT (!)
// Returns TRUE if operand is FALSE, otherwise returns FALSE
let highIncome = false;
let goodCreditForLoan = false;
let eligibleForLoan = highIncome || goodCreditForLoan; // boolean
console.log("Eligible ", eligibleForLoan);

//Example of NOT operator
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

console.log(eligibleForLoan);
