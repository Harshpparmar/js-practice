let myDate = new Date()

//Thu Feb 22 2024 14:30:57 GMT+0530 (India Standard Time)
console.log(myDate.toString());  

// Thu Feb 22 2024
console.log(myDate.toDateString());

// 2024-02-22T09:00:57.992Z
console.log(myDate.toISOString()); 

// 2024-02-22T09:00:57.992Z
console.log(myDate.toJSON()); 

// 22/2/2024
console.log(myDate.toLocaleDateString()); 

// 22/2/2024, 2:30:57 pm
console.log(myDate.toLocaleString()); 

// Thu, 22 Feb 2024 09:12:35 GMT
console.log(myDate.toUTCString());


console.log(typeof myDate); // object 


// let myCreatedDate = new Date(2024 , 0 , 23)
// let myCreatedDate = new Date(2024 , 0 , 23 ,5, 3)
// let myCreatedDate = new Date("2024-01-28")
let myCreatedDate = new Date("01-28-2024")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is :`

newDate.toLocaleString('defalut', {
    weekday:"long",
})


