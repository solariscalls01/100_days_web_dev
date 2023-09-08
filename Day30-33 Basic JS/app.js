let age = 32;
let userName = "david";
let hobbies = ["SC", "hiking", "climbing"];

// Objects "dictionary" types
let person1 = {
  name: "David",
  age: 33,
};


function calculateAge (age) {
    adultYears = age - 18
    return adultYears
}

console.log(calculateAge(321))

// can add a function to an object as well. Does not need the variable declaration (e.g., let, var, const). Adding a function to an object is also called a "method"
let person = {
  name: "David",
  greet() {
    alert("hello there");
  },
};

person.greet();