class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return '123'
    }// static avoids acess to it 
}

const ye = new User("kanye")
console.log(ye.createId())