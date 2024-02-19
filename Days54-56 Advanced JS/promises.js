// Promises.

const fs = require("fs/promises");

// ASYNC data just basically means that things run asynchronously. The file data in this example takes time to parse and as a ersult, the "hi there" will be printed first
// once the filedata is parsed from the readFile() method, it will print the items inside
function readFile() {
  let fileData;

  // Using the promises ".then()" method. A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation, allowing for
  // more readable and manageable asynchronous code. promises are a great way to run async operations without dealing with "callback hell"

  // The .then() requires a function that you want to run within that promise. Exampling of chaining promises together
  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log("file parsed");
      console.log(fileData.toString());
      return fileData;
    })
    .then(function () {
      console.log("another promise");
    })
    .then(function () {
      console.log("testing promise again");
    })

    // using the .catch for error handling when using promises.
    .catch(function (error) {
      console.log(error);
    });
  console.log("hi there!");
}

readFile();
//output: hi there!
//                      file parsed
//                      This works - data from txt file
//                      another promise
//                      testing promise again
