class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encrypytPassword(){
        return `${this.password}abc`
    }

    editUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const me = new user("Mukthikanth", "adfsdf", "789")
console.log(me.encrypytPassword())
console.log(me.editUsername())

// Behind the scene or without class

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encrypytPassword = function(){
    return `${this.password}abc`
}

User.prototype.editUsername = function(){
    return `${this.username.toUpperCase()}`

}

const notMe = new user("Mh", "af", "456")

console.log(notMe.encrypytPassword())
console.log(notMe.editUsername())

