    function play(playerMove) {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3) {
            computerMove = 'Rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove = 'Paper';
        } else {
            computerMove = 'Scissors';
        }

        console.log(computerMove);

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

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
    }