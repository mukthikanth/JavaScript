// for of loop

// for (const element of object) {// this object is not {}
    
// }

const arr = [1, 2, 3, 4, 5]


for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello world"
for (const greet of greetings) {
    if (greet == ' ') {
        continue
    }
    //console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','for real')
map.set('IN','India')// maps are known for their unique keys but their values may be same
map.set('hn','hell nah')
// they also show the number of unique elements in a map
// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// } // You get an array 
for (const [key, value] of map) {// this deconstructs the array
    //console.log(key, ':-', value);
    
}

const obj = {
    name: "muk",
    age: 18,
    email: "Muk@gmail.com",

 }

// for (const [key, value] of obj) {
//     console.log(key, ":-", value);
    
// } 

//objects are not iterable
