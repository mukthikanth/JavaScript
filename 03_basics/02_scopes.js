let a = 100


if (true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a);
    
}

// console.log(a);// not defined as it is inside the loop
// console.log(b);// not defined as it is inside the loop
// console.log(c);// hence we dont use var

console.log(a);

// everything inside loop is local/block scope and the rest is global scope
