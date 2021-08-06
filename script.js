
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
let turn = true
const player1 = "X"
const player2 = "O"
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
let drawCount1 = 0
let drawCount2 = 0
let drawCount3 = 0
let drawCount4 = 0
let drawCount5 = 0
let drawCount6 = 0
let drawCount7 = 0
let drawCount8 = 0
let drawCount9 = 0
let mainGameDraw = 0



//for loop for each cell
const cellArray = document.getElementsByClassName("square");
for (let eachCell of cellArray) {
    eachCell.addEventListener('click', cellClicked);
}


function cellClicked(event) {
    mainData = parseInt(event.target.parentElement.parentElement.dataset.cell)
    mainGame = event.target.parentElement.parentElement.children[0]
    dontPush = event.target.parentElement.children[0]
    drawOutcome = event.target.parentElement.parentElement
    console.log(dontPush)
    console.log(mainGame)
   // puts x or o into clicked box
    if (turn === true && event.target.innerHTML === '') {
        event.target.innerHTML = player1
        playerTurn.innerText = 'your turn player two O'
        turn = false;
        
    }else if (turn === false && event.target.innerHTML === '') {
        event.target.innerHTML = player2
        playerTurn.innerText = 'your turn player one X'
        turn = true;
        
    }
    
   // gets info data info form clicked box the pushed into that players array
    if (event.target.innerHTML === player1 && mainData === 0 && dontPush.innerText === ''){
        player1Array1.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount1 = drawCount1 + 1
    }else if(event.target.innerHTML === player2 && mainData === 0 && dontPush.innerText === ''){
        player2Array1.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q' 
        drawCount1 = drawCount1 + 1
    }else if (event.target.innerHTML === player1 && mainData === 1 && dontPush.innerText === ''){
        player1Array2.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount2 = drawCount2 + 1
    }else if(event.target.innerHTML === player2 && mainData === 1 && dontPush.innerText === ''){
        player2Array2.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount2 = drawCount2 + 1
    }else if (event.target.innerHTML === player1 && mainData === 2 && dontPush.innerText === ''){
        player1Array3.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount3 = drawCount3 + 1
    }else if(event.target.innerHTML === player2 && mainData === 2 && dontPush.innerText === ''){
        player2Array3.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount3 = drawCount3 + 1
    }else if (event.target.innerHTML === player1 && mainData === 3 && dontPush.innerText === ''){
        player1Array4.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount4 = drawCount4 + 1
    }else if(event.target.innerHTML === player2 && mainData === 3 && dontPush.innerText === ''){
        player2Array4.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount4 = drawCount4 + 1
    }else if (event.target.innerHTML === player1 && mainData === 4 && dontPush.innerText === ''){
        player1Array5.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount5 = drawCount5 + 1
    }else if(event.target.innerHTML === player2 && mainData === 4 && dontPush.innerText === ''){
        player2Array5.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount5 = drawCount5 + 1
    }else if (event.target.innerHTML === player1 && mainData === 5 && dontPush.innerText === ''){
        player1Array6.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount6 = drawCount6 + 1
    }else if(event.target.innerHTML === player2 && mainData === 5 && dontPush.innerText === ''){
        player2Array6.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount6 = drawCount6 + 1
    }else if (event.target.innerHTML === player1 && mainData === 6 && dontPush.innerText === ''){
        player1Array7.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount7 = drawCount7 + 1
    }else if(event.target.innerHTML === player2 && mainData === 6 && dontPush.innerText === ''){
        player2Array7.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount7 = drawCount7 + 1
    }else if (event.target.innerHTML === player1 && mainData === 7 && dontPush.innerText === ''){
        player1Array8.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount8 = drawCount8 + 1
    }else if(event.target.innerHTML === player2 && mainData === 7 && dontPush.innerText === ''){
        player2Array8.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount8 = drawCount8 + 1
    }else if (event.target.innerHTML === player1 && mainData === 8 && dontPush.innerText === ''){
        player1Array9.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount9 = drawCount9 + 1
    }else if(event.target.innerHTML === player2 && mainData === 8 && dontPush.innerText === ''){
        player2Array9.push(parseInt(event.target.dataset.cell))
        dontPush.innerText = 'q'
        drawCount9 = drawCount9 + 1
    }
    
    // for loop for the winning results
    for (let i = 0; i < winningConditions.length; i++) {
        let winCondition = winningConditions[i];
        
        if (player1Array1.includes(winCondition[0]) && player1Array1.includes(winCondition[1]) && player1Array1.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array1 = []
            player2Array1 = []
            gameOver1 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array1.includes(winCondition[0]) && player2Array1.includes(winCondition[1]) && player2Array1.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array1 = []
            player2Array1 = []
            gameOver1 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }else if (player1Array2.includes(winCondition[0]) && player1Array2.includes(winCondition[1]) && player1Array2.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array2 = []
            player2Array2 = []
            gameOver2 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array2.includes(winCondition[0]) && player2Array2.includes(winCondition[1]) && player2Array2.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array2 = []
            player2Array2 = []
            gameOver2 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }else if (player1Array3.includes(winCondition[0]) && player1Array3.includes(winCondition[1]) && player1Array3.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array3 = []
            player2Array3 = []
            gameOver3 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array3.includes(winCondition[0]) && player2Array3.includes(winCondition[1]) && player2Array3.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array3 = []
            player2Array3 = []
            gameOver3 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }else if (player1Array4.includes(winCondition[0]) && player1Array4.includes(winCondition[1]) && player1Array4.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array4 = []
            player2Array4 = []
            gameOver4 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array4.includes(winCondition[0]) && player2Array4.includes(winCondition[1]) && player2Array4.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array4 = []
            player2Array4 = []
            gameOver4 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }else if (player1Array5.includes(winCondition[0]) && player1Array5.includes(winCondition[1]) && player1Array5.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array5 = []
            player2Array5 = []
            gameOver5 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array5.includes(winCondition[0]) && player2Array5.includes(winCondition[1]) && player2Array5.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array5 = []
            player2Array5 = []
            gameOver5 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }else if (player1Array6.includes(winCondition[0]) && player1Array6.includes(winCondition[1]) && player1Array6.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array6 = []
            player2Array6 = []
            gameOver6 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array6.includes(winCondition[0]) && player2Array6.includes(winCondition[1]) && player2Array6.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array6 = []
            player2Array6 = []
            gameOver6 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }else if (player1Array7.includes(winCondition[0]) && player1Array7.includes(winCondition[1]) && player1Array7.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array7 = []
            player2Array7 = []
            gameOver7 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array7.includes(winCondition[0]) && player2Array7.includes(winCondition[1]) && player2Array7.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array7 = []
            player2Array7 = []
            gameOver7 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }else if (player1Array8.includes(winCondition[0]) && player1Array8.includes(winCondition[1]) && player1Array8.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array8 = []
            player2Array8 = []
            gameOver8 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array8.includes(winCondition[0]) && player2Array8.includes(winCondition[1]) && player2Array8.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array8 = []
            player2Array8 = []
            gameOver8 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }else if (player1Array9.includes(winCondition[0]) && player1Array9.includes(winCondition[1]) && player1Array9.includes(winCondition[2])) {
            
            mainArrayplayerone.push(mainData)
            player1Array9 = []
            player2Array9 = []
            gameOver9 = true
            mainGame.innerHTML = player1
            mainGameDraw = mainGameDraw + 1
        }else if (player2Array9.includes(winCondition[0]) && player2Array9.includes(winCondition[1]) && player2Array9.includes(winCondition[2])) {
            
            mainArrayplayertwo.push(mainData)
            player1Array9 = []
            player2Array9 = []
            gameOver9 = true
            mainGame.innerHTML = player2
            mainGameDraw = mainGameDraw + 1
        }
        
    } //end of loop

    for (let i = 0; i < winningConditions.length; i++) {
        let winCondition = winningConditions[i];
         if (mainArrayplayerone.includes(winCondition[0]) && mainArrayplayerone.includes(winCondition[1]) && mainArrayplayerone.includes(winCondition[2])) {
            winMessage.innerText = 'player one wins!'
            mainGameOver = true
        }else if (mainArrayplayertwo.includes(winCondition[0]) && mainArrayplayertwo.includes(winCondition[1]) && mainArrayplayertwo.includes(winCondition[2])) {
            winMessage.innerText = 'player two wins!'
            mainGameOver = true
        }
    }// end of loop
    
    console.log(drawCount1)

    // draw check
    if (drawCount1 === 9 && gameOver1 === false) {
        drawOutcome.style.background = 'red';
        drawCount1 = 0
        player1Array1 = []
        player2Array1 = []
        mainGameDraw = mainGameDraw + 1
    }else if (drawCount2 === 9 && gameOver2 === false) {
        drawOutcome.style.background = 'red';
        drawCount2 = 0
        player1Array2 = []
        player2Array2 = []
        mainGameDraw = mainGameDraw + 1
    }else if (drawCount3 === 9 && gameOver3 === false) {
        drawOutcome.style.background = 'red';
        drawCount3 = 0
        player1Array3 = []
        player2Array3 = []
        mainGameDraw = mainGameDraw + 1
    }else if (drawCount4 === 9 && gameOver4 === false) {
        drawOutcome.style.background = 'red';
        drawCount4 = 0
        player1Array4 = []
        player2Array4 = []
        mainGameDraw = mainGameDraw + 1
    }else if (drawCount5 === 9 && gameOver5 === false) {
        drawOutcome.style.background = 'red';
        drawCount5 = 0
        player1Array5 = []
        player2Array5 = []
        mainGameDraw = mainGameDraw + 1
    }else if (drawCount6 === 9 && gameOver6 === false) {
        drawOutcome.style.background = 'red';
        drawCount6 = 0
        player1Array6 = []
        player2Array6 = []
        mainGameDraw = mainGameDraw + 1
    }else if (drawCount7 === 9 && gameOver7 === false) {
        drawOutcome.style.background = 'red';
        drawCount7 = 0
        player1Array7 = []
        player2Array7 = []
        mainGameDraw = mainGameDraw + 1
    }else if (drawCount8 === 9 && gameOver8 === false) {
        drawOutcome.style.background = 'red';
        drawCount8 = 0
        player1Array8 = []
        player2Array8 = []
        mainGameDraw = mainGameDraw + 1
    }else if (drawCount9 === 9 && gameOver9 === false) {
        drawOutcome.style.background = 'red';
        drawCount9 = 0
        player1Array9 = []
        player2Array9 = []
        mainGameDraw = mainGameDraw + 1
    }

    if (mainGameDraw === 9 && mainGameOver === false) {
        winMessage.innerText = 'No Body Wins!'
    }
    
    
}// end of function 


// button to clear the board
// const restartButton = document.getElementById("gamerestart")
// restartButton.addEventListener('click', restartGame)
// function restartGame() {
//     for (let eachCell of cellArray){
//          eachCell.innerText = ''
//          player1Array = []
//          player2Array = []
//          document.getElementsByClassName("winMessage")[0].innerText = ''
//          playerTurn.innerText = ''
//          gameOver = false
//          fullBoard = 0
//     }
    
// }







    