// adding the async to the function. Automatically returns a promise without explicitly returning one. Adding the async in front of the function also unlocks the "await" keyword
// the await is added in front of a method that returns a promise

//The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, 
//promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

//You can also define async functions using the async function expression.

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    // Adding the await keyword, you can delete the .then()
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();