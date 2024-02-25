// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > "3" );
// console.log("02" > "1" );

// console.log(null > 0); //avoid this types(with undefined too) of conversions this can put you in confusion 
// console.log(null == 0);
// console.log(null >= 0);


/* 

in js the comparision and equality check are two different things or concepts 

*/

// strict check ===


// console.log("2" === 2 );
// console.log(2 === 2 );


/* 
//  DATA TYPES summary \\



catagoriesed into two types:


// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

1) primitive 
    > 7 types of primitive are there.
    > String , Number , Boolean , null , undefined , Symbol , BigInt 



2) non-premitive OR Reference :
    > Array , Objects , Functions 


*/
const heros = ["ironman","batman", "superman", "thor"];

let obj = {
    name: "harsh",
    age: 22,
}

const myfunction = function(){
    // console.log("hello");
}



// const id = Symbol('1234')
// const anotherId = Symbol('1234')

// console.log(id === anotherId);

/* Return type of variables in JavaScript
1) Primitive Datatypes
    Number => number
    String  => string
    Boolean  => boolean
    null  => object
    undefined  =>  undefined
    Symbol  =>  symbol
    BigInt  =>  bigint

2) Non-primitive Datatypes
    Arrays  =>  object
    Function  =>  function
    Object  =>  object

 */




/* MEMORIES  

// Stack(Primitive), Heap (Non-Primitive)

*/

let myStudentname = "student";
let anotherstudent = myStudentname

anotherstudent = "differentone"

console.log(anotherstudent);
console.log(myStudentname);

let userOne = {
    email: "user@gmail.com",
    upi: "upi@hdfc"
}

let usertwo = userOne

usertwo.email = "hardh@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);

/* 
// summary of stack and heap 
    //datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.



*/


