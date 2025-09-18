// Initialize score
let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties:0
}

function play(playerMove) {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber < 2/3){
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    let result = '';
    if (playerMove === computerMove) {
        result = 'Tie.';
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'You Win!';
    } else {
        result = 'You Lose!';
    }

    // Update the score with the result
    updateScores(result);

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`);
}

function updateScores(result) {
    // Update the shared score object
    if (result === 'You Win!') {
        score.Wins += 1;
    } else if (result === 'You Lose!') {
        score.Losses += 1;
    } else if (result === 'Tie.') {
        score.Ties += 1;
    }
}

function records(action) {
    if (action === 'reset') {
        // Reset the shared score object
        score = {Wins: 0, Losses: 0, Ties: 0};
        localStorage.removeItem('score')
        alert('Scores have been reset to 0.');
        return;
    }
}

