let myName = "Mukthikanth   "
// let myCity = "bengaluru    "
// console.log(myName.trim().length)
// console.log(myName.truelength)

function greet(){
    console.log("Hello my niggas")
}



let myEmcees = ["Nas", "Mos def", "Black thought"]

let EmceePower = {
    Nas: "Flow",
    Mos: "mos",
    blac: "syllabic rhyme schemes",
    getNasPower: function(){
        console.log(`The power of Nas is ${this.Nas}`)
    }
}

// We are declaring a method that can be accessed by any object

Object.prototype.Facts = function(){
    console.log("The greatest trio of all time")
}

Array.prototype.hello = function(){
    console.log("I'm everywhere")
}

EmceePower.Facts()
EmceePower.getNasPower()

// since everything array, function , string come under objects it is applicable for arrays also
myEmcees.Facts() // Ouput is "The greatest trio of all time"
myName.Facts() // Ouput is "The greatest trio of all time"
greet.Facts() // Ouput is "The greatest trio of all time"

// testing if the method injected in array is available for an object or not as object is also linked to array

myEmcees.hello()// output is I'm everywhre as expected
// EmceePower.hello() // there is an error so js didn't go to the upper heirarchy containing object it just stopped at array


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
// It's linking objects

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherEmcee = "Rakim    "
String.prototype.trulength = function(){
    console.log(`${this}`)
    console.log(`The true length is: ${this.trim().length}`)
}
anotherEmcee.trulength()// the output of this is Rakim 

"Nas".trulength()// output of this is Nas
