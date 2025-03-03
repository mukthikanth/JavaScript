class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)// better then  call keyword
        this.email = email
        this.password = password
    }

    newCourse(){
        console.log(`A new course was launched by ${this.username}`)
    }
}
   
const ye = new Teacher("kanye", "kanyemail.com", "kanye12314")
ye.newCourse()
ye.logMe()

console.log(ye === Teacher)// false
console.log(ye instanceof Teacher)// True it is kind of a subset of Teacher
console.log(ye instanceof User)// because teacher is a made of user

const lupe = new User("Lupe Fiasco")
lupe.logMe()