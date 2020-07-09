// import functions and grab DOM elements
import { generateRandomThrow, calculateWin } from './RpsUtils.js';
const submitButton = document.querySelector('#play-button');
const resetButton = document.querySelector('#reset-button');
const currentState = document.querySelector('#current');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const total = document.querySelector('#total');

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

});

