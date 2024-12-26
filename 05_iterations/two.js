// while loop

// while (condition) {
    
// }

let index = 0;

while (index <= 10) {
    //console.log(`Value of index is ${index}`);
    index = index + 2
    
}

const myArray = ['Kendrick', 'Nas', 'Rakim']
let arr = 0// the changing value should always be let and not const as it needs to get updated after every loop

while (arr < myArray.length) {
    //console.log(myArray[arr]);
    arr = arr + 1
    
}

// do while loop

//  do {
    
//  } while (condition);

// let score = 1

// do {
    
//     console.log(`value of score is ${score}`);
//     score++
// } while (score <= 10);

let score = ['kendrick', ' nas', ' rakim']
do {
    
    console.log(`value of score is ${score}`);
    score++
} while (score <= 10);

// The only backlash about do while loop is the first initialization always gets executed even if it's wrong(ex: it maybe a string or an array)