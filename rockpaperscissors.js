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
    if(playerSelectionCaseInsensitive!="rock" || playerSelectionCaseInsensitive!="paper" || playerSelectionCaseInsensitive!="scissors"){
        throw new Error("Unable to recognize your choice.");
    }
    return playerSelectionCaseInsensitive;
}
function singleRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock": if(computerSelection==="Rock"){
                         console.log("It's a draw. You both selected Rock.");
                     }
                     else if(computerSelection==="Paper"){
                        console.log("You Lose! Paper beats Rock!");
                     }
                     else{
                        console.log("You Win! Rock beats Scissors!");
                     }
                     break;
        case "paper": if(computerSelection==="Paper"){
                        console.log("It's a draw. You both selected Paper.");
                      }
                      else if(computerSelection==="Scissors"){
                        console.log("You Lose! Scissors beats Paper!");
                     }
                     else{
                        console.log("You Win! Paper beats Rock!");
                     }
                     break;
        case "scissors": if(computerSelection==="Scissors"){
                        console.log("It's a draw. You both selected Scissors.");
                      }
                      else if(computerSelection==="Rock"){
                        console.log("You Lose! Rock beats Scissors!");
                     }
                     else{
                        console.log("You Win! Scissors beat Paper!");
                     }
                     break;
        default: throw new Error("Failed to determinate the winner. I'm sorry.");
    }
}
singleRound(getPlayerSelection(), getComputerSelection());