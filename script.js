
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


let playerTurn = document.getElementById("playerTurn")
let winMessage = document.getElementsByClassName("winMessage")[0]
let player1Array = []
let player2Array = []
var turn = true
let player1 = "X"
let player2 = "O"
let gameOver = false
let fullBoard = 0

//for loop for each cell
const cellArray = document.getElementsByClassName("square");
for (let eachCell of cellArray) {
    eachCell.addEventListener('click', cellClicked);
}


function cellClicked(event) {
    
    
   // puts x or o into clicked box
    if (turn === true && event.target.innerHTML === '') {
        event.target.innerHTML = player1
        playerTurn.innerText = 'your turn player two'
        turn = false;
        fullBoard = fullBoard + 1
    }else if (turn === false && event.target.innerHTML === '') {
        event.target.innerHTML = player2
        playerTurn.innerText = 'your turn player one'
        turn = true;
        fullBoard = fullBoard + 1
    }
    console.log(fullBoard)
   // gets info data info form clicked box the pushed into that players array
    if (event.target.innerHTML === player1){
        player1Array.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2){
        player2Array.push(parseInt(event.target.dataset.cell))
    }
    
    // for loop for the winning results
    for (let i = 0; i < winningConditions.length; i++) {
        let winCondition = winningConditions[i];
        
        if (player1Array.includes(winCondition[0]) && player1Array.includes(winCondition[1]) && player1Array.includes(winCondition[2])) {
            winMessage.innerText = 'player one wins'
            gameOver = true
            mainGame.innerText = 'x'
        }else if (player2Array.includes(winCondition[0]) && player2Array.includes(winCondition[1]) && player2Array.includes(winCondition[2])) {
            winMessage.innerText = 'player two wins'
            gameOver = true
        }

    }

    if (fullBoard === 9 && gameOver === false) {
        winMessage.innerText = 'its a draw'
    }
    mainGame = event.target.parentElement.parentElement.children[0]
    console.log(mainGame)
    
}


// button to clear the board
const restartButton = document.getElementById("gamerestart")
restartButton.addEventListener('click', restartGame)
function restartGame() {
    for (let eachCell of cellArray){
         eachCell.innerText = ''
         player1Array = []
         player2Array = []
         document.getElementsByClassName("winMessage")[0].innerText = ''
         playerTurn.innerText = ''
         gameOver = false
         fullBoard = 0
    }
    
}







    