function startNewGame() {
    // Reset the game board after every iteration
    resetGameBoard()

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
        activePlayer = 2
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
    console.log(gridLength)
    e.target.innerHTML = players[activePlayer -1].symbol
    e.target.classList.add('disabled')      // add the disabled class once a button is clicked to change its CSS properties
    
    // console.dir(e.target)
    e.target.removeEventListener('click', selectGrid)   // removes the "addeventlistener" property once the object has been clicked to no longer change the values

    // Get the rows and columns for the gameboard
    const selectedField = e.target
    const selectCol = selectedField.dataset.col -1
    const selectRow = selectedField.dataset.row - 1

    // console.log(getGridItems[0].innerHTML)
    // conditional to change players after each round
    if (activePlayer == 2) {
        console.log(activePlayer)
        getGameBoard[selectRow][selectCol] = activePlayer
        checkGameStatus()
        activePlayer = 1
        gridLength -= 1
        
        // console.log(getGameBoard)
        return
    }
    
    getGameBoard[selectRow][selectCol] = activePlayer
    console.log(getGameBoard)
    
    // Section to alternate player and reduce grid by one after toggle
    gridLength -= 1

    // console.dir(getGridItems)
    checkGameStatus()

    activePlayer+=1
}

function checkGameStatus(event){
    
    if (gridLength <= 1) {
        gameOverSign.innerHTML = "GAME OVER \nPLAY AGAIN?"
        document.getElementById('game-over').removeAttribute("style")
    }

    // Check the rows for win
    for (let i = 0; i < 3; i++) {
        if (getGameBoard[i][0] !== 0 && getGameBoard[i][0] === getGameBoard[i][1] && getGameBoard[i][1] === getGameBoard[i][2] && getGameBoard[i][0] === getGameBoard[i][2]) {
            alert(`Player ${activePlayer}, ${players[activePlayer - 1].name} wins!`)
            disableBoard()
            resetGameBoard()
        }
    }

    // check the cols for win
    for (let j =0; j < 3; j++) {
        if (getGameBoard[0][j] !== 0 && getGameBoard[0][j] === getGameBoard[1][j] && getGameBoard[1][j] === getGameBoard[2][j] && getGameBoard[0][j] === getGameBoard[2][j]){
            alert(`Player ${activePlayer}, ${players[activePlayer - 1].name} wins!`)
            disableBoard()
            resetGameBoard()
        }
    }

    // check diagnols for win
    if (getGameBoard[0][0] !== 0 && getGameBoard[0][0] === getGameBoard[1][1] && getGameBoard[1][1] === getGameBoard[2][2]) {
        alert(`Player ${activePlayer}, ${players[activePlayer - 1].name} wins!`)
        disableBoard()
        resetGameBoard(); // Return the winner (X or O)
      }
      if (getGameBoard[0][2] !== 0 && getGameBoard[0][2] === getGameBoard[1][1] && getGameBoard[1][1] === getGameBoard[2][0]) {
            alert(`Player ${activePlayer}, ${players[activePlayer - 1].name} wins!`)
            disableBoard()
            resetGameBoard(); // Return the winner (X or O)
      }

    
}

function resetGameBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            getGameBoard[i][j] = 0
        }
    }
}

function disableBoard() {
    for (const getGridItem of getGridItems) {
        getGridItem.classList.add('disabled')
        getGridItem.removeEventListener('click', selectGrid)
    }
}