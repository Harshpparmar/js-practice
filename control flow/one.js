//  if 
const isUserLoggedIn = true 
const temperature = 33 
// if (temperature === 50) {
//     console.log("less");
// }else {
//     console.log("is greater");
// }

// //// Comparision operators 

// < , > , <= , >=, == , != , === , !==

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);


// shorthand notation 


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test"); // donot write like this 

// if (balance < 500) {
//     console.log("less than 500 ");
// } else if (balance < 750) {
//     console.log("less than 750 ");
// } else if (balance < 900) {
//     console.log("less than 900 ");
// } else {
//     console.log("less than 1200");
// }


const useLoggedIn =  true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (isUserLoggedIn && debitCard && 2==3) {
    console.log("allow to buy product");
} 
if (loggedInFromGoogle || loggedInFromEmail) {  
    console.log("success");
}