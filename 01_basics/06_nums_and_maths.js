const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toString().charAt(2));
// console.log(balance.toFixed(2));

const anotherNumber = 123.8966
// console.log(anotherNumber.toPrecision(3));
// console.log(anotherNumber.toPrecision(4));
// console.log(anotherNumber.toPrecision(2)); // output is in exponential, use toPrecision when you are sure that the decimal is after a specific digit and use that digit as the value of toPrecision 

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// Properties of JavaScript

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);

// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number.MIN_VALUE); 

//**************** Maths *****************/

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.floor(6.4));
// console.log(Math.ceil(6.4));
// console.log(Math.max(4,7,9,3));
// console.log(Math.min(4,7,9,3));

console.log(Math.random()) // Gives a random number between 0 and 1 including 
console.log((Math.random()*10) + 1);// so that the value will be above .decimals
console.log(Math.floor((Math.random()*10) + 1));// adding one so that the value stays above zero as zero is also an outcome in random function and using floor to roundoff the value

// Formula

const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// actually here , the plus one is  added to include the maximum number(20) into the range .. Zero case is already handled by adding +min after it ...   For example  let's say the random returns 0.99999 then multiply it with 11(20-10+1)..  , we will get 10.989.... take the floor value of this which will be 10 and now add it with min value which is 10 so overall answer would be 20(the ending range). That's the maximum case..  
// Similarly if random returns 0.0122... then everything will get 0 in the left and then adding min(10) to 0 will give us 10 which is the starting range.




















