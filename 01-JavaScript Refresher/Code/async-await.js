async function myFunc() {
  return "hello";
}
console.log(myFunc());

// await and async
// a promise
let promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});
// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}
// calling the async function
asyncFunc();
