function SetUserName(username){
    this.username = username
}

// function userDetails(username, email, password){
//     SetUserName(username)

//     this.email = email
//     this.password = password
// }

// const me = new userDetails('Mukthikanth', "alsdjfso", "alskdfhsl")
// console.log(me) // username is not displayed

function userDetails(username, email, password){
    SetUserName.call(this, username)

    this.email = email
    this.password = password
}

const me = new userDetails('Mukthikanth', "alsdjfso", "alskdfhsl")
console.log(me)