const myObject = {
    js: 'Javascript',
    cpp: "C++",
    swift: "swift by apple"
}

// for in loop

// for (const key in object) {
    
// }

for (const key in myObject) {
    //console.log(`${key} :- ${myObject[key]}`);
    
}

const myArray = [1, 2, 3, 4, 5]

for (const key in myArray) {
    //console.log(`the ${key} element is ${myArray[key]}`);
    
}

const map = new Map
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','for real')
map.set('IN','India')// maps are known for their unique keys but values may be same
map.set('hn','hell nah')

console.log(map);


for (const key in map) {
    console.log(map[key]);
    
}

