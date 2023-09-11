
// adding an eventlisterner to the textbox
const inputElement = document.querySelector('input');
// inputElement.addEventListener('input')

// Getter for the max length integer. 
const getMaxElement = inputElement.maxLength




// The .value method retrieves the input value from the textbox. 
// Items inside the () also contain objects within them. If we for example console.log it, it has another tier of objects we can 
// access. In our example, we can utilize the .target and .value to get the values that are inside our (). The name 
// inside the () can be anything we want. 
function retrieveInput (someEvent) {
    const enteredText = someEvent.target.value;
    const enteredTextLength = enteredText.length


    // get the value of the count of numerator
    const textCounter = document.getElementById('count')
    console.dir(textCounter)
    console.log(`textCounter = ${textCounter.textContent}`)
    const totalCount = getMaxElement - enteredTextLength
    textCounter.textContent = totalCount

    // Conditional for changing the background input to red when chars < 10
    if (textCounter.innerText < 10) {
        inputElement.setAttribute("id", "warning")
        // textCounter.setAttribute('class', 'span-warning')

        // Another variation is to use "classList" instead of the "setAttritbute". This adds the class "span-warning" to 
        // our current class
        textCounter.classList.add("span-warning")
    }
    else {
        inputElement.removeAttribute('id')
        textCounter.setAttribute('id', 'count')
        textCounter.setAttribute('class', "counter")
        textCounter.classList.remove('span-warning') //same idea. this removes the class attribute
    }

    
    
}

inputElement.addEventListener('input', retrieveInput)

console.dir(inputElement)