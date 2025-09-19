// 🎯 Initialize score from localStorage or set default values
let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties:0
}

// 🎮 Main game function
function play(playerMove) {
    // 🎲 Generate random number for computer's move
    const randomNumber = Math.random();
    let computerMove = '';

    // 🤖 Determine computer's move based on random number
    if (randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber < 2/3){
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    // ⚔️ Determine game result
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

    // 📊 Update the score with the result
    updateScores(result);

    // 💾 Save updated score to localStorage
    localStorage.setItem('score', JSON.stringify(score));

    // 🎪 Show result alert with updated scores

    renderResult(playerMove, computerMove, result);
}

// 📈 Update score based on game result
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

// 🔄 Reset score records
function records(action) {
    if (action === 'reset') {
        // Reset the shared score object
        score = {Wins: 0, Losses: 0, Ties: 0};
        localStorage.removeItem('score')
        alert('Scores have been reset to 0.');
        // Clear result area
        renderResult('', '', 'Scores have been reset.');
        return;
    }
}



// Render the result into the `.js-score` element
function renderResult(playerMove, computerMove, resultText) {
    const el = document.querySelector('.js-score');
    if (!el) return;

    if (!playerMove && !computerMove && resultText) {
        // display standalone messages (like reset)
        el.innerText = resultText;
        return;
    }

    el.innerText = `You picked ${playerMove}. Computer picked ${computerMove}. ${resultText} \n Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

// Toggle show/hide for result area
function initResultToggle() {
    const toggle = document.getElementById('toggle-result');
    const el = document.querySelector('.js-score');
    if (!toggle || !el) return;

    // start hidden if empty
    if (!el.innerText.trim()) {
        el.style.display = 'none';
        toggle.innerText = 'Show Result';
    }

    toggle.addEventListener('click', () => {
        if (el.style.display === 'none' || getComputedStyle(el).display === 'none') {
            el.style.display = '';
            toggle.innerText = 'Hide Result';
        } else {
            el.style.display = 'none';
            toggle.innerText = 'Show Result';
        }
    });
}

// Initialize toggle when script loads
initResultToggle();

