function computerPlay(){
    let computerArray = ["rock","paper","scissor"];
    let randomchoose = computerArray[Math.floor(Math.random() * computerArray.length)];
    return randomchoose;
    
 }
let playerScore=0;
let computerScore=0;
function displayResults(text,computer,human){
    let com = document.querySelector("#com");
    let hum = document.querySelector("#hum");
    let results = document.querySelector('.results');
    let li = document.createElement('li');
    li.textContent=text;
    results.appendChild(li);
    com.textContent=computer;
    hum.textContent=human;
    
}
 

function playRound(playerSelection, ComputerSelection){
    if(playerScore===5){
        
        playerScore=0;
        computerScore=0;
        displayResults("winner is player",computerScore,playerScore);
    }
    else if(computerScore===5){
       
        playerScore=0;
        computerScore=0;
        displayResults("winner is computer",computerScore,playerScore);
    }
  

    if(playerSelection=="rock" && ComputerSelection=="paper"){
        computerScore++;
        displayResults("computer wins paper beats rock",computerScore,playerScore); 
    }
    else if(playerSelection == "paper" && ComputerSelection == "rock"){
        playerScore++;
        displayResults("You win paper beats rock",computerScore,playerScore);

    }
    else if(playerSelection == "scissor" && ComputerSelection == "paper"){
        playerScore++;
        displayResults("You win scissor cuts paper",computerScore,playerScore);
    }
    else if(playerSelection == "rock" && ComputerSelection == "scissor"){
        playerScore++;
        displayResults("you win rock beats scissor",computerScore,playerScore);
       

    }
    else if(playerSelection == "paper" && ComputerSelection == "scissor"){
        computerScore++;
        displayResults("computer wins scissor cuts paper",computerScore,playerScore);
        
    }
    else if(playerSelection == "scissor" && ComputerSelection == "rock"){
        computerScore++;
        displayResults("computer wins rock beats scissor",computerScore,playerScore);
       
    }
    else {
        displayResults("tied",computerScore,playerScore);
    }

    
}



const buttons = document.querySelectorAll('.human button');

buttons.forEach((button) => {
    button.addEventListener('click',() => playRound(button.id,computerPlay()));
})

