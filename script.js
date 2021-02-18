function computerPlay(){
    let computerArray = ["rock","paper","scissor"];
    let randomchoose = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomchoose;
    
 }

function displayResluts(textcontent){
    let olist = document.querySelector(".ol-list");
    let litem = document.createElement("li");
    litem.textContent = textcontent;
    olist.appendChild(litem);
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


let human_rock = document.querySelector(".human-div-rock");
let human_paper = document.querySelector(".human-div-paper");
let human_scissor = document.querySelector(".human-div-scissor");
human_paper.onclick = () => playRound("paper", ComputerSelection = computerPlay());
human_rock.onclick = () => playRound("rock", ComputerSelection = computerPlay());
human_scissor.onclick = () => playRound("scissor", ComputerSelection = computerPlay());