//  creating an array
// syntax-1--------------
const myArray = [1, 2, 3, 4];

// syntax-2---------------
const myCars = new Array("audi", "mehran", "BMW");

// Accessing Array Elements
let car1 = myCars[0];

//  We can have variables of different types in array, functions, objects and arrays in an array.
const std = [Date.now, myCars];

//finding the type of variable, wether it's an object or an array
// typeof returns object
console.log(typeof std);

// Therefore we use Array.isArray() or instance of operator
console.log(Array.isArray(std)); //true
console.log(std instanceof Array); //true
