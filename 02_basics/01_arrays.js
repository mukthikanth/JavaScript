// array

const myArray = [4,6,9,0,1]
const myEmcees = ['nas', 'kendrick', 'ice-cube']
const Array2 = new Array(5,3,2,1)

// console.log(myArray[0]);

//Array methods

// myArray.push(6) // adds 6 to the list
// myArray.push(8)
// myArray.pop()// removes the last element
// console.log(myArray);

// myArray.unshift(5) // adds 5 to the zeroeth index
// myArray.unshift(1) // adds 1 to the zeroeth index
// myArray.shift() // removes the item from zeroeth index
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.includes(8));
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(8)); // if the value doesnot exist in the array then the index will be -1 always

// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray); 
// console.log(typeof newArray); // join converts the new array into string


// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3) // gives the values from 1 to 2, 3 not included
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("C ", myArray)

// slice provides the output as expected but doesn't alter the original array
// splice provides the output including the end range but it manipulates the original array also(Main difference)
