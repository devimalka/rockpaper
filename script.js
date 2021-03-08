function computerPlay(){
    let computerArray = ["rock","paper","scissor"];
    let randomchoose = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomchoose;
    
 }


}

function playRound(playerSelection, ComputerSelection){
    if(playerSelection=="rock" && ComputerSelection=="paper"){
        displayResluts("you loose paper beats rock");
    }
    else if(playerSelection == "paper" && ComputerSelection == "rock"){
        displayResluts("you win paper beats rock");
    }
    else if(playerSelection == "scissor" && ComputerSelection == "paper"){
        displayResluts("you win scissor cuts paper");
    }
    else if(playerSelection == "rock" && ComputerSelection == "scissor"){
        displayResluts("you win rock beats scissor");
    }
    else if(playerSelection == "paper" && ComputerSelection == "scissor"){
        displayResluts("you loose scissor cuts paper");
    }
    else if(playerSelection == "scissor" && ComputerSelection == "rock"){
        displayResluts("you loose rock beats scissor");
    }
    else {
        displayResluts("tied");
    }
}


