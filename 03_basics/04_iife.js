// Immediately Invoked Function Expressions(IIFE)

//  (function)(execution)
(function chai(){
    console.log("DB connected");
    
})();
// Interview: In order to avoid any problems from global scope variables and declaration we use IFFE


(() => {
    console.log("DB connected 2");
    
})();// error occurs not because it is an arrow it's because the IIFE doesn't know when to stop so we use ; at the end of the first IIFE


((name) => {
    console.log(`DB connected 2 ${name}`);
    
})("aws")

// In order to use two IFFE we use;