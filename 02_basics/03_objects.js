// singleton in constructor only(object.create) not in object literals(2nd method)

// object literals

// Object.create for singleton

const mysymbol = Symbol("mykey1")

const JsUser = {
    name: "Mukthikanth",
    "full name" : "Mukthikanth P",
    age: 18,
    Location: "Bengaluru",
    IsLoggedIn: true,
    LoggedDays: ["Monday", "Tuesday"],
    email: "Muk2006@gmail.com",
    [mysymbol]: "mykey1" // syntax for symbols
} 

// console.log(JsUser.name);// not the best way
// console.log(JsUser["name"]);
// // console.log(JsUser."full name");// error
// console.log(JsUser["full name"]);
// console.log(JsUser["LoggedDays"][1]);
// console.log(JsUser[mysymbol]);
// console.log(typeof mysymbol);


// JsUser.email = "muk2006@google.com"
// Object.freeze(JsUser) // no one can change its value
// JsUser.email = "muk2006@github.com" // not updated as it is freezed

// console.log(JsUser); //

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`); // important trick
    
}

console.log(JsUser.greeting); // important
console.log(JsUser.greeting()); 
console.log(JsUser.greetingtwo()); 








