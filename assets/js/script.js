const playerText = document.querySelector("#competitorText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let competitor;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    competitor = button.textContent;
    computerTurn(); 


}));

function  computerTurn(){


    const randNum = Math.floor(Math.random() * 3) + 1;
}
