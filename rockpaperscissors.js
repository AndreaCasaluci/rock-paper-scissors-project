function getComputerSelection(){
    let choice=Math.floor(Math.random()*3)+1;
    switch(choice){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
        default: throw new Error("Error: the computer couldn't choose correctly...");
    }
};
function getPlayerSelection(){
    let playerSelection=prompt("Please, make your choice between 'Rock', 'Paper' and 'Scissors'");
    let playerSelectionCaseInsensitive=playerSelection.toLowerCase();
    if(playerSelectionCaseInsensitive!="rock" && playerSelectionCaseInsensitive!="paper" && playerSelectionCaseInsensitive!="scissors"){
        throw new Error("Unable to recognize your choice.");
    }
    return playerSelectionCaseInsensitive;
}
function playRound(playerSelection, computerSelection){
    let whoWon;
    switch(playerSelection){
        case "rock": if(computerSelection==="Rock"){
                         console.log("It's a draw. You both selected Rock.");
                         return whoWon="draw";
                     }
                     else if(computerSelection==="Paper"){
                        console.log("You Lose! Paper beats Rock!");
                        return whoWon="computer";
                     }
                     else{
                        console.log("You Win! Rock beats Scissors!");
                        return whoWon="player";
                     }
                     break;
        case "paper": if(computerSelection==="Paper"){
                        console.log("It's a draw. You both selected Paper.");
                        return whoWon="draw";
                      }
                      else if(computerSelection==="Scissors"){
                        console.log("You Lose! Scissors beats Paper!");
                        return whoWon="computer";
                     }
                     else{
                        console.log("You Win! Paper beats Rock!");
                        return whoWon="player";
                     }
                     break;
        case "scissors": if(computerSelection==="Scissors"){
                        console.log("It's a draw. You both selected Scissors.");
                        return whoWon="draw";
                      }
                      else if(computerSelection==="Rock"){
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
function game(){
    let whoWon;
    let playerWins=0;
    let computerWins=0;
    let draws=0;
    for(let i=0;i<5;i++) {
        whoWon=playRound(getPlayerSelection(),getComputerSelection());
        switch(whoWon){
            case "draw": draws++; break;
            case "player": playerWins++; break;
            case "computer": computerWins++; break;
            default: throw new Error("Unable to determinate result!");
        }
    }
    console.log("Player won "+playerWins+" matches.");
        console.log("Computer won "+computerWins+" matches");
        console.log("There were "+draws+" draws");
        if(playerWins>computerWins) console.log("Player wins the game.");
        else if(computerWins>playerWins) console.log("Computer wins the game.");
        else console.log("The game end in tie.");
}
game();