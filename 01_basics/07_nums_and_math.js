const value = 400
console.log(value)                                 //400
const balance = new Number(500)
console.log(balance)                               //[Number: 500]
console.log(balance.toString())                    //500               
console.log(balance.toFixed(3))                    //500.000

const num = 123.956
console.log(num.toPrecision(6))                     //if 3 -> 124 , if 6 -> 123.956

const num1 = 1000000
console.log(num1.toLocaleString("en-IN"))           //indian format

//***********************MATHS********************* */

console.log(Math);                                    //Object [Math] {}
console.log(typeof Math);                             //object
console.log(Math.abs(-4));                  //4
console.log(Math.round(4.3));               //4
console.log(Math.round(4.8));               //5
console.log(Math.ceil(4.8));                //5
console.log(Math.floor(4.8));               //4
console.log(Math.min(4,9,2,7,50));          //2
console.log(Math.max(4,9,2,7,50));          //50

console.log(Math.random())                     //always in between 0 and 1
console.log(Math.random()*10)                  //always in between 0 and 10
console.log((Math.random()*10)+1)              //always in between 1 and 10
console.log(Math.floor(Math.random()*10)+1)


const min = 10
const max = 20

//IMPORTANT
console.log(Math.floor(Math.random() * (max-min +1))+min)
