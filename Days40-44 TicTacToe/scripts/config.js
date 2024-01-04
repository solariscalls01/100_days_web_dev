// Because of the order of the import from index.html, we can "import" these variables from the app.js section. 
// Since config.js is loaded first, but is NOT executed until after the variables have already been declared.

function openPlayerConfig() {
    playerConfigOverlayEl.style.display = "block"
    backdropEl.style.display = 'block'

}

function closePlayerConfig() {
    playerConfigOverlayEl.style.display = "none"
    backdropEl.style.display = 'none'
}


function savePlayerName(event){
    event.preventDefault()
    console.log(getNameElement.value)
    if (getNameElement.value === "") {
        let warning = document.getElementById('warning')
        warning.innerHTML = "Name cannot be blank!"
    }
}