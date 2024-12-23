const user = {
    username: "Mukthikanth",
    price: 999,
    welcomemessage: function(){
       console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);// output is {}

// function chai(){
//     let username = "Mukthikanth"
//     // console.log(this);
//     console.log(this.username);// output is undefined

//     // This keyword only works in objects and not in function

// }
// chai()

// const chai = function(){
//     let username = "Mukthikanth"
//     console.log(this.username);// output is still undefined
    
// }
// chai()


// const chai = () => {
//     let username = "Mukthikanth"
//     console.log(this);
    
// }
// chai()

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwoNumbers(3, 5));


// const addTwoNumbers = (num1, num2) =>  num1 + num2// implicit return
// const addTwoNumbers = (num1, num2) =>  (num1 + num2)
// if {} is used return is compulsary but not in normal parenthesis ()

// const addTwoNumbers = (num1, num2) =>  {username: "Mukthikanth"}// output is undefined
const addTwoNumbers = (num1, num2) =>  ({username: "Mukthikanth"})// now the ouput is username
console.log(addTwoNumbers(3, 9));