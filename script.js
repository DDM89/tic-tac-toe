
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
let gameOver1 = false
let gameOver2 = false
let gameOver3 = false
let gameOver4 = false
let gameOver5 = false
let gameOver6 = false
let gameOver7 = false
let gameOver8 = false
let gameOver9 = false

let mainGameOver = false


//for loop for each cell
const cellArray = document.getElementsByClassName("square");
for (let eachCell of cellArray) {
    eachCell.addEventListener('click', cellClicked);
}


function cellClicked(event) {
    mainData = parseInt(event.target.parentElement.parentElement.dataset.cell)
    // if (mainData === 0) {
    //     console.log('yes')
    // }
    

   // puts x or o into clicked box
    if (turn === true && event.target.innerHTML === '') {
        event.target.innerHTML = player1
        playerTurn.innerText = 'your turn player two'
        turn = false;
        //fullBoard1 = fullBoard1 + 1
    }else if (turn === false && event.target.innerHTML === '') {
        event.target.innerHTML = player2
        playerTurn.innerText = 'your turn player one'
        turn = true;
        //fullBoard1 = fullBoard1 + 1
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
            gameOver1 = true
            mainGame.innerHTML = player1
        }else if (player2Array1.includes(winCondition[0]) && player2Array1.includes(winCondition[1]) && player2Array1.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array1 = []
            gameOver1 = true
            mainGame.innerHTML = player2
        }else if (player1Array2.includes(winCondition[0]) && player1Array2.includes(winCondition[1]) && player1Array2.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array2 = []
            gameOver2 = true
            mainGame.innerHTML = player1
        }else if (player2Array2.includes(winCondition[0]) && player2Array2.includes(winCondition[1]) && player2Array2.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array2 = []
            gameOver2 = true
            mainGame.innerHTML = player2
        }else if (player1Array3.includes(winCondition[0]) && player1Array3.includes(winCondition[1]) && player1Array3.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array3 = []
            gameOver3 = true
            mainGame.innerHTML = player1
        }else if (player2Array3.includes(winCondition[0]) && player2Array3.includes(winCondition[1]) && player2Array3.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array3 = []
            gameOver3 = true
            mainGame.innerHTML = player2
        }else if (player1Array4.includes(winCondition[0]) && player1Array4.includes(winCondition[1]) && player1Array4.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array4 = []
            gameOver4 = true
            mainGame.innerHTML = player1
        }else if (player2Array4.includes(winCondition[0]) && player2Array4.includes(winCondition[1]) && player2Array4.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array4 = []
            gameOver4 = true
            mainGame.innerHTML = player2
        }else if (player1Array5.includes(winCondition[0]) && player1Array5.includes(winCondition[1]) && player1Array5.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array5 = []
            gameOver5 = true
            mainGame.innerHTML = player1
        }else if (player2Array5.includes(winCondition[0]) && player2Array5.includes(winCondition[1]) && player2Array5.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array5 = []
            gameOver5 = true
            mainGame.innerHTML = player2
        }else if (player1Array6.includes(winCondition[0]) && player1Array6.includes(winCondition[1]) && player1Array6.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array6 = []
            gameOver6 = true
            mainGame.innerHTML = player1
        }else if (player2Array6.includes(winCondition[0]) && player2Array6.includes(winCondition[1]) && player2Array6.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array6 = []
            gameOver6 = true
            mainGame.innerHTML = player2
        }else if (player1Array7.includes(winCondition[0]) && player1Array7.includes(winCondition[1]) && player1Array7.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array7 = []
            gameOver7 = true
            mainGame.innerHTML = player1
        }else if (player2Array7.includes(winCondition[0]) && player2Array7.includes(winCondition[1]) && player2Array7.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array7 = []
            gameOver7 = true
            mainGame.innerHTML = player2
        }else if (player1Array8.includes(winCondition[0]) && player1Array8.includes(winCondition[1]) && player1Array8.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array8 = []
            gameOver8 = true
            mainGame.innerHTML = player1
        }else if (player2Array8.includes(winCondition[0]) && player2Array8.includes(winCondition[1]) && player2Array8.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array8 = []
            gameOver8 = true
            mainGame.innerHTML = player2
        }else if (player1Array9.includes(winCondition[0]) && player1Array9.includes(winCondition[1]) && player1Array9.includes(winCondition[2])) {
            //winMessage.innerText = 'player one wins'
            mainArrayplayerone.push(mainData)
            player1Array9 = []
            gameOver9 = true
            mainGame.innerHTML = player1
        }else if (player2Array9.includes(winCondition[0]) && player2Array9.includes(winCondition[1]) && player2Array9.includes(winCondition[2])) {
            //winMessage.innerText = 'player two wins'
            mainArrayplayertwo.push(mainData)
            player2Array9 = []
            gameOver9 = true
            mainGame.innerHTML = player2
        }else if (mainArrayplayerone.includes(winCondition[0]) && mainArrayplayerone.includes(winCondition[1]) && mainArrayplayerone.includes(winCondition[2])) {
            winMessage.innerText = 'player one wins'
        }else if (mainArrayplayertwo.includes(winCondition[0]) && mainArrayplayertwo.includes(winCondition[1]) && mainArrayplayertwo.includes(winCondition[2])) {
            winMessage.innerText = 'player two wins'
        }
    } //end of loop

    for (let i = 0; i < winningConditions.length; i++) {
        let winCondition = winningConditions[i];
         if (mainArrayplayerone.includes(winCondition[0]) && mainArrayplayerone.includes(winCondition[1]) && mainArrayplayerone.includes(winCondition[2])) {
            winMessage.innerText = 'player one wins'
            mainGameOver = true
        }else if (mainArrayplayertwo.includes(winCondition[0]) && mainArrayplayertwo.includes(winCondition[1]) && mainArrayplayertwo.includes(winCondition[2])) {
            winMessage.innerText = 'player two wins'
            mainGameOver = true
        }
    }// end of loop


    // draw check
    if (player1Array1.length === 5 || player2Array1.length === 5 && gameOver1 === false) {
        drawOutcome.style.background = 'red';
        player1Array1 = []
        player2Array1 = []
    }else if (player1Array2.length === 5 || player2Array2.length === 5 && gameOver2 === false) {
        drawOutcome.style.background = 'red';
        player1Array2 = []
        player2Array2 = []
    }else if (player1Array3.length === 5 || player2Array3.length === 5 && gameOver3 === false) {
        drawOutcome.style.background = 'red';
        player1Array3 = []
        player2Array3 = []
    }else if (player1Array4.length === 5 || player2Array4.length === 5 && gameOver4 === false) {
        drawOutcome.style.background = 'red';
        player1Array4 = []
        player2Array4 = []
    }else if (player1Array5.length === 5 || player2Array5.length === 5 && gameOver5 === false) {
        drawOutcome.style.background = 'red';
        player1Array5 = []
        player2Array5 = []
    }else if (player1Array6.length === 5 || player2Array6.length === 5 && gameOver6 === false) {
        drawOutcome.style.background = 'red';
        player1Array6 = []
        player2Array6 = []
    }else if (player1Array7.length === 5 || player2Array7.length === 5 && gameOver7 === false) {
        drawOutcome.style.background = 'red';
        player1Array7 = []
        player2Array7 = []
    }else if (player1Array8.length === 5 || player2Array8.length === 5 && gameOver8 === false) {
        drawOutcome.style.background = 'red';
        player1Array9 = []
        player2Array9 = []
    }else if (player1Array9.length === 5 || player2Array9.length === 5 && gameOver9 === false) {
        drawOutcome.style.background = 'red';
        player1Array9 = []
        player2Array9 = []
    }

    if (mainArrayplayerone.length === 5 || mainArrayplayertwo.lenght === 5 && mainGameOver === false) {
        winMessage.innerText = 'No Boddy Wins'
    }

    
    
    mainGame = event.target.parentElement.parentElement.children[0]
    drawOutcome = event.target.parentElement.parentElement
    
    //console.log(drawOutcome)
    //console.log(mainGame)
    // console.log(player1Array1)
    // console.log(player2Array1)
    // console.log(player1Array2)
    // console.log(player2Array2)
    //console.log(mainArrayplayerone, 'mainArrayplayerone')
    //console.log(mainArrayplayertwo, 'mainArrayplayertwo')
}// end of function 


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







    