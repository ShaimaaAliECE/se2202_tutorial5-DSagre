let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var startBtn = document.createElement("button");
var startLbl = document.createElement("h2");
startBtn.innerText = "Start New Game";
document.body.appendChild(startBtn);
startBtn.addEventListener('click',(initialEvent) => {initialEvent.target.disabled= true;
    initialEvent.target.hidden= true;});

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerInd = document.querySelector('b');
let playerTxt = 'Next Player: ';
playerInd.innerText = playerTxt;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard

   for (let i=1; i< 10; i++) {
    let btn = document.createElement("button");
    btn.innerHTML= "[  ]";
   document.getElementById("c"+[i]).appendChild(btn);
   }
}
    
       

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   let clickedBtn= event.target;

    if( clickedBtn.innerText === '[ ]') {
        clickedBtn.innerText = nextPlayer;
        clickedBtn.disabled = true;
        if (nextPlayer === 'X') {
            nextPlayer = 'O';
        } else { nextPlayer = 'X';}
        playerInd.innerText = playerTxt + nextPlayer;
    }
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl');
        var newHead = document.createElement('h1');
        newHead.innerText = "Game Over!"
        lbl.appendChild(newHead);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let clicked = false;
     let counter= 0;
    for(let i=0; i<btns.length; i++) {
        if(btns[i].disabled === true) {
            counter++;
        } 
    }
    if (counter ===10) {
        clicked = true;
    }
    return clicked;
}
