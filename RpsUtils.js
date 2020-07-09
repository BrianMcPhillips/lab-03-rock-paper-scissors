export function generateRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);
    //generated random number from 1 to 3 
    if (randomNumber === 1) { return 'rock';}  
    if (randomNumber === 2) { return 'paper';}
    if (randomNumber === 3) { return 'scissors';}
}

export function calculateWin(computer, player) {
    if (computer === 'paper' && player === 'rock') return 'lose';
    if (computer === 'rock' && player === 'scissors') return 'lose';
    if (computer === 'scissors' && player === 'paper') return 'lose';
    if (computer === 'paper' && player === 'scissors') return 'win';
    if (computer === 'rock' && player === 'paper') return 'win';
    if (computer === 'scissors' && player === 'rock') return 'win';
    if (computer === 'paper' && player === 'paper') return 'draw';
    if (computer === 'scissors' && player === 'scissors') return 'draw';
    if (computer === 'rock' && player === 'rock') return 'draw';
}