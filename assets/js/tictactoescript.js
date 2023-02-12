let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let opponentPlayer = O_TEXT
let spaces = Array(9).fill(null)
let playCount = 0
let hasEnded = false

const startGame = () => {
    playCount = 0
    currentPlayer = X_TEXT
    opponentPlayer = O_TEXT
    restartBtn.classList.toggle('paused')
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function checkHalfEmpty(spaces){
    let count = 0;
    for(let i = 0; i < 9; i++){
        if(spaces[i]!=null)
        count++;
    }

    if(count <= 9)
    return true;
    else
    return false;
}
function boxClicked(e) {
    const id = e.target.id
   


    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer   
        playCount++;
        if(playCount !== 9)
        playerText.innerHTML = `${opponentPlayer} Plays!`
        if(playerHasWon() !== false){
            playerText.innerHTML = `${currentPlayer} has won!`
            hasEnded = true
            restartBtn.classList.toggle('paused')
            let winning_blocks = playerHasWon()
            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }
        if(playCount===9){
            hasEnded = true
            playerText.innerHTML = `The game is a draw!`
            restartBtn.classList.toggle("paused");
            return 
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
        opponentPlayer = opponentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }

    
    
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', function(){

   
    if(checkHalfEmpty(spaces) === true && hasEnded === false){
        console.log(checkHalfEmpty(spaces))
        restart();
        return
    }
    restartBtn.classList.toggle("paused");
    restart();
});


function restart() {
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'
    playCount = 0
    hasEnded = false
    currentPlayer = X_TEXT
    opponentPlayer = O_TEXT
}

startGame()