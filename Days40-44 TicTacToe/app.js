
// function to toggle on/off the overlay screen for the edit button
// logic for changing name should be here. 
function editNameScreen(){
    document.getElementById('overlay').style.display = "flex"
    document.getElementById('overlay').addEventListener('click', function(event) {
        if (event.target === this) {
            cancelBtn();
        }
    })
}

// Set overlay display to none when user clicks cancel
function cancelBtn(){
    document.getElementById('overlay').style.display = "none"
}





// Edit function to change the name of the players
function changeName(){
    let name = document.getElementById('playername').value
    let player1name = document.getElementById('edit-btn-1')
    let player2name = document.getElementById('edit-btn-2')
    let replaceName;

    console.dir(player1name)
    console.dir(player2name)
    if (player1name.id === 'edit-btn-1') {
        replaceName = document.getElementById('player1')
        replaceName.innerHTML = name
        cancelBtn();
    }
    else if(player2name.id === "edit-btn-2") {
        replaceName = document.getElementById('player2')
        replaceName.innerHTML = name
    }

}