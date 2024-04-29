//Selecting Dom elements
const userText = document.querySelector("#userText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const userCounter = document.querySelectorAll("#userPoints");
const computerCounter = document.querySelectorAll("#computerPoints");

let user;
let computer;
let result;
let computerPoints;
let userPoints;
let draws;


choiceBtns.forEach(button => button.addEventListener("click", () => {

    user = button.textContent;
    computerTurn();
    userText.textContent = `User: ${user}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    result = checkWinner();
}));


function computerTurn() {

    //Math floor = rounds down and returns the largest number 
    // Math random = random number from 0 - 0.99 

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch (randNum) {   // Allows me to execute one of these code blocks. 
        //It performs depending on what "argument" it receives from "randNum" variable

        case 1:
            computer = "Rock"
            break;     //The break statement terminates the switch statement, if failed it continues to the next case

        case 2:
            computer = "Paper"
            break;

        case 3:
            computer = "Scissors"
            break;

        case 4:
            computer = "Lizard"
            break;

        case 5:
            computer = "Spock"
            break;

    }
}

/** Winner conditions and rules */
//Dont forget to add 2 more
function checkWinner() {
    if (user == computer) {
        return "It's a tie!";
    }
    else if (computer == "Rock") {
        return (user == "Paper") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Rock") {
        return (user == "Spock") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Paper") {
        return (user == "Scissor") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Paper") {
        return (user == "Lizard") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Scissors") {
        return (user == "Rock") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Scissors") {
        return (user == "Spock") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Lizard") {
        return (user == "Rock") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Lizard") {
        return (user == "Scissors") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Spock") {
        return (user == "Lizard") ? "Congratulations!" : "Aww you lost!"
    }
    else if (computer == "Spock") {
        return (user == "Paper") ? "Congratulations!" : "Aww you lost!"
    }




/* Update score function */
function setPoints(result) {  // Update score based on result
    if (result === "Congratulations!") {    // Check result and update score
        userScore++;    // Incriment users score if they won
    } else if (result === "Aww you lost!") {
        opponentScore++;    // Incriment opponent score if they won
    } else if (result === "It's a tie!") {
        drawScore++;    // Incriment draw score if they game ended in draw
    }


    userScoreText.textContent = `User: ${userScore}`;   // Update user score text
    opponentScoreText.textContent = `Opponent: ${opponentScore}`;   // Update opponent score text
    drawScoreText.textContent = `Draw: ${drawScore}`;   // Update draw score text
}

}
