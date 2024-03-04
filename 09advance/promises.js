const promiseOne = new Promise(function(resolve , reject) {
    // do and async task 
    // DB calls , cryptography , networkcall 
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    }, 1000)
}) 

promiseOne.then(function(){
    console.log("promise consumed");
})

///2nd
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// 3rd 

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({usernsme: "chai", email:"parmarharsh213@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


//4th

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "harsh" , password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    } , 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("finally the promise is either resolve or rejected") ) 


//5th 

const promiseFive = new Promise(function(resolve , reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript" , password: "123"})
        } else{
            reject('ERROR: Something in js went wrong')
        }
    } , 1000)
})

async function consumePromiseFive(){
        try {
            const response = await promiseFive
        console.log(response);
        } catch (error) {
            console.log(error);
        }
}

consumePromiseFive()


// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//         console.log("E:" ,error);
//    }
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))