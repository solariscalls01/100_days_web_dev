// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const getFirstBtn = document.querySelector('button')

//    - Select the second button by using an "id"
const getSecondBtn = document.getElementById('second-btn')




// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function consoleDir(button) {
    console.dir(button)
}

getFirstBtn.addEventListener('click', consoleDir)
//    - Output the second button WITHOUT using the variable in which it's stored

    document.getElementById('second-btn').addEventListener('click', consoleDir)



// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
console.dir(document)
        console.dir(document.body.childNodes[5].children[1].innerText)
        console.dir(document.body.childNodes[5].children[3].innerText)

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!




// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

function removeText(button) {
    console.dir(button.srcElement.firstChild.parentNode.previousElementSibling)
    button.srcElement.firstChild.parentNode.previousElementSibling.textContent
}

// One way of doing it is getting the DOM for that paragraph and using the remove method. 
function removeP() {
    document.getElementById('first-p').remove()
}


// getFirstBtn.addEventListener('click', removeText)
    getFirstBtn.addEventListener('click', removeP)

//    - The second button changes the background color of the first paragraph to blue

function changeBackground() {
    getSecondBtn.parentNode.childNodes[3].style.backgroundColor = "blue"
}
    
    getSecondBtn.addEventListener('click', changeBackground)

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!