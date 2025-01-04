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