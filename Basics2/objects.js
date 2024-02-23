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
    console.log("hello harsh ");
}

Jsuser.greetingTo = function() {
    console.log(`hello user,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTo());