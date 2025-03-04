// old 

const User = {
    _email: 'Hus@gmail.com',
    _password: 'abs',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const Nas = Object.create(User)
console.log(Nas.email); // The _ is ignored and email is accessed
