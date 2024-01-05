function startNewGame() {
    // select a random player to go first
    let randomPlayer = Math.floor(Math.random() * 2)
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

    // Reset the conditions once start New game has been clicked again. 
    for (const getGridItem of getGridItems) {
        getGridItem.addEventListener('click', selectGrid)
        getGridItem.innerHTML = ""
        getGridItem.classList.remove('disabled')
        
    }
    gridLength = getGridItems.length
    document.getElementById('game-over').style.display = "none"
}

function selectGrid(e) {
    checkGameStatus()

    e.target.innerHTML = players[activePlayer].symbol
    e.target.classList.add('disabled')      // add the disabled class once a button is clicked to change its CSS properties
    console.dir(e.target)
    e.target.removeEventListener('click', selectGrid)   // removes the "addeventlistener" property once the object has been clicked to no longer change the values

    // conditional to change players after each round
    if (activePlayer == 1) {
        activePlayer = 0
        console.log(`${activePlayer} active player`)
        gridLength -= 1
        return
    }
    
    activePlayer+=1
    gridLength -= 1
    
    // console.dir(getGridItems)
    console.log(gridLength)

}

function checkGameStatus(){
    console.log(gridLength)
    if (gridLength < 2) {
        document.getElementById('game-over').innerHTML = "GAME OVER \nPLAY AGAIN?"
        document.getElementById('game-over').removeAttribute("style")
    }
}