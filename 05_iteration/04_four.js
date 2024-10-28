const num = [1,2,3,4,5,6,7,8,9,10]

// const newnums = num.map((num)=> num+10)
// console.log(newnums)

// //chaining
const newnums1 = num.
                    map((num) => num*10).
                    map((num)=>num+1).
                    filter((num)=>num>=40)
console.log(newnums1)


// //reduce in js
const arr2 = [1,2,3,4,5,6]
// const mytotal = arr2.reduce(function(acc,currval){
//     return acc + currval
// },0)
// console.log(mytotal)

// //using arrow function
const mytotal1 = arr2.reduce((acc,currval)=>acc+currval,0)
// console.log(mytotal1)

const shoppingCart = [
    {
        itemName: "js-course",
        price: 2999
    },
    {
        itemName: "java-course",
        price: 3999
    },
    {
        itemName: "python-course",
        price: 999
    },
    {
        itemName: "cn-course",
        price: 1999
    },
    {
        itemName: "css-course",
        price: 5999
    }
]

const totalprice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice)