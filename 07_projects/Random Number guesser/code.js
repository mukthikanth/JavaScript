let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const userInput = document.querySelector('#guessField')
const remainingGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultSection = document.querySelector('.resultParas')

const p = document.createElement('p')

let numGuess = 1
let prevGuess = []
let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)

  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`please enter a valid number`)

  }else if(guess < 1){
    alert(`enter value greater than 1`)
  }else if(guess > 100){
    alert(`enter value less than or equal to 100`)
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over. The random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(guess === randomNumber){
    displayGuess(guess)
    displayMessage(`You guessed the correct number`)
    endGame()
  }else if (guess < randomNumber){
    displayMessage(`Number is too low`)
  }else{
    displayMessage(`Number is too high`)
  }

}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remainingGuess.innerHTML = `${11 - numGuess}`


}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
 userInput.value = ''
 userInput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML = `<h2 id="newgame">Start again</h2>`
 resultSection.appendChild(p)
 playGame = false
 newGame()

}
function newGame(){
  const newGameButton = document.querySelector('#newgame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    numGuess = 1
    userInput.value = ''
    userInput.removeAttribute('disabled')
    prevGuess = []
    guessSlot.innerHTML = ''
    remainingGuess.innerHTML = `${11 - numGuess}`
    resultSection.removeChild(p)


  })
  
}