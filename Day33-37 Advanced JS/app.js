// let newLink = document.body.children[1].children[0]

// newLink.href = "https://google.com"

let anchorEl = document.getElementById("link");

anchorEl.href = 14;

// using query selectors. Always gives you the first element that matches the selector. Can also have multiple
// selectors e.g., querySelector('h1 p') targets the h1 -> P element

let queryEl = document.querySelector("#link");

// grabs all the query selectors and puts it in an array
let queryElAll = document.querySelectorAll;

///////////// adding a new element
// 1. create the new element

// example of creating a new anchor element
let newAnchor = document.createElement("a");
// can add text via textcontent
newAnchor.textContent = "Google link";
newAnchor.href = "https://www.google.com";

// 2. get access to the parent element that holds the new element
// this example, we select the first paragraph in the html where we want to insert our new created element
let firstParagraph = document.querySelector("p");

// 3. insert new element into the parent element using append or appendchild.
firstParagraph.append(newAnchor);

//////////// Removing elements //
// 4. select the element that should be removed

// example let's target the H1 element
let firstH1Element = document.querySelector("h1");

// 5. remove it. Need to use the () to call the method.
// firstH1Element.remove();

firstH1Element.parentElement.removeChild(firstH1Element); //another way to delete an object. More complicated, but works on older browsers
console.dir(firstH1Element);

///////////// Moving elements around
// Concept is to select the parent element. Think of say the body as a list object and we have the [h1, p, p, etc...]. We need to select the element we want to move, say the first paragraph, then append it to the top as follows.

let secondParagraph = document.getElementById("second-p");
console.dir(secondParagraph);

firstParagraph.parentElement.append(firstParagraph); //this line takes the first paragraph line, and appends it to the "end" of the list.
secondParagraph.parentElement.insertBefore(secondParagraph, firstParagraph); //this version takes the 2nd paragraph and uses the insertBefore method that takes 2 parameters; first is the item you want followed by where you want to insert
