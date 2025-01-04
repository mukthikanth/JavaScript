# Projects related to DOM

## Project Link
[Click here](
    https://stackblitz.com/edit/dom-project-chaiaurcode-ekvp6pux?file=1-colorChanger%2Fchaiaurcode.js
)

# Solution Code
## Project 1 (Color scheme switcher)
``` javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    switch (e.target.id) {
      case "grey":
           body.style.backgroundColor = e.target.id
           break;
      case "white":
           body.style.backgroundColor = e.target.id
           break;
      case "blue":
           body.style.backgroundColor = e.target.id
           break;
      case "yellow":
           body.style.backgroundColor = e.target.id
           break;
      case "purple":
           body.style.backgroundColor = e.target.id
           break;
       default:
          body.style.backgroundColor = 'yellow'
      
    }
    
  })
   
})

```


## project 2(calculating BMI)

``` Javascript

const form = document.querySelector('form')
// const height = document.querySelector('#height') if you use this the height value will be assigned as zero

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height<0 || isNaN(height)){
    result.innerHTML = `Please enter a valid height ${height}`
  }else if(weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML = `Please enter a valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
    if(bmi < 18.6){
      result.innerHTML += `<br>The person with the current bmi index(${bmi}) is under weight`
    }
    else if(bmi > 18.6 && bmi < 24.9){
      result.innerHTML += `<br>The person with the current bmi index(${bmi}) belongs to normal range`
    }
    else{
      result.innerHTML += `<br>The person with the current bmi index(${bmi}) is over weight`
    }
   }
   

})





```


## project 3(digital clock)

``` javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```


## project 4(Guessing random number)
```Javascript
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
```