const user = {
    username: "Mukthikanth",
    age: 18,
    email: "aba@gamail.com",
    getUserDetails: function(){
        // console.log("Got user details")
        // console.log(`Username: ${username}`)// Error
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

const date = new Date()
console.log(date.toLocaleTimeString('en-US',{timezone: 'Asia/Kolkata'}))

// 'new' key is constructor and it is used to create new context so that the old 'this' context stays with that context only

function userdetails(username, LogInCount, IsLoggedIn){
    this.username = username
    this.LogInCount = LogInCount
    this.IsLoggedIn = IsLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this // not necessary it automatically returns

} // thi.username is variable and username is parameter

// const userOne =  userdetails("Mukthikanth", 12, true)
// const userTwo =  userdetails("Cise star", 8, false)

const userOne = new userdetails("Mukthikanth", 12, true)
const userTwo = new userdetails("Cise star", 8, false)

console.log(userOne.constructor)// even though we printed user one the output is usertwo that's why we use "new"
// console.log(userTwo)


