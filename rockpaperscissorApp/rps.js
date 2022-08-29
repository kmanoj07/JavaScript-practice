//random select an element from an array
// const fruits = ['banana', 'apple', 'orange', 'pear', 'grapes', 'pineapple'];

// const randomFruit = (fruits)=> {
//     let randomNum = Math.floor(Math.random() * fruits.length);
//     console.log(randomNum);
//     return fruits[randomNum];
// }

// console.log(randomFruit(fruits));


//In the same manner computer will choose the random from the rock, paper, scissor array
//random select an element from an array
// const cmpPick = ['rock', 'paper', 'scissor'];

// const randomCmpPick = (cmpPick)=> {
//     let randomNum = Math.floor(Math.random() * cmpPick.length);
//     console.log(randomNum);
//     return cmpPick[randomNum];
// }

// console.log(randomCmpPick(cmpPick));

// const weatherScorer = (weather) => {
//     let score = 0;
//     if(weather == 'rain'){
//         score = 1;
//     } else if(weather == 'sunny') {
//         score = -1;
//     } else {
//         score = 0;
//     }
//     return score;
// }

// console.log(weatherScorer('overcast'));


//score initial
const totalScore = {
    computerScore: 0, 
    playerScore: 0
};

//Get computer choice
//return the random choice
function getComputerChoice(){
    const rpdChoice = ['Rock', 'Paper', 'Scissors'];
    const rndNo =  Math.floor((Math.random() * rpdChoice.length));
    return rpdChoice[rndNo];
}

// console.log(getComputerChoice());

//get result
function getResult(playerChoice, computerChoice) {
    let score;
    if(playerChoice == computerChoice){
        score = 0; //draw
    } else if(playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1;
    } else if(playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1;
    }  else if(playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1;
    } else {
        score = -1;
    }
    return score;
}

console.log(getResult('Rock', getComputerChoice()));

//play button
function palyGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton');
    //console.log(rpsButtons);
    rpsButtons.forEach((rpsButton)=> {
        rpsButton.onclick = () => onClickRpsBtn(rpsButton.value);
    });

    const endGame = document.getElementById('endGameButton');
    endGame.onclick = () => endMyGame(totalScore);
}

function onClickRpsBtn(playerChoice) {
    console.log({playerChoice});
    const computerChoice = getComputerChoice();
    console.log({computerChoice});
    const score = getResult(playerChoice, computerChoice);
    console.log(score);
    if(score == 1) {
        totalScore['playerScore'] = totalScore['playerScore'] + score;
    } else if(score == -1){
        totalScore['computerScore'] = totalScore['computerScore'] + 1;
    }
    console.log(totalScore);
    showResult(score, playerChoice, computerChoice);
}

function showResult(score, playerChoice, computerChoice){
    const resultDiv = document.getElementById('result');
    const handDiv = document.getElementById('hands');
    const palyerScore = document.getElementById('player-score');

    if(score == -1){
        resultDiv.innerText = 'You Lose!';
    } else if(score == 0) {
        resultDiv.innerText = 'It\'s a tie!';
    } else if(score == 1) {
        resultDiv.innerText = 'You Won!';
    }

    handDiv.innerText = `${playerChoice} V/S ${computerChoice}`;
    palyerScore.innerText = `Your score ${totalScore['playerScore']} /  Computer Score: ${totalScore['computerScore']}` ;
}

function endMyGame(totalScore) {
    console.log('endGame');
    totalScore['playerScore'] = 0;
    totalScore['computerScore'] = 0;
    console.log(totalScore);

    const resultDiv = document.getElementById('result');
    const handDiv = document.getElementById('hands');
    const palyerScore = document.getElementById('player-score');

    resultDiv.innerText = '';
    handDiv.innerText = '';
    palyerScore.innerText = '';
}
palyGame();