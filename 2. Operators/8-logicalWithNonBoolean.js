// Logical Operators with non Boolean values

// First to last execute hoy,,,
// tai first operand true hole output true hbe
// first operand false hole output 2nd operand hbe

// Falsy and Truthy
false || true; // true

false || "Mosh"; // Mosh

false || 1; // 1

true || 1; // true

// Example
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); //blue
