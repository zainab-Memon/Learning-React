//callback function ------------------------------------------------------
const personName = (some) => {
  console.log(some);
};
// function
const printThis = (name, myFunction) => {
  console.log("hello");
  myFunction(name);
};
printThis("zainab", personName);

// Asynchronous --------------------------------------------------------------
function greet() {
  console.log("Hello world");
}

function sayName(name) {
  console.log("Hello" + " " + name);
}

// calling the function
setTimeout(greet, 2000);
sayName("John");

// synchronous with callback ----------------------------------------------------
function greet(name, myFunction) {
  console.log("Hello world");

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log("Hello" + " " + name);
}
// calling the function after 2 seconds
setTimeout(greet, 2000, "John", sayName);
