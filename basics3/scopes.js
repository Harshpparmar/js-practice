
let a = 300   // global scope


if (true) {
    let a = 10 
    const b = 20 
    console.log("INNER: ", a ); // block scope 
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//// the value written in scope should not go outside the scope 
/// global scope in node and windows are different 
console.log(a);
// console.log(b);
// console.log(c);