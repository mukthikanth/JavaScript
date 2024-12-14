const name = "Mukthikanth"
let repoCount = 2

console.log(`My name is ${name} and my repo count is ${repoCount}`);// we assign value using ${}


let gameName = new String("Muk2006-me") // A way of declaring string

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('0'))// we use '' to guide the "indexOf" element

const NewString = gameName.substring(0, 4) // doesn't obey negative values
console.log(NewString);

const anotherString = gameName.slice(-8, 5) // you can use negative values the counting starts from backwards
console.log(anotherString); 


const anotherStringOne = "   Muk   "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());
console.log(anotherStringOne.trimEnd());
console.log(anotherStringOne.trimStart());
// we have trimend and trimstart

const url = "https://Mukthikanth.com/Mukthikanth20%P"// url should be in this form only
console.log(url.replace('20%','-'));
console.log(url.includes('P'))
console.log(url.includes('Gowda'))


console.log(gameName.split('-'));// splits the string and adds it to an array











