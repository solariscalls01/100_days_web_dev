// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
let getH1el = document.body.firstElementChild;
getH1el = document.body.children[0];
console.log(getH1el);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)

let getParentEl = getH1el.parentElement;
console.log(getParentEl);
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
let getSiblingEl = getH1el.nextSibling.nextSibling;
console.dir(getSiblingEl);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let getH1ElbyID = document.getElementById("h1-el");
console.log(getH1ElbyID);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice

let getnextPEl = document.querySelector(".second-p");
console.log(getnextPEl);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
getnextPEl.textContent =
  "This is our next text";
