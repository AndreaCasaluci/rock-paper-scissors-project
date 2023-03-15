let playerSelection;
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
