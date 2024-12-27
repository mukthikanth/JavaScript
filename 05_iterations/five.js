const emcees = ['kendrick', 'nas', 'rakim']

// emcees.forEach( function (goats) {
//         console.log(goats);
        
// })

// emcees.forEach( (goats) => {
//     //console.log(goats);
    
// })

// function printMe(item){
//     console.log(item);
    
// }

// emcees.forEach(printMe)
// emcees.forEach(printMe())// Only reference is required and the execution of the function


// emcees.forEach( (item, index, array) => {
//        console.log(item, index, array);
       
// })


const myCodingLang = [
    {
        languagename: 'Javascript',
        languagefile: "js"
    },
    {
        languagename: 'java',
        languagefile: "java"
    },
    {
        languagename: 'python',
        languagefile: "py"
    }
    
]

// myCodingLang.forEach( (item) => {
//       console.log(item.languagename);
      
      
      
// })

myCodingLang.forEach( (item) => {
    console.log(`${item.languagename} :- ${item.languagefile}`);
    
})