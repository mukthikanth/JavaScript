function addThree(num){
    return num+3;
}

addThree.power = 2

console.log(addThree(5));
console.log(addThree.power)
console.log(addThree.prototype)

// Function is a object as well as function


function scoreBoard(username, score){
    this.username = username
    this.score = score
}

scoreBoard.prototype.increment = function(){
    this.score++
    console.log(this.score)
}
scoreBoard.prototype.print = function(){
    console.log(`score is ${this.score}`)
}

const one = new scoreBoard('dot', 10)
const two = new scoreBoard('nas', 20)

one.increment()

// new and this keyword play a keen  role in creating context