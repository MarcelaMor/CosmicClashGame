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
    userText.textContent = `User: ${user}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));


function computerTurn() {

    //Math floor = rounds down and returns the largest number 
    // Math random = random number from 0 - 0.99 

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch (randNum) {   // Allows me to execute one of these code blocks. 
         i give it      //It performs depending on what variations/condition it has

        case 1:
            computer = "Rock"
            break;     //The break statement terminates the switch statement, if failed it continues to the next case

        case 2:
            computer = "Papper"
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

/** Winner funtions and rules */
//Dont forget to add 2 more
function checkWinner() {
    if (user == computer) {
        return "It's a tie!";
    }
    else if (computer == "Rock") {
        return (user == "Papper") ? "Congratulations!" : "Aww You lost!"
    }
    else if (computer == "Paper") {
        return (user == "Scissor") ? "Congratulations!" : "Aww You lost!"
    }
    else if (computer == "Scissors") {
        return (user == "Rock") ? "Congratulations!" : "Aww You lost!"
    }
}
