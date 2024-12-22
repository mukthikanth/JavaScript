function sayMyName() {
    console.log("M");
    console.log("u");
    console.log("k");

    
}

//sayMyName()// executing the function

// function addTwoNumbers(num1, num2){ // num1 and num2 are parameters
//     console.log(num1 + num2);
    
// }
// addTwoNumbers(2,3) // 2 and 3 are arguments
// addTwoNumbers(2,"3")//errors
// addTwoNumbers(2,"a")//errors

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);// output is undefined now comes the concept of return

// function addTwoNumbers(num1, num2){ 
//     let result = num1 + num2
//     return result
    
// }

// const result = addTwoNumbers(5, 4) // this result is different concept of scope enter the chat
// console.log("Result: ", result);

function addTwoNumbers(num1, num2){ 
    return num1 + num2
    console.log("hahaha");
    
}

// nothing is executed after the return

const result = addTwoNumbers(4, 6)
// console.log("Result: ", result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

loginUserMessage("Mukthikanth") // Nothing is executed as the console log is not used

// console.log(loginUserMessage("Mukthikanth"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());// output is undefined

// function loginUserMessage(username){
//     // if(username === undefined){
//     //     console.log("Please enter a username");
//     //     return

//     if(!username){
//         console.log("Please enter a username");
//         return
//      }
//     return `${username} just logged in`
// }

// empty string("") and undefined are considered as false
// !undefined = true which is equal to (undefined === true)
//console.log(loginUserMessage());
loginUserMessage() // output is "Please enter a username"

function loginUserMessage(username = "Muk"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return

    if(!username){
        console.log("Please enter a username");
        return
     }
    return `${username} just logged in`
}

// console.log(loginUserMessage());// muk is used as default
// console.log(loginUserMessage("mukthikanth"));// mukthikanth is used

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200));

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 500)); // Only first one is printed

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 500));// output is array
// ... is both rest and shatter depending on the situation

function calculateCartPrice(value1, value2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 500, 1000));// value1 and value2 accomodates 200, 300

const user = {
    username: "Diddy",
    price: "One bottle of johnson's baby oil"
}

function handleObject(anyobject){
    console.log(`user ${anyobject.username} has logged in and it's price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "mukthikanth",
    price: 299
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(fromArray){
    return fromArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 800, 300, 400]));

