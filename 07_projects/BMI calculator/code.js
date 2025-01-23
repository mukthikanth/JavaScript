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