// For...In

const person = {
  name: "Mosh",
  age: 30,
};

// for (initialExpression; condition; increment) {

// }

for (let key in person) console.log(key, person[key]);

/*
// Dot notation
person.name

// Brackets notation
person['name']
*/

const colors = ["red, green, blue"];

for (let index in colors) console.log(index, colors[index]);
