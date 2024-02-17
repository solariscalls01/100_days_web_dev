// ADDING DEFAULT VALUES TO FUNCTIONS
// by adding the = next to the parameter, it sets the default value in the event the greetUser() is empty without anything being passed in

function greetUser(userName = "brian") {
  console.log("hi there, " + userName);
}

greetUser("Dave"); //outputs Hi there Dave
greetUser(); // outputs Hi there brian

// something to keep in mind is that when having 2 or more parameters in a function, the non-default parameters MUST be listed first and default values added towards the back. 
function anotherGreet(greetPrefix, userName = "dave") {
  console.log(greetPrefix + " " + userName);
}

anotherGreet("hi"); // outputs: hi dave
anotherGreet(); // outputs undefined dave
anotherGreet("hey", "brian"); // outputs: hey brian

////////////////////////////////
// Passing lists to function //
///////////////////////////////
function sumUp(numbers) {
    let results = 0
    for (i of numbers) {
        results += i
    }
    return results
}

console.log(sumUp([1,3,5,7]))

// ANOTHER WAY OF passing multiple parameters without having to actually set this in a function is called a REST argument
// ADDING THE ... allows you to put in any amount of parameters in the function, instead of say sumUp(par1, par2, par3, par4, etc...)
// HOWEVER, this does not work well if you end up putting a set of numbers that are actually in a list
// ... are also known as SPREAD OPERATORS
function sumUp1(...numbers) {
    let results = 0
    for (i of numbers) {
        results += i
    }
    return results
}

console.log(sumUp1(1,5,6,31)) // output: 43
console.log(sumUp1([1,5,6,31])) // output: 01, 5, 6, 31

// in order to make the array/ list output the proper numbers, we again can use the ... which "spreads" the array out into its individual components, hence the name spread operator
console.log(sumUp1(...[1,5,6,31]))  //output: 43
