
const myArr = [0, 1, 2, 3, 4, 5, 6, 7]

// console.log(myArr[0]);

// array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(7)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr);


// slice , splice

// console.log("A" , myArr);

// const myn1 =  myArr.slice(1 , 3)

// console.log(myn1);
// console.log("B" , myArr);

// const myn2 =  myArr.splice(1 , 3)
// console.log("C" , myArr);
// console.log(myn2);


//--------MORE ARRAY------\\

const marvel_heros = ["ironman", "thor", "hulk", "spiderman"]
const dc_heros = ["superman", "batman", "peacemaker", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);


const another_array = [1, 2, 3 ,[4, 5, 6], 7,[ 6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity)

console.log(usable_another_array);


console.log(Array.isArray("hello") );
console.log(Array.from("hello") );
console.log(Array.from({name: "harsh"})); //intresting case 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));