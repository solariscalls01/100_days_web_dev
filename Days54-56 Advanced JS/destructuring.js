// Understanding destructuring. JavaScript destructuring is a concise syntax that allows for extracting values from arrays or objects into distinct variables
// Array destructuring
const input = ['Daave', "Lee"]

const [firstName, LastName] = input

console.log(firstName)      //output: Daave
console.log(LastName)       //output: Lee

// OBJECT destructuring
const job = {
    title: "Developer",
    location: "NY"
}


const {title, location} = job;
console.log(title)          //output Developer