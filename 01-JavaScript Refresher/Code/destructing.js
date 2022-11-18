// Destructuring in Arrays
myArray = [1, 2, 3];
[num1, num2] = myArray;
console.log(num1, num2); //1 ,2

// Destructuring in Objects
const myStudents = {
  name: "Zainab",
  age: 23,
  gender: "female",
};

const { name, gender } = myStudents;
console.log(name, gender); // zainab female
