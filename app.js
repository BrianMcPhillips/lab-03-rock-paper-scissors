// import functions and grab DOM elements
import { generateRandomThrow, calculateWin } from './RpsUtils.js';
const submitButton = document.querySelector('#play-button');
const resetButton = document.querySelector('#reset-button');
const currentState = document.querySelector('#current');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const draw = document.querySelector('#draw');
const total = document.querySelector('#total');
const reset = document.querySelector('#reset');

// initialize state
let winsData = 0;

let loseData = 0;

let totalTries = 0;

let drawData = 0;

let resetAmount = 0;



// set event listeners to update state and DOM
submitButton.addEventListener('click', () => { 
    totalTries++;
    const userInput = document.querySelector('input:checked');
    const playerGuess = userInput.value;
    //console.log(playerGuess);

//created user input and total number if "tries"
    let computerGuess = generateRandomThrow();  
    
    let gamePlay = calculateWin(playerGuess, computerGuess);

    console.log(gamePlay);
    
    if (gamePlay === 'win') {currentState.textContent = 'You win'; winsData++;}

    if (gamePlay === 'lose') {currentState.textContent = 'You lose'; loseData++;}

    if (gamePlay === 'draw') {currentState.textContent = 'Draw'; drawData++;} 

    wins.textContent = 'Wins: ' + winsData;
    losses.textContent = 'Losses ' + loseData;
    draw.textContent = 'Draws ' + drawData;
    total.textContent = 'Total plays ' + totalTries;
});

//function resetTheGame() {
    //const doReset = window.confirm('Are you sure you want to lose your score?');

    //if (doReset === true) {
        
resetButton.addEventListener('click', () => {
    
    resetAmount++;
    totalTries = 0;
    winsData = 0;
    loseData = 0;
    drawData = 0;

    wins.textContent = 'Wins: 0'; 
    losses.textContent = 'Losses ' + loseData;
    draw.textContent = 'Draws ' + drawData;
    total.textContent = 'Total plays ' + totalTries;
    reset.textContent = resetAmount;
    //}

    
 

    
});
