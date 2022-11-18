class className {
  constructor() {
    //js code here
  }
}
class Car {
  constructor(
    name,
    year // name, year are properties
  ) {
    this.name = name;
    this.year = year;
  }
}
let myCar = new Car("Audi", "2021");
console.log(myCar.name);

// inheritance

class Human {
  constructor() {
    this.gender = "female";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // This function executes the parent constructor
    this.name = "Zainab";
  }
  printmyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printmyName();
person.printGender();
