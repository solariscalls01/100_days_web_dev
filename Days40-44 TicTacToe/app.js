
// function to toggle on/off the overlay screen for the edit button
// logic for changing name should be here. 
function editNameScreen(event){
    // get the id of the buttons that are clicked
    let btnId = event.id
    // console.log(btnId)
    
    // set variables to check if btn belongs to player 1 or player 2
    if (btnId === "edit-btn-1"){
        console.log(btnId)
    }
    else {
        console.log(btnId)
        alert('btn2 clicked')
    }



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


//  Confirm button function for editing the name of the players
function changeName(event){
    console.log(event)
    let name = document.getElementById('playername').value
    let getBtnAttribute = document.getElementsByTagName('button')
    console.log(getBtnAttribute)
    

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