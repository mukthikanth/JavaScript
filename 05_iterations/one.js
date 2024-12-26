// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index < 10; index++){
//     const element = index;
//     console.log(element);
    
// }
for (let index = 0; index < 10; index++){
    const element = index;
    if (element ==  7) {
        //console.log("7 is the best number");
        
    }
    //console.log(element);
    
}


for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value is ${j} for outer loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);
        
        
    }
    
    
}

let myArray = ["Nas", "Kendrick", "Rakim"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 7) {
//         console.log("detected 7"); 
//         console.log("7 is the best number");
//         break
//     }
//     console.log(`the value of i is ${index}`);
   
// }
for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log("detected 7"); 
        console.log("7 is the best number");
        continue
    }
    console.log(`the value of i is ${index}`);
   
}

// continue statement sends the loop trajectory to the end of the loop again instead of continuing in the same loop