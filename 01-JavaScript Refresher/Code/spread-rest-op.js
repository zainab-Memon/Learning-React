//Spread Operator on Array
const numbers = [1, 2, 3]; // An Array
const newNum = [...numbers, 4, 5]; // An array with a spread operator
console.log(newNum); //   Output: [1,2,3,4,5]

// Spread Operator on Object
const person = {
  name: "zainab",
};
const newPerson = {
  ...person,
  age: 23,
};
console.log(newPerson); // Output: {name: 'zainab', age: 23}

// Rest Operator

function sortArgs(...args) {
  return args.sort();
}

console.log(sortArgs("Dog", "Banana", "Cat", "Apple"));
// Output: ['Apple', 'Banana', 'Cat', 'Dog']
