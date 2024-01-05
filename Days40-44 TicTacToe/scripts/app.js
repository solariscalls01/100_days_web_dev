// Variables for getting edit buttons from player 1 / player 2
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn')
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn')
let getNameElement = document.getElementById('playername')

// Creating the editted player variables to set "permanently" in the html code
let edittedPlayer = "0"

// Create an array of objets for the players that include the name and the symbols
let activePlayer = 0

const players = [
    {name: "",
    symbol: "X"},
    {name: "",
    symbol: "O"}
]

// Variables for overlays and modals
const playerConfigOverlayEl = document.getElementById('config-overlay')
const backdropEl = document.getElementById('backdrop')

// Variables for cancel button
const cancelBtn = document.getElementById('cancel-btn')

// Event listeners to open / close modal / overlays
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

// Access the form element and add an event listener "submit" that is able to take the value, but also will be needed to prevent the defautl form of being submitted via the function. 
const formEl = document.querySelector("form")
formEl.addEventListener('submit', savePlayerName)

// Event listener to change display back to none by either clicking the cancel btn or the backdrop e.g., anywhere off the screen.
cancelBtn.addEventListener('click', closePlayerConfig);
backdropEl.addEventListener('click', closePlayerConfig);


// Start Game Button Variables
const startGameButton = document.getElementById('start-new-game')
const displayGameGrid = document.getElementById('active-game')
startGameButton.addEventListener('click', startNewGame)
const playerFirst = document.getElementById('active-player-name')

const getGridItems = document.querySelectorAll('#game-board li')    // Needs the class indicator and since we are targeting the elements AFTER the ol, we use li

// Creating a for OF loop to add an event listener to each item. Can be done manually, but this is easier to perform task
for (const getGridItem of getGridItems) {
    getGridItem.addEventListener('click', selectGrid)
    // console.log(getGridItem)
}