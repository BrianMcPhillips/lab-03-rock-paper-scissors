

// import functions and grab DOM elements
import { generateRandomThrow, calculateWin } from './RpsUtils.js';
const submitButton = document.querySelector('#play-button');
const currentState = document.querySelector('#current');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const total = document.querySelector('#total');

// initialize state
let winsData = 0;

let loseData =0;

let totalTries = 0;

let drawAmount = 0;

let resetAmount = 0;

let randomThrow = ' ';


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => { 
    totalTries++;
    const userInput = document.querySelector('input:checked');
    const userGuess = userInput.value;
    
//created user input and total number if "tries"
    

 



    
});