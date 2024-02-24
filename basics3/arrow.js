const user = {
    username: "harsh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to meta`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function tea(){
//     let username = "harsh"
//     console.log(this.username);
// }
// tea()    /// this function does not work same as the 1st one because it is not in object 




// const tea = function(){
//     let username = "harsh"
//     console.log(this.username);   /// this one too 
// }
// tea()


const tea = () => {
    let username = "harsh"
    // console.log(this);  
}

// tea()


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }


// const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2)   // do not use curly brackets here  in react
const addTwo = (num1 , num2) =>  ({username : "harsh"})   

console.log(addTwo(3 ,4 )); 