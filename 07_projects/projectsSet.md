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