const mynums = [1, 2, 3]

// let myTotal = mynums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)
// console.log(myTotal);

const myTotal = mynums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);

const myShoppingCart = [
    {
        name: "js course",
        price: 999
    },
    {
        name: "py course",
        price: 1999
    },
    {
        name: "web dev course",
        price: 2999
    },
    {
        name: "data science course",
        price: 5999
    },
]

const mytotalprice = myShoppingCart.reduce( (acc, course) => (acc + course.price), 0 )
console.log(mytotalprice);
