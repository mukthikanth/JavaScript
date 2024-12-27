const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNums.forEach( (num) => num + 10)// main problem of foreach is it does not return anything
newNums = myNums.map( (num) => num + 10)
// console.log(newNums);

// newNums = myNums.forEach( (num) => {
//     console.log(num + 10);
    
// })

// you cannot use filter element to modify anything you can just use it to segregate items. Hence only map and foreach is used


newNums = myNums.
            map( (num) => num*10).
            map( (num) => num + 1).
            filter( (num) => num <= 55)
            
console.log(newNums);// This is chaining

