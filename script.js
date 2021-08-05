
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
let mainArrayplayerone = []
let mainArrayplayertwo = []
let player1Array1 = []
let player2Array1 = []
let player1Array2 = []
let player2Array2 = []
let player1Array3 = []
let player2Array3 = []
let player1Array4 = []
let player2Array4 = []
let player1Array5 = []
let player2Array5 = []
let player1Array6 = []
let player2Array6 = []
let player1Array7 = []
let player2Array7 = []
let player1Array8 = []
let player2Array8 = []
let player1Array9 = []
let player2Array9 = []
let playerTurn = document.getElementById("playerTurn")
let winMessage = document.getElementsByClassName("winMessage")[0]
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
    mainData = parseInt(event.target.parentElement.parentElement.dataset.cell)
    if (mainData === 0) {
        console.log('yes')
    }
    

   // puts x or o into clicked box
    if (turn === true && event.target.innerHTML === '') {
        event.target.innerHTML = player1
        playerTurn.innerText = 'your turn player two'
        turn = false;
        //fullBoard = fullBoard + 1
    }else if (turn === false && event.target.innerHTML === '') {
        event.target.innerHTML = player2
        playerTurn.innerText = 'your turn player one'
        turn = true;
        //fullBoard = fullBoard + 1
    }
    // console.log(fullBoard)
   // gets info data info form clicked box the pushed into that players array
    if (event.target.innerHTML === player1 && mainData === 0){
        player1Array1.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 0){
        player2Array1.push(parseInt(event.target.dataset.cell))
    }else if (event.target.innerHTML === player1 && mainData === 1){
        player1Array2.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 1){
        player2Array2.push(parseInt(event.target.dataset.cell))
    }else if (event.target.innerHTML === player1 && mainData === 2){
        player1Array3.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 2){
        player2Array3.push(parseInt(event.target.dataset.cell))
    }else if (event.target.innerHTML === player1 && mainData === 3){
        player1Array4.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 3){
        player2Array4.push(parseInt(event.target.dataset.cell))
    }else if (event.target.innerHTML === player1 && mainData === 4){
        player1Array5.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 4){
        player2Array5.push(parseInt(event.target.dataset.cell))
    }else if (event.target.innerHTML === player1 && mainData === 5){
        player1Array6.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 5){
        player2Array6.push(parseInt(event.target.dataset.cell))
    }else if (event.target.innerHTML === player1 && mainData === 6){
        player1Array7.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 6){
        player2Array7.push(parseInt(event.target.dataset.cell))
    }else if (event.target.innerHTML === player1 && mainData === 7){
        player1Array8.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 7){
        player2Array8.push(parseInt(event.target.dataset.cell))
    }else if (event.target.innerHTML === player1 && mainData === 8){
        player1Array9.push(parseInt(event.target.dataset.cell))
    }else if(event.target.innerHTML === player2 && mainData === 8){
        player2Array9.push(parseInt(event.target.dataset.cell))
    }
    
    // for loop for the winning results
    for (let i = 0; i < winningConditions.length; i++) {
        let winCondition = winningConditions[i];
        
        if (player1Array1.includes(winCondition[0]) && player1Array1.includes(winCondition[1]) && player1Array1.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array1 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array1.includes(winCondition[0]) && player2Array1.includes(winCondition[1]) && player2Array1.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array1 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }else if (player1Array2.includes(winCondition[0]) && player1Array2.includes(winCondition[1]) && player1Array2.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array2 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array2.includes(winCondition[0]) && player2Array2.includes(winCondition[1]) && player2Array2.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array2 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }else if (player1Array3.includes(winCondition[0]) && player1Array3.includes(winCondition[1]) && player1Array3.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array3 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array3.includes(winCondition[0]) && player2Array3.includes(winCondition[1]) && player2Array3.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array3 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }else if (player1Array4.includes(winCondition[0]) && player1Array4.includes(winCondition[1]) && player1Array4.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array4 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array4.includes(winCondition[0]) && player2Array4.includes(winCondition[1]) && player2Array4.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array4 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }else if (player1Array5.includes(winCondition[0]) && player1Array5.includes(winCondition[1]) && player1Array5.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array5 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array5.includes(winCondition[0]) && player2Array5.includes(winCondition[1]) && player2Array5.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array5 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }else if (player1Array6.includes(winCondition[0]) && player1Array6.includes(winCondition[1]) && player1Array6.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array6 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array6.includes(winCondition[0]) && player2Array6.includes(winCondition[1]) && player2Array6.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array6 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }else if (player1Array7.includes(winCondition[0]) && player1Array7.includes(winCondition[1]) && player1Array7.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array7 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array7.includes(winCondition[0]) && player2Array7.includes(winCondition[1]) && player2Array7.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array7 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }else if (player1Array8.includes(winCondition[0]) && player1Array8.includes(winCondition[1]) && player1Array8.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array8 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array8.includes(winCondition[0]) && player2Array8.includes(winCondition[1]) && player2Array8.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array8 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }else if (player1Array9.includes(winCondition[0]) && player1Array9.includes(winCondition[1]) && player1Array9.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array9 = []
            //gameOver = true
            mainGame.innerHTML = player1
        }else if (player2Array9.includes(winCondition[0]) && player2Array9.includes(winCondition[1]) && player2Array9.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array9 = []
            //gameOver = true
            mainGame.innerHTML = player2
        }
        if (mainArrayplayerone.includes(winCondition[0]) && mainArrayplayerone.includes(winCondition[1]) && mainArrayplayerone.includes(winCondition[2])) {
            winMessage.innerText = 'player one wins'
        }else if (mainArrayplayertwo.includes(winCondition[0]) && mainArrayplayertwo.includes(winCondition[1]) && mainArrayplayertwo.includes(winCondition[2])) {
            winMessage.innerText = 'player two wins'
        }
    }

    if (fullBoard === 9 && gameOver === false) {
        winMessage.innerText = 'its a draw'
    }
    mainGame = event.target.parentElement.parentElement.children[0]
    //console.log(fullBoard)
    //console.log(mainGame)
    // console.log(player1Array1)
    // console.log(player2Array1)
    // console.log(player1Array2)
    // console.log(player2Array2)
    console.log(mainArrayplayerone, 'mainArrayplayerone')
    console.log(mainArrayplayertwo, 'mainArrayplayertwo')
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







    