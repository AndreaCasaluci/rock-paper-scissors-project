/*let playerSelection;
let weapons=["rock","paper","scissors"];
let round=0;
let playerScore=0;
let computerScore=0;
const weaponbuttons=document.querySelectorAll('.weapon-button');
function getComputerSelection(){
    let computerChoice=weapons[Math.floor(Math.random()*weapons.length)];
    return computerChoice;
};
function playRound(playerSelection, computerSelection){
    let whoWon;
    switch(playerSelection){
        case "rock": if(computerSelection==="rock"){
                         console.log("It's a draw. You both selected Rock.");
                         return whoWon="draw";
                     }
                     else if(computerSelection==="paper"){
                        console.log("You Lose! Paper beats Rock!");
                        return whoWon="computer";
                     }
                     else{
                        console.log("You Win! Rock beats Scissors!");
                        return whoWon="player";
                     }
                     break;
        case "paper": if(computerSelection==="paper"){
                        console.log("It's a draw. You both selected Paper.");
                        return whoWon="draw";
                      }
                      else if(computerSelection==="scissors"){
                        console.log("You Lose! Scissors beats Paper!");
                        return whoWon="computer";
                     }
                     else{
                        console.log("You Win! Paper beats Rock!");
                        return whoWon="player";
                     }
                     break;
        case "scissors": if(computerSelection==="scissors"){
                        console.log("It's a draw. You both selected Scissors.");
                        return whoWon="draw";
                      }
                      else if(computerSelection==="rock"){
                        console.log("You Lose! Rock beats Scissors!");
                        return whoWon="computer";
                     }
                     else{
                        console.log("You Win! Scissors beat Paper!");
                        return whoWon="player";
                     }
                     break;
        default: throw new Error("Failed to determinate the winner. I'm sorry.");
    }
}
function isGameOver(){
    return (playerScore===5 || computerScore===5);
}
function restartGame(){
    if(playerScore>computerScore) alert("You won!");
    else alert("You lost...");
    console.log("Restarting game...");
    playerScore=0;
    computerScore=0;
    round=0;
}
function playGame(){
    let whoWon;
    weaponbuttons.forEach(weapon => {
        weapon.addEventListener('click', () =>{
            if(weapon.classList.contains('rock-button')) {
                playerSelection="rock";
               // whoWon=playRound(playerSelection.toLowerCase(), getComputerSelection());

            }
            else if(weapon.classList.contains('paper-button')) {
                playerSelection="paper";
              //  playRound(playerSelection.toLowerCase(), getComputerSelection());
            }
            else if(weapon.classList.contains('scissors-button')) {
                playerSelection="scissors";
               // playRound(playerSelection.toLowerCase(), getComputerSelection());
            }
            else throw new Error("Unable to pick player choice.");
            whoWon=playRound(playerSelection.toLowerCase(), getComputerSelection());
            if(whoWon==="player") playerScore++;
            else if(whoWon==="computer") computerScore++;
            round++;
            if(isGameOver()){
                restartGame();
            };
            
        });
    });
}
playGame();
*/
let playerSelection;
let computerSelection;
let roundWinner;
let playerScore=0;
let computerScore=0;
let roundNumber=0;
function getComputerSelection(){
    let randomNumber=Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0: return 'ROCK';
        case 1: return 'PAPER';
        case 2: return 'SCISSORS';
        default: throw new Error("Unable to make computer choice! "+randomNumber);
    }
}
function playRound(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
        roundWinner='Tie';
    }
    else if(
        (playerSelection==='ROCK' && computerSelection==='SCISSORS') ||
        (playerSelection==='PAPER' && computerSelection==='ROCK') ||
        (playerSelection==='SCISSORS' && computerSelection==='PAPER')
    ) {
        playerScore++;
        roundWinner='Player';
    }
    else if(
        (computerSelection==='ROCK' && playerSelection==='SCISSORS') ||
        (computerSelection==='PAPER' && playerSelection==='ROCK') ||
        (computerSelection==='SCISSORS' && playerSelection==='PAPER')
    ) {
        computerScore++;
        roundWinner='Computer';
    }
}
const weaponbuttons=document.querySelectorAll('.weapon-button');
const whoWon=document.getElementById('whoWon');
const explanation=document.getElementById('explanation');
const playerSign=document.getElementById('playerSign');
const computerSign=document.getElementById('computerSign');
const playerPoints=document.getElementById('playerPoints');
const computerPoints=document.getElementById('computerPoints');
const roundCounter=document.getElementById('roundCounter');

function isGameOver(){
    if(playerScore>=5 || computerScore>=5){
        updateUI();

        return true;
    } 
    return false;
}
function restartUI(){

    playerSign.textContent="?";
    playerPoints.textContent="Player: 0";
    computerSign.textContent="?";
    computerPoints.textContent="Computer: 0";
    roundCounter.textContent=roundString();
}
function restartGame(){
    computerScore=0;
    playerScore=0;
    roundNumber=0;
    roundWinner="";
    restartUI();
    
}
function switchToEmoji(str){
    switch(str){
        case 'ROCK': return '✊';
        case 'PAPER': return '🖐';
        case 'SCISSORS': return '✌️';
    }
}
function capitalizeLetter(str){
    return (str.charAt(0).toUpperCase()+str.slice(1).toLowerCase())
}
function roundString(){
    if(roundNumber>1) return "Rounds: "+roundNumber;
    else return "Round: "+roundNumber;
}
function updateUI(){
            const roundWinnerText=document.createElement('div');
            const playerScoreInfoText=document.createElement('div');
            const computerScoreInfoText=document.createElement('div');
            roundWinnerText.textContent=" "+roundWinner;
            playerScoreInfoText.textContent=" "+playerScore;
            computerScoreInfoText.textContent=" "+computerScore;
            playerSign.textContent=switchToEmoji(playerSelection);
            computerSign.textContent=switchToEmoji(computerSelection);
            playerPoints.textContent="Player: "+playerScore;
            computerPoints.textContent="Computer: "+computerScore;
            roundCounter.textContent=roundString();
            if(roundWinner==="Player"){
                whoWon.textContent="You won the round!";
                explanation.textContent=capitalizeLetter(playerSelection)+" beats "+computerSelection.toLowerCase();
            }
            else if(roundWinner==="Computer"){
                whoWon.textContent="You lost the round...";
                explanation.textContent=capitalizeLetter(playerSelection)+" is beaten by "+computerSelection.toLowerCase();
            }
            else{
                whoWon.textContent="It's a tie.";
                explanation.textContent=capitalizeLetter(playerSelection)+" ties with "+computerSelection.toLowerCase();
            }

}
function printWinner(){
    if(playerScore>computerScore) alert("You won!");
    else alert("Computer won...");
}
function playGame(){
    weaponbuttons.forEach(weapon => {
        weapon.addEventListener('click', () =>{
            if(weapon.id==='rock-button') {
                playerSelection="ROCK";
                computerSelection=getComputerSelection();
                playRound(playerSelection, computerSelection);

            }
            else if(weapon.id==='paper-button') {
                playerSelection="PAPER";
                computerSelection=getComputerSelection();
                playRound(playerSelection, computerSelection);
            }
            else if(weapon.id==='scissors-button') {
                playerSelection="SCISSORS";
                computerSelection=getComputerSelection();
                playRound(playerSelection, computerSelection);
            }
            else throw new Error("Unable to pick player choice.");
            roundNumber++;
            console.log(roundWinner);
            updateUI();
            if(isGameOver()){
             //   printWinner();
                restartGame();
            };
            
        });
    });
}
playGame();