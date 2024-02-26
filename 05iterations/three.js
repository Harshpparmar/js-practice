//  for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world1"

for (const greet of greetings) {
    // console.log(`each chare is ${greet}`);
}


// maps 

const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('Fr', "FRANCE")

// console.log(map);

for (const [key , value] of map) {
    // console.log(key , ':-' , value);
}

// objects normally are not itieratable

const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

for (const [key , value] of myObject) {
    console.log(key , ':-' , value);
}