//const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object
tinderUser.email = "muk23gmail.com"
tinderUser.age = 18
tinderUser.isLoggedIn = true
//console.log(tinderUser);



const regularuser = {
    email: "muk2006@gmail.com",
    name: {
        userfullname: {
            firstname: "Mukthikanth",
            lastname: "P"
        }
    }

}

// console.log(regularuser);
// console.log(regularuser.name);
// console.log(regularuser.name.userfullname);
// console.log(regularuser.name.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

//const obj4 = {obj1, obj2, obj3} // This is like push in arrays it adds an entire object inside a object
//const obj4 = Object.assign({}, obj1, obj2, obj3)// works like concat in arrays

const obj4 = {...obj1, ...obj2, ...obj3} // shatter method is the best method
//console.log(obj4);

//console.log(Object.keys(tinderUser));// the output is in array and can further be used in loops
//console.log(Object.values(tinderUser));// the output is in array and can further be used in loops
//console.log(Object.entries(tinderUser));// everything to array first value is key and second one is to value
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));// to check if the key exists or not
//console.log(tinderUser.hasOwnProperty('isLogged'));



const users = [
    {
        name: "muk",
        email: "kljklgmail.com"
    },
    {
        name: "thi",
        email: "absfagmail.com"
    },
    {
        name: "kan",
        email: "rewgmail.com"
    },


]

//console.log(users[1].email);

// object de-structure and JSON API


const course = {
    courseName: "Spirituality",
    courserPirce: "3 niggas",
    courseInstructor: "Jesus"
}

// const {courseInstructor} = course
// console.log(courseInstructor);// output is jesus

const {courseInstructor: Instructor} = course
console.log(Instructor);

// JSON API
// {
//     "name": "Mukthikanth",
//     "age": 18,
//     "email": "muk@gmail.com"

// }
