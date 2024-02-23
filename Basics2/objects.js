// singleton - when objects made with constructor is becomes singleton.
// Object.create


// object literals 

const mySym = Symbol("key1")

const Jsuser = {
    name: "harsh",
    "full name": "harsh parmar",
    [mySym]: "mykey1",
    age: 20,
    location: "junagadh",
    email: "parmarharsh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(Jsuser.email); not a right way 

// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser["mySym"]);
// console.log(typeof mySym);


Jsuser.email = "hp@gmail.com"
// console.log(Jsuser["email"]);

// Object.freeze(Jsuser)
Jsuser.email = "hp@chatgmail.com"
// console.log(Jsuser);


Jsuser.greeting = function() {
    // console.log("hello harsh ");
}

Jsuser.greetingTo = function() {
    // console.log(`hello user,${this.name}`);
}

// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTo());



/////// \\\\\\\
// more about singleton 

// const metaUser = new Object()

const metaUser = {}

metaUser.id = "123hpp"
metaUser.name = "metaharsh"
metaUser.isLoggedIn = "false"


// console.log(metaUser);

const regularUser = {
    email : "metahp@meta.com",
    fullname : {
        userfullname: {
            firstname: "harsh",
            lastname: "parmar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a" , 6:"b"}

// const obj3 = Object.assign({}, obj1 , obj2 , obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email:"hp@gmail.com"
    },
    {
        id: 2,
        email:"hp2@gmail.com"
    },    {
        id: 3,
        email:"hp3@gmail.com"
    },    {
        id: 4,
        email:"hp4@gmail.com"
    },
]

users[1].email
// console.log(metaUser);


// console.log(Object.keys(metaUser)); // imp for database 
// console.log(Object.values(metaUser));
// console.log(Object.entries(metaUser));


// console.log(metaUser.hasOwn('isLogged'));


console.log(metaUser.hasOwnProperty('isLoggedIn'));

