const user = {
    username: "harsh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);


////\\\\\\ constructor function


// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this 

}

const userOne = new User("harsh" , 12 , true)
const userTwo = new User("palak", 11,false)

console.log(userOne.constructor);
console.log(userTwo);


/// whenever there is NEW keyword created it creates an empty object that is called instance 
// 2nd step one constructor function is called because of NEW keyword 3rd then it packs all the argument and sends it 
//  and 4th step we get the data into function


// constructor is reference of itself 

// instanceof read 