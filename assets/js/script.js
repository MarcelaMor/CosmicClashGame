const userText = document.querySelector("#userText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let user;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    user = button.textContent;
    computerTurn(); 
    userText.textContent = 'User: ${user}' ;
    computerText.textContent = 'Computer: ${computer}' ;
    resultText.textContent = checkWinner();
}));


function  computerTurn(){

    //Main Game Funtion
    /** 3 choices, remeber to change this when adding lizard, spock */

    const randNum = Math.floor(Math.random() * 3) + 1;
 
    switch(randNum){

        case 1:
        computer = "Rock"
        break;

        case 2:
        computer = "Papper"
        break;

        case 3:
        computer = "Scissors"
        break;

    }
}

     /** Winner funtions and rules */ 
     //Dont forget to add 2 more
function checkWinner(){
    if(user == computer){
        return "It's a tie!";
    }
    else if (computer == "Rock"){
        return (user == "Papper") ? "Congratulations!" : "Aww You lost!" 
    }
    else if (computer == "Paper"){
        return (user == "Scissor") ? "Congratulations!" : "Aww You lost!"
    }
    else if (computer == "Scissors"){
        return (user == "Rock") ? "Congratulations!" : "Aww You lost!"
    }
}
