//  reduce 

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , curval) {
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval
// } , 1)

const myTotal = myNums.reduce( (acc , curr) => acc+curr,1 )


console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 4999
    },
    {
        itemName: "webdev course",
        price: 1999
    },
    {
        itemName: "java course",
        price: 6969
    },
]

const priceTopay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(priceTopay);