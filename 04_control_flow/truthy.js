const userEmail = []

if(userEmail){
    console.log("got user email");
    
}else{
    console.log("no user email");
    
}

// falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 

// "0", "false", " ", [], {}, function(){}

if (userEmail.length == 0) {
    console.log("Array is empty");
    
}// to find if array is empty

const emptyObject = {}
if (Object.keys(emptyObject).length == 0) {
    console.log("Empty object");
    
}

// 0 = ''(true)

// Nullish Coalescing Operator (??): null undefined

// let val1 = 5 ?? 10
// let val1 = undefined ?? 10
// let val1 = undefined ?? 10
// let val1 = null ?? 10
// let val1 = null ?? 20 ?? 30// the first element is executed
// console.log(val1);

// Terniary operator

// condition ? true : false

const teaPrice = 15
teaPrice <= 20 ? console.log("Tea price is less than 20") : console.log("Tea price is greater than 20");









