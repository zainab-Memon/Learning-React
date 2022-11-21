// promise
const count = true;
let myPromise = new Promise((resolve, reject) => {
  if (count) {
    resolve("There is a count value");
  } else {
    reject("There is no count value");
  }
});
console.log(myPromise);

// then()
myPromise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

// catch()

myPromise.catch((error) => {
  console.log(error);
});
