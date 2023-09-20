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
