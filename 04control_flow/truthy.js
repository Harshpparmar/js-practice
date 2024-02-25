const userEmail = []

if (userEmail) {
    console.log("got user email");
} else{
    console.log("dont have user email ");
}


//// falsy value \\\\

// false 
// 0 , -0 
// BigInt 0n 
// ""
// null , undefined
// NaN


//// truthy value \\\\

// "0"
// 'false'
// " " 
// []
// {}
// function(){}


// if (userEmail.length === 0) {
//     console.log("array is empty ");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ) {
    console.log("obj is empty");
}

//  Nullish Coalescing Operator (??) : null undefined // if the null value occurs it checks the safety of it 


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 


console.log(val1);


// terniary operator 

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");