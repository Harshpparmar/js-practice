const name =  "harsh"
const repoCount = 10 

// console.log(name + repoCount + "value");  //dont use this method is not a good way to print strings

// console.log(`hello my name is ${name} and my repo cound is ${repoCount}`);

const gameName = new String('harsh-parmar-php') 

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));

// const freshString = gameName.substring(0,4)
// console.log(freshString);

// const anotherString = gameName.slice(-5, 4)
// console.log(anotherString);

const newStringOne = "   harsh   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://harsh.com/harsh%20parmar"

console.log(url.replace('%20' , '-'));

console.log(url.includes('harsh'));

console.log(gameName.split('-'));
