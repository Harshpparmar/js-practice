// console.log("h");
// console.log("a");
// console.log("r");
// console.log("s");
// console.log("h");

function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}

// sayMyName() // exicuting the function 
// sayMyName // referrence 

// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1 , number2) {
    
    // let result = number1 + number2 
    // return result
    return number1 + number2
}

const result = addTwoNumbers( 3 , 4 )
// console.log("Result : ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("plese enter username!");
        return
    }
    return `${username} just logged in `
}


// console.log(loginUserMessage("harsh"))
// console.log(loginUserMessage())     /// undefined is the answer

function caculateCartPrice(val1,val2,...num1){

    return num1
}
// console.log(caculateCartPrice(2))
// console.log(caculateCartPrice(200,400,500 , 1000))


const user = {
    username: "harsh",
    prices: 299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject(
    {
        username: "pam",
        price: 399
    }
)

const myNewArray = [200,100,300,600]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500 , 1000]));