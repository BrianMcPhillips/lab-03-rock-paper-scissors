// import functions and grab DOM elements
const userInput = document.querySelector('input:checked');
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
