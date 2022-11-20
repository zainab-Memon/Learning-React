// map()
const numbers = [1, 3, 6, 20];
const newNum = numbers.map((num) => {
  return num * 2;
});
console.log(newNum); //2,6,12,40

// function
const myNewArray = (num) => {
  return num * 2;
};
// using map with a function
// const numbers = [1, 3, 6, 20];
// const newNum = numbers.map(myNewArray);

// find()
const ages = [12, 34, 56, 13];
checkage = (age) => {
  return age > 18;
};
console.log(ages.find(checkage)); //34

// filter()
const Ages = [12, 34, 56, 13];
checkage = (age) => {
  return age > 18;
};
console.log(Ages.filter(checkage)); //34,56

// findIndex()
const ageS = [12, 34, 56, 13];
checkage = (age) => {
  return age > 18;
};
console.log(ageS.findIndex(checkage)); //1

// reduce()
const myNumbers = [15.5, 2.3, 1.1, 4.7];
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(myNumbers.reduce(getSum, 0)); // reduce(function, initial value)
// // output: 24

// concat()
const array1 = [12, 13, 14, 16];
const array2 = [21, 31, 41, 61];
console.log(array1.concat(array2)); //[12, 13, 14, 16, 21, 31, 41, 61]

const array3 = [15, 17, 18];
console.log(array1.concat(array2, array3)); //[12, 13, 14, 16, 21, 31, 41, 61, 15, 17, 18]

// // slice()
const students = ["max", "faria", "dua", "jon"];
console.log(students.slice(0, 2)); //['max', 'faria']

// splice()
const fruits = ["apple", "banana", "kiwi", "lemon"];
// removing
fruits.splice(1, 2);
console.log(fruits); //apple,lemon
// adding
fruits.splice(1, 0, "banana", "kiwi"); //['apple', 'banana', 'kiwi', 'lemon']
console.log(fruits);
