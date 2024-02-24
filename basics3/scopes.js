
let a = 300   // global scope


if (true) {
    let a = 10 
    const b = 20 
    // console.log("INNER: ", a ); // block scope 
}


//// the value written in scope should not go outside the scope 
/// global scope in node and windows are different 
// console.log(a);
// console.log(b);
// console.log(c);



//////////////\\\\\\\\\\\\\\\



function one(){
    const username = "harsh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two()
}
// one()


if (true) {
    const username = "harsh"
    if (username === "harsh") {
        const website = " meta.com"
        // console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);


///////////////////////////////////////////
console.log(addOne(5))
function addOne(num){
    return num + 1 
}



addTwo(5)
const addTwo = function(num ){
    return num + 2
}

// with addtwo function when the code is executing the error accurs because the  function written as const it holds the value so the error will say as can't access the addtwo before the initialization.