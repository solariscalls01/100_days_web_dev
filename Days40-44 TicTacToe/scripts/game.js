function startNewGame() {
    if (randomPlayer === 1) {
        playerFirst.innerHTML = players[randomPlayer].name
    }
    else {
        playerFirst.innerHTML = players[randomPlayer].name
    }
    // set the first active player value if player 2 goes first to trigger "O" symbol
    if (randomPlayer === 1) {
        activePlayer = 1
    }

    // Adding a conditional to check for player names
    // console.dir(players)
    // if (players[0].name === "" || players[1].name === "") {
    //     alert('Please enter a player name')
    //     return;
    // }
    displayGameGrid.style.display = "block"
}

function selectGrid(e) {
    e.target.innerHTML = players[activePlayer].symbol
    e.target.classList.add('disabled')      // add the disabled class once a button is clicked to change its CSS properties
    console.dir(e)
    console.log(activePlayer)
    e.target.removeEventListener('click', selectGrid)   // removes the "addeventlistener" property once the object has been clicked to no longer change the values

    // conditional to change players after each round
    if (activePlayer == 1) {
        activePlayer = 0
        console.log(`${activePlayer} active player`)
        return
    }
    
    activePlayer+=1
    
    console.dir(getGridItems)
}