// Because of the order of the import from index.html, we can "import" these variables from the app.js section. 
// Since config.js is loaded first, but is NOT executed until after the variables have already been declared.

function openPlayerConfig(e) {
    edittedPlayer = e.target.dataset.playerid
    // console.log(edittedPlayer)
    playerConfigOverlayEl.style.display = "block"
    backdropEl.style.display = 'block'
}

function closePlayerConfig() {
    playerConfigOverlayEl.style.display = "none"
    backdropEl.style.display = 'none'
    formEl.firstElementChild.classList.remove('red-warning')
    warning.innerHTML = ""
    formEl.firstElementChild.lastElementChild.value = ""              // resets the input box to a clear value
    
}


function savePlayerName(event){
    event.preventDefault()
    // console.dir(event.target)
    // console.dir(event)

    const formData = new FormData(event.target) // FormData is an object that can get access to the forms attribute.
    let enteredPlayerName = formData.get('playername').trim()     // Using the .get() method allows us to get an attribute from the form with the respective id/class name parameter. trim method gets rid of excess whitespace

    // variable to change the playername depending on the ID selected
    const changeName = document.getElementById('edit-player-' + edittedPlayer)

    if (enteredPlayerName === "") {
        event.target.firstElementChild.classList.add('red-warning')             // allows us to add the warning class to the first form div element using the child element cascade      
        let warning = document.getElementById('warning')
        warning.innerHTML = "Name cannot be blank!"
        return;     // return stops the rest of the function and doesn't execute anymore code
    }

    // Similar if/ else but more concise and cleaner code
    changeName.children[1].innerHTML = enteredPlayerName
    players[edittedPlayer - 1].name = enteredPlayerName     // Subtact 1 due to indexing from array
    closePlayerConfig();

    
    // else if (edittedPlayer == "1") {
    //    changeName.children[1].innerHTML = enteredPlayerName
    //    closePlayerConfig()
    //    players[0]['name'] = enteredPlayerName   // Update the array of the player names
       
    //    console.dir(players)
    
    // }
    // else {
    //     changeName.children[1].innerHTML = enteredPlayerName
    //     closePlayerConfig()
    //     players[1]['name'] = enteredPlayerName   // Update the array of the player names
    // }

}