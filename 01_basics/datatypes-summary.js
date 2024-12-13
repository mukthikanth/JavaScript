// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const id = 123 // number
const email = "abc.com" // string
let userloggedIn = false // boolean
let username = null // null
let usercity; // undefined

let userId = Symbol("123")
let anotheruserId = Symbol("123")

// even if the values of both the symbols are same they are not equal

console.log(userId == anotheruserId);
console.log(userId === anotheruserId);

const BigNumber = 2935627592868324579n
// n refers BigInt

// Reference (Non-primitive)
// Array, Object, function

let GOATS = ["Nas", "Tupac", "Kendrick Lamar"]; // Array

let myobject = {
    name: "Mukthikanth",
    age: 18,
}

let myfunction = function(){
    // console.log("Hello world")
}


// console.log(typeof BigNumber);

// outputs of datatypes

// string => string
// null => object'
// boolean => boolean
// undefined => undefined
// number => number
// refer official website once

// JavaScript is dynamically typed language

// ***************************
// Stack(Primitive) and Heap memory(Non primitive)

let Myname = "Mukthikanth"
let Myanothername = Myname
Myanothername = "Chintu"

console.log(Myname);
console.log(Myanothername);

// in stack the second one receives a copy so the original remains same

let mydetails = {
    height: "5ft 6inches",

}

let myotherdetails = mydetails

myotherdetails.height = "6ft"

console.log(mydetails.height);
console.log(myotherdetails.height);// by using .value you can get the specific segment of the object

// In heap the original value itself gets updated


