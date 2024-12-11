let score = false

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score)

console.log(ValueInNumber); // Output is NaN as score was "33abc" which means not a number

console.log(typeof ValueInNumber);

// for boolean true Number is 1 and for false it is 0
// "33" => 33; type: number
// "33abc" => NaN; type: number
// "Mukthikanth" => NaN; type: number
// true => 1; false => 0; type: number

let LoggedIn = "1"
let BooleanLoggedIn = Boolean(LoggedIn)
console.log(BooleanLoggedIn);

// 1 => true; 0 => false
// "" => false
// "value" => true

let number = 33
let stringnumber = String(number)
console.log(stringnumber);
console.log(typeof stringnumber);




