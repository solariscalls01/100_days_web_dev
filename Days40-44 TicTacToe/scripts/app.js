// Variables for getting edit buttons from player 1 / player 2
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn')
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn')
let getNameElement = document.getElementById('playername')

let edittedPlayer = "0"
let anotherPlayer = ""

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




// function to toggle on/off the overlay screen for the edit button
// logic for changing name should be here. 
function editNameScreen(event){
    // get the id of the buttons that are clicked
    let btnId = event.id
    // console.log(btnId)
    
    // set variables to check if btn belongs to player 1 or player 2
    if (btnId === "edit-btn-1"){
        let player1Name = document.getElementById('player1')
        changeName(player1Name)
    }
    else {
        let player2Name = document.getElementById('player2')
        changeName(player2Name)

    }

    document.getElementById('overlay').style.display = "flex"
    document.getElementById('overlay').addEventListener('click', function(event) {
        if (event.target === this) {
            cancelBtn();
        }
    })
}



//  Confirm button function for editing the name of the players
function changeName(event){
    // console.dir(event)

    if (event.id === "player1") {
        let name = document.getElementById('playername').value
        event.innerText = name
    }
    // else if (event.id === "") {
    //     alert("player name can't be empty")
    // }


}