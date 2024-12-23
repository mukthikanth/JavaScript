let a = 100


if (true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
    
}

// console.log(a);// not defined as it is inside the loop
// console.log(b);// not defined as it is inside the loop
// console.log(c);// hence we dont use var

// console.log(a);

// everything inside loop is local/block scope and the rest is global scope

function one(){
    const username = "Mukthikanth"
    function two(){
        const website = "Youtube"
        console.log(username);// child can access parent's data
        
    }
    // console.log(website);// it cannot access the data inside another function
    
    two()
}

// one()

// if (true) {
//     const username = "Mukthikanth"
//     if (username === "Mukthikanth"){
//         const website = " Youtube"
//         console.log(username + website);
        
//     }
//     // console.log(website);// out of scope
    
// }
// console.log(username);// out of scope

// ************** INTERESTING ***************


console.log(addone(5))
function addone(num){
    return num + 1
      
}

//addtwo(5) // This is not possible as the function is held by a variable and it can only get executed after initialization
const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5));
