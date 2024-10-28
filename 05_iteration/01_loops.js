// for(let index = 0 ; index< 5 ; index++){
//     console.log(`${index} `)
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// let i = 0
// while(i<=10){
//     console.log(`value of index is ${i}`)
//     i = i + 2
// }

// let myArr = ["ayush", "ratan", "suyash"]
// let length = myArr.length
// let j = 0
// while(j<length){
//     console.log(myArr[j])
//     j++
// }

// let score = 1
// do{
//     console.log(`Score is ${score}`);
//     score++ 
// }
// while(score<=10);


//FOR OF LOOP
const arr = [1,2,3,4,5]
// for (const num of arr) {               //forof loop give directly values
//     console.log(num)                   //forin gives keys but arr[key] will give values.
// }

// const greeting = "Hello World"
// for (const greet of greeting) {
//     console.log(`each character is ${greet}`)  
// }

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FRN','France')
map.set('IN','India')
// console.log(map)

// for (const key of map) {         //if we give key it will give both
//     console.log(key)
// }

// for (const [key,value] of map) {          //it will give whatever we ask coz of []
//     console.log(key,':-',value)
// }

//forof loop on obj
const myObj = {
    game1: 'NFS',                         //'game1': 'NFS',    
    game2: 'Spider MAN',                  //'game2': 'Spider MAN',
    game3: 'BGMI'                         //'game3': 'BGMI'             //if written in string then also it is not iterable
}
// console.log(myObj)                            //it will give output

// for (const game of myObj) {
//     console.log(game)                    //myObj is not iterable
// }



const a ={}
const b = {key:"b"}
const c = {key:"c"}

a[b] =123
a[c] = 456

console.log(a)