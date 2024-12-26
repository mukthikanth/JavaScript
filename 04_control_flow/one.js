

// // no output as === also checks the data type
// 2 != 3 means 2 is not equal to 3

const temperature = 60
// if(temperature < 50){
//     console.log("Temperature is less than 50");
    
// }else{
//     console.log("Temperature is greater than 50");
    
// }

// const score = 200
// if (score > 100){
//     const power = "fly "
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);// out of scope


const balance = 1000
//if (balance > 500) console.log("okay");// only one line can be written and semicolon is compulsory

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 750){
//     console.log("less than 750");

// }else{
//     console.log("less than 2000");
    
// }



const userLoggedIn = true
const debitCard = true
const LoggedInfromGoogle = false
const LoggedInfromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to purchase");
    
}// both statements must be true

if (LoggedInfromEmail || LoggedInfromGoogle){
    console.log("user logged in");
    
}// anyone should be true