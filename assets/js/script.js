//Selecting Dom elements
const userText = document.querySelector('#userText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText')
const choiceBtns = document.querySelectorAll('.choiceBtn')
const userCounter = document.querySelector('#userPoints')
const computerCounter = document.querySelector('#computerPoints')
const tieCounter = document.querySelector('#ties')
const gameOver = document.querySelector('#game-title')

//Variable declarations
let user
let computer
let computerPoints = 0
let userPoints = 0
let tiePoints = 0
let timesPlayed = 0
const maxRounds = 5

//Adding click listener to buttons
choiceBtns.forEach((button) => {
  button.addEventListener('click', () => {
    if (timesPlayed < maxRounds) {
      user = button.textContent
      computerTurn()
      userText.textContent = `You: ${user}`
      computerText.textContent = `Computer: ${computer}`
      const result = checkWinner(user, computer)
      resultText.textContent = result
      timesPlayed++
      setPoints(result)
      if (timesPlayed === maxRounds) {
        finishGame()
      }
    }
  })
})

function computerTurn() {
  //Math floor = rounds down and returns the largest number
  // Math random = random number from 0 - 0.99

  const randNum = Math.floor(Math.random() * 5) + 1

  switch (
    randNum // Allows me to execute one of these code blocks.
  ) {
    //It performs depending on what "argument" it receives from "randNum" variable

    case 1:
      computer = 'Rock'
      break //The break statement terminates the switch statement, if failed it continues to the next case

    case 2:
      computer = 'Paper'
      break

    case 3:
      computer = 'Scissors'
      break

    case 4:
      computer = 'Lizard'
      break

    case 5:
      computer = 'Spock'
      break
  }
}

/** Winner conditions and rules */
//Dont forget to add 2 more

function checkWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!"
  } else if (computer == 'Rock') {
    return user == 'Paper' || user == 'Spock'
      ? 'Congratulations!'
      : 'Aww you lost!'
  } else if (computer == 'Paper') {
    return user == 'Scissors' || user == 'Lizard'
      ? 'Congratulations!'
      : 'Aww you lost!'
  } else if (computer == 'Scissors') {
    return user == 'Rock' || user == 'Spock'
      ? 'Congratulations!'
      : 'Aww you lost!'
  } else if (computer == 'Lizard') {
    return user == 'Rock' || user == 'Scissors'
      ? 'Congratulations!'
      : 'Aww you lost!'
  } else if (computer == 'Spock') {
    return user == 'Lizard' || user == 'Paper'
      ? 'Congratulations!'
      : 'Aww you lost!'
  }
}

//Points results-
function setPoints(result) {
  // Takes "result" variable to check current winning condition
  if (result === 'Congratulations!') {
    userPoints++ // Increments user point by one
  } else if (result === 'Aww you lost!') {
    computerPoints++ // Increments computer point by one
  } else if (result === "It's a tie!") {
    tiePoints++ // Increments when it's a tie
  }

  //Adds points to the corresponding element
  userCounter.textContent = `Your score: ${userPoints}`
  computerCounter.textContent = `Computer score: ${computerPoints}`
  tieCounter.textContent = `Ties: ${tiePoints}`
}

function finishGame() {
  gameOver.textContent = `GAME OVER`

  choiceBtns.forEach((button) => {
    button.disabled = true
  })
}
