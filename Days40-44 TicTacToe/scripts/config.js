// Because of the order of the import from index.html, we can "import" these variables from the app.js section. 
// Since config.js is loaded first, but is NOT executed until after the variables have already been declared.

function openPlayerConfig(e) {
    console.log(anotherPlayer)
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
        console.dir(event.target.firstElementChild.classList.add('red-warning'))    // allows us to add the warning class to the first form div element using the child element cascade
        // event.target.firstElementChild.classList.childNodes[3].add('red-warning')
        let warning = document.getElementById('warning')
        warning.innerHTML = "Name cannot be blank!"
        return;     // return stops the rest of the function and doesn't execute anymore code
    }

    else if (edittedPlayer == "1") {
       changeName.children[1].innerHTML = enteredPlayerName
       closePlayerConfig()
       event.target[0].value = ""       // resets the input box to a clear value

    }
    else {
        changeName.children[1].innerHTML = enteredPlayerName
        closePlayerConfig()
        event.target[0].value = ""      // resets the input box to a clear value
    }

}