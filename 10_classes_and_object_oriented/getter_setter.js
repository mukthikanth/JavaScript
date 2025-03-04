class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(mail){
        this._email = mail
    }

    get password(){
        // return this._password.toUpperCase()
        return `Nasty${this._password}` 
    }

    set password(value){
        this._password = value
    }
    // Both set and get should be present and _password is used to reduce confusion between the this.password = password in constructor and in get and set

    // the value is saved as it is in the data base but when someone takes the value it's returned in all caps of the function used in get
}

const nas = new User('nas@gmail.com', "Nas123")
console.log(nas.password);
console.log(nas.email)
