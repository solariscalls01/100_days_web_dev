const getInputValue = document.getElementById("user-number");
const getCalculateButton = document.querySelector("#calculator button");
const getCalculatedSumEl = document.getElementById("calculated-sum");

function calculateSum() {
  let total = 0;
  for (let i = 0; i <= getInputValue.value; i++) {
    total = total + i;
  }
  // need to add total textelement
  getCalculatedSumEl.textContent = total;
  getCalculatedSumEl.style.display = "block"; //by default this element is hidden. Need to change to showcase block element
  console.log(getCalculatedSumEl);
}

getCalculateButton.addEventListener("click", calculateSum);


// Highlight links
const getHighLightButton = document.querySelector('#highlight-links button')

function highlightLinks() {
  const anchorElements = document.querySelectorAll('#highlight-links a')
  console.log(anchorElements)
  for (i of anchorElements) {
    console.log(i)
    i.className = "highlight"
  }
}
 
getHighLightButton.addEventListener('click', highlightLinks);

// Display user Data
const dummyUserData = {
  firstName: "Max",
  lastName: "Dy",
  age: "33"
}

const displayUserDataButton = document.querySelector("#user-data button")

function displayUserData() {

  const outputElement = document.getElementById('output-user-data')

  outputElement.innerHTML = "  "
  for (key in dummyUserData) {
    const insertElement = document.createElement('li')
    const outputText = key.toUpperCase() + ": " + dummyUserData[key]
    insertElement.textContent = outputText
    outputElement.append(insertElement)
  }
}

displayUserDataButton.addEventListener('click', displayUserData)