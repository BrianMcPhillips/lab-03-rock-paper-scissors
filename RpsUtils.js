export function generateRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);
    //generated random number from 1 to 3 
    if (randomNumber === 1) { return 'Rock';}  
    if (randomNumber === 2) { return 'Paper';}
    if (randomNumber === 3) { return 'Scissors';}
}

export function calculateWin(computer, player) {
    if (computer === 'Paper' && player === 'Rock') return 'lose';
    if (computer === 'Rock' && player === 'Scissors') return 'lose';
    if (computer === 'Scissors' && player === 'Paper') return 'lose';
    if (computer === 'Paper' && player === 'Scissors') return 'win';
    if (computer === 'Rock' && player === 'Paper') return 'win';
    if (computer === 'Scissors' && player === 'Rock') return 'win';
    if (computer === 'Paper' && player === 'Paper') return 'draw';
    if (computer === 'Scissors' && player === 'Scissors') return 'draw';
    if (computer === 'Rock' && player === 'Rock') return 'draw';
}