// import functions and grab DOM elements

const submitButton = document.querySelector('#play-button');
const current = document.querySelector('#current');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const total = document.querySelector('#total');

// initialize state
let winsData = 0;

let totalTries = 0;

let drawAmount = 0;

let resetAmount = 0;

let randomThrow = 0;


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => { 
    totalTries++;
    const userInput = document.querySelector('input:checked');
    const userGuess = userInput.value;
    
//created user input and total number if "tries"
    const randomNumber = Math.ceil(Math.random() * 3);
//generated random number from 1 to 3 

    
});