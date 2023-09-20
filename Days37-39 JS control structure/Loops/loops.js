// Standard for loop. Useful for when you know how many times something should be executed
for (let i = 1; i < 10; i++) {
  console.log(i);
}

////////////// For of loops
// similar to for loops. Difference is using some variable "e.g., user" and adding "of" followed by the
// array that you want to iterate. Works very similar to if you got the length of the array and perform
// the i < users.length, while incrementing the i value.
const users = ["max", "anne", "joel"];

for (const user of users) {
  console.log(user);
}

//////////// For in loops
// meant to be used on objects.

const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

// "key" can be any name, but will only print out the key. In order to access the value, you need to utilize the indexing 
for (const key in loggedInUser) {
    console.log(key)
    console.log(loggedInUser[key])
}

// while loops 

let isFinished = false; 
while (!isFinished) {
    isFinished = confirm('Do you want to quit? ') //this opens an alert box

}

console.log('done')